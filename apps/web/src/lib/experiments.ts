import { readFileSync, readdirSync, existsSync } from 'fs';
import { join } from 'path';
import type { Experiment } from '@stem-lab/shared';

// Try multiple possible paths for experiments directory
const possiblePaths = [
  join(process.cwd(), '../../experiments'),
  join(process.cwd(), '../../../experiments'),
  join(process.cwd(), 'experiments'),
  join(process.cwd(), '..', 'experiments'),
];

function getExperimentsDir(): string {
  for (const path of possiblePaths) {
    if (existsSync(path)) {
      console.log('Found experiments directory at:', path);
      return path;
    }
  }
  console.error('Experiments directory not found. Tried paths:', possiblePaths);
  return possiblePaths[0]; // Return first path as fallback
}

const EXPERIMENTS_DIR = getExperimentsDir();

/**
 * Get all experiments from the file system
 */
export function getAllExperiments(): Experiment[] {
  const experiments: Experiment[] = [];
  
  const levels = ['basic', 'intermediate', 'advanced'];
  
  for (const level of levels) {
    const levelDir = join(EXPERIMENTS_DIR, level);
    
    try {
      if (!existsSync(levelDir)) {
        console.log(`Level directory does not exist: ${levelDir}`);
        continue;
      }

      const files = readdirSync(levelDir);
      const jsonFiles = files.filter(file => file.endsWith('.json'));
      
      console.log(`Found ${jsonFiles.length} JSON files in ${level}:`, jsonFiles);
      
      for (const file of jsonFiles) {
        try {
          const filePath = join(levelDir, file);
          const content = readFileSync(filePath, 'utf-8');
          const experiment = JSON.parse(content) as Experiment;
          experiments.push(experiment);
        } catch (error) {
          console.error(`Error reading experiment ${file}:`, error);
        }
      }
    } catch (error) {
      console.error(`Error reading level directory ${level}:`, error);
    }
  }
  
  console.log(`Total experiments loaded: ${experiments.length}`);
  return experiments;
}

/**
 * Get a single experiment by ID
 */
export function getExperimentById(id: string): Experiment | null {
  const experiments = getAllExperiments();
  return experiments.find(exp => exp.id === id) || null;
}

/**
 * Get a single experiment by slug
 */
export function getExperimentBySlug(slug: string): Experiment | null {
  const experiments = getAllExperiments();
  return experiments.find(exp => (exp as any).slug === slug) || null;
}

/**
 * Get experiments by level
 */
export function getExperimentsByLevel(level: string): Experiment[] {
  const experiments = getAllExperiments();
  return experiments.filter(exp => (exp.metadata as any).level === level);
}

/**
 * Get experiments by safety level
 */
export function getExperimentsBySafetyLevel(safetyLevel: string): Experiment[] {
  const experiments = getAllExperiments();
  return experiments.filter(exp => (exp as any).safety?.level === safetyLevel);
}

// Made with Bob
