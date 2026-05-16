'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { SafetyBadge } from '@/components/SafetyBadge';
import BobbyMascot from '@/components/BobbyMascot';

type SafetyLevel = 'all' | 'green' | 'yellow' | 'red';

interface ExperimentsFilterProps {
  experiments: any[];
}

export default function ExperimentsFilter({ experiments }: ExperimentsFilterProps) {
  const [selectedLevel, setSelectedLevel] = useState<SafetyLevel>('all');

  // Filter experiments based on selected level
  const filteredExperiments = useMemo(() => {
    if (selectedLevel === 'all') return experiments;
    return experiments.filter((exp: any) => exp.safety?.level === selectedLevel);
  }, [experiments, selectedLevel]);

  // Count experiments by level
  const counts = useMemo(() => {
    return {
      all: experiments.length,
      green: experiments.filter((exp: any) => exp.safety?.level === 'green').length,
      yellow: experiments.filter((exp: any) => exp.safety?.level === 'yellow').length,
      red: experiments.filter((exp: any) => exp.safety?.level === 'red').length,
    };
  }, [experiments]);

  return (
    <>
      {/* Filter Buttons */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-center mb-6 text-emerald-600" style={{ fontFamily: 'var(--font-baloo)' }}>
          🔍 Filtrar por Nivel
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {/* All */}
          <button
            onClick={() => setSelectedLevel('all')}
            className={`px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 ${
              selectedLevel === 'all'
                ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-xl scale-105'
                : 'bg-white/80 backdrop-blur-sm text-gray-700 border-2 border-gray-300 hover:border-emerald-400'
            }`}
            style={{ fontFamily: 'var(--font-baloo)' }}
          >
            🌈 Todos ({counts.all})
          </button>

          {/* Green */}
          <button
            onClick={() => setSelectedLevel('green')}
            className={`px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 ${
              selectedLevel === 'green'
                ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-xl scale-105'
                : 'bg-white/80 backdrop-blur-sm text-gray-700 border-2 border-green-300 hover:border-green-500'
            }`}
            style={{ fontFamily: 'var(--font-baloo)' }}
          >
            🟢 Básico ({counts.green})
          </button>

          {/* Yellow */}
          <button
            onClick={() => setSelectedLevel('yellow')}
            className={`px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 ${
              selectedLevel === 'yellow'
                ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-xl scale-105'
                : 'bg-white/80 backdrop-blur-sm text-gray-700 border-2 border-yellow-300 hover:border-yellow-500'
            }`}
            style={{ fontFamily: 'var(--font-baloo)' }}
          >
            🟡 Intermedio ({counts.yellow})
          </button>

          {/* Red */}
          <button
            onClick={() => setSelectedLevel('red')}
            className={`px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 ${
              selectedLevel === 'red'
                ? 'bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-xl scale-105'
                : 'bg-white/80 backdrop-blur-sm text-gray-700 border-2 border-red-300 hover:border-red-500'
            }`}
            style={{ fontFamily: 'var(--font-baloo)' }}
          >
            🔴 Avanzado ({counts.red})
          </button>
        </div>
      </div>

      {/* Results Count */}
      {selectedLevel !== 'all' && (
        <div className="text-center mb-8">
          <p className="text-xl text-gray-600 font-semibold" style={{ fontFamily: 'var(--font-baloo)' }}>
            Mostrando {filteredExperiments.length} experimento{filteredExperiments.length !== 1 ? 's' : ''}
          </p>
        </div>
      )}

      {/* Experiments Grid */}
      {filteredExperiments.length === 0 ? (
        <div className="bg-gradient-to-r from-yellow-100 to-orange-100 border-4 border-yellow-500 rounded-3xl p-12 text-center shadow-xl">
          <div className="text-7xl mb-6">🔬</div>
          <h2 className="text-3xl font-bold text-yellow-800 mb-4" style={{ fontFamily: 'var(--font-baloo)' }}>
            ¡Ups! No hay experimentos en este nivel todavía
          </h2>
          <p className="text-xl text-yellow-700 mb-6">
            Prueba con otro nivel o vuelve pronto
          </p>
          <button
            onClick={() => setSelectedLevel('all')}
            className="bg-yellow-600 text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-yellow-700 transition-all"
            style={{ fontFamily: 'var(--font-baloo)' }}
          >
            Ver Todos los Experimentos
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredExperiments.map((experiment: any) => {
            const safetyColors = {
              green: 'from-green-400 to-emerald-500',
              yellow: 'from-yellow-400 to-orange-500',
              red: 'from-red-400 to-pink-500'
            };
            
            const borderColors = {
              green: 'border-green-400 hover:border-green-500',
              yellow: 'border-yellow-400 hover:border-yellow-500',
              red: 'border-red-400 hover:border-red-500'
            };

            const level = experiment.safety?.level || 'green';
            
            return (
              <Link
                key={experiment.id}
                href={`/experiments/${experiment.id}` as any}
                className={`flex flex-col bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border-4 ${borderColors[level as keyof typeof borderColors]} hover:scale-105 transform h-full`}
              >
                <div className={`h-3 bg-gradient-to-r ${safetyColors[level as keyof typeof safetyColors]}`}></div>
                
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 flex-1 leading-tight min-h-[3.5rem]" style={{ fontFamily: 'var(--font-baloo)' }}>
                      {experiment.metadata?.title || 'Sin título'}
                    </h3>
                  </div>
                  
                  <div className="mb-4">
                    <SafetyBadge level={level} size="sm" />
                  </div>

                  <div className="min-h-[1.5rem] mb-3">
                    {experiment.metadata?.subtitle && (
                      <p className="text-emerald-600 text-base font-bold">
                        {experiment.metadata.subtitle}
                      </p>
                    )}
                  </div>

                  <p className="text-gray-600 text-base mb-4 line-clamp-3 min-h-[4.5rem]">
                    {experiment.metadata?.description || 'Sin descripción'}
                  </p>

                  <div className="flex items-center justify-between text-sm text-gray-600 bg-gray-50 rounded-xl p-3 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">⏱️</span>
                      <span className="font-semibold">{experiment.metadata?.estimatedTime || 'N/A'}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xl">👥</span>
                      <span className="font-semibold">
                        {experiment.metadata?.ageRange?.min || 6}-{experiment.metadata?.ageRange?.max || 12} años
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 min-h-[2rem] mt-auto">
                    {experiment.metadata?.tags && Array.isArray(experiment.metadata.tags) && experiment.metadata.tags.length > 0 && (
                      <>
                        {experiment.metadata.tags.slice(0, 3).map((tag: string, index: number) => (
                          <span
                            key={`${tag}-${index}`}
                            className="text-xs bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-700 px-3 py-1 rounded-full font-semibold"
                          >
                            {tag}
                          </span>
                        ))}
                      </>
                    )}
                  </div>
                </div>

                <div className={`bg-gradient-to-r ${safetyColors[level as keyof typeof safetyColors]} px-6 py-4 text-white font-bold text-lg flex items-center justify-between mt-auto`} style={{ fontFamily: 'var(--font-baloo)' }}>
                  <span>¡Ver Experimento!</span>
                  <span className="text-2xl">→</span>
                </div>
              </Link>
            );
          })}
        </div>
      )}

      {/* Footer Message */}
      {filteredExperiments.length > 0 && (
        <div className="mt-16 text-center bg-gradient-to-r from-emerald-100 via-teal-100 to-cyan-100 rounded-3xl p-8 shadow-lg">
          <BobbyMascot size="medium" animated={true} className="mx-auto mb-4" />
          <p className="text-2xl font-bold text-emerald-700 mb-2" style={{ fontFamily: 'var(--font-baloo)' }}>
            🎉 ¡Más experimentos próximamente! 🎉
          </p>
          <p className="text-lg text-gray-700">
            Bobby está trabajando para traerte más diversión científica
          </p>
        </div>
      )}
    </>
  );
}

// Made with Bob