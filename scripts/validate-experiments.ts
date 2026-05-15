#!/usr/bin/env node

import { readFileSync, readdirSync, statSync } from 'fs';
import { join, extname } from 'path';
import { validateExperiment } from '../packages/shared/src/utils/validation';

interface ValidationResult {
  file: string;
  valid: boolean;
  errors?: string[];
}

/**
 * Get all JSON files from a directory recursively
 */
function getJsonFiles(dir: string): string[] {
  const files: string[] = [];
  
  try {
    const items = readdirSync(dir);
    
    for (const item of items) {
      const fullPath = join(dir, item);
      const stat = statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('_') && !item.startsWith('.')) {
        files.push(...getJsonFiles(fullPath));
      } else if (stat.isFile() && extname(item) === '.json') {
        files.push(fullPath);
      }
    }
  } catch (error) {
    console.error(`Error reading directory ${dir}:`, error);
  }
  
  return files;
}

/**
 * Validate a single experiment file
 */
function validateExperimentFile(filePath: string): ValidationResult {
  try {
    const content = readFileSync(filePath, 'utf-8');
    const data = JSON.parse(content);
    const result = validateExperiment(data);
    
    return {
      file: filePath,
      valid: result.success,
      errors: result.errors,
    };
  } catch (error) {
    return {
      file: filePath,
      valid: false,
      errors: [`Failed to parse JSON: ${error instanceof Error ? error.message : 'Unknown error'}`],
    };
  }
}

/**
 * Main validation function
 */
function main() {
  console.log('🔍 STEM Home Lab - Experiment Validator\n');
  console.log('Scanning experiments directory...\n');
  
  const experimentsDir = join(process.cwd(), 'experiments');
  const jsonFiles = getJsonFiles(experimentsDir);
  
  if (jsonFiles.length === 0) {
    console.log('⚠️  No experiment files found.');
    process.exit(0);
  }
  
  console.log(`Found ${jsonFiles.length} experiment file(s)\n`);
  
  const results: ValidationResult[] = [];
  
  for (const file of jsonFiles) {
    const relativePath = file.replace(process.cwd(), '.');
    process.stdout.write(`Validating ${relativePath}... `);
    
    const result = validateExperimentFile(file);
    results.push(result);
    
    if (result.valid) {
      console.log('✅ VALID');
    } else {
      console.log('❌ INVALID');
    }
  }
  
  // Summary
  console.log('\n' + '='.repeat(60));
  console.log('VALIDATION SUMMARY');
  console.log('='.repeat(60) + '\n');
  
  const validCount = results.filter((r) => r.valid).length;
  const invalidCount = results.filter((r) => !r.valid).length;
  
  console.log(`✅ Valid: ${validCount}`);
  console.log(`❌ Invalid: ${invalidCount}`);
  console.log(`📊 Total: ${results.length}\n`);
  
  // Show errors for invalid files
  if (invalidCount > 0) {
    console.log('='.repeat(60));
    console.log('VALIDATION ERRORS');
    console.log('='.repeat(60) + '\n');
    
    for (const result of results) {
      if (!result.valid) {
        const relativePath = result.file.replace(process.cwd(), '.');
        console.log(`\n📄 ${relativePath}`);
        console.log('─'.repeat(60));
        
        if (result.errors) {
          result.errors.forEach((error, index) => {
            console.log(`  ${index + 1}. ${error}`);
          });
        }
      }
    }
    
    console.log('\n' + '='.repeat(60) + '\n');
    console.log('❌ Validation failed. Please fix the errors above.\n');
    process.exit(1);
  }
  
  console.log('✅ All experiments are valid!\n');
  process.exit(0);
}

// Run the validator
main();

// Made with Bob
