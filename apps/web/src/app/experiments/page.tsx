import Link from 'next/link';
import { getAllExperiments } from '@/lib/experiments';
import { SafetyBadge } from '@/components/SafetyBadge';

export default function ExperimentsPage() {
  const experiments = getAllExperiments();

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-7xl mb-4">🧪🔬✨</div>
          <h1 
            className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 bg-clip-text text-transparent"
            style={{ fontFamily: 'var(--font-baloo)' }}
          >
            ¡Experimentos Increíbles!
          </h1>
          <p className="text-2xl text-gray-700 font-semibold" style={{ fontFamily: 'var(--font-baloo)' }}>
            🌟 Descubre {experiments.length} experimentos científicos súper divertidos 🌟
          </p>
        </div>

        {experiments.length === 0 ? (
          <div className="bg-gradient-to-r from-yellow-100 to-orange-100 border-4 border-yellow-500 rounded-3xl p-12 text-center shadow-xl">
            <div className="text-7xl mb-6">🔬</div>
            <h2 className="text-3xl font-bold text-yellow-800 mb-4" style={{ fontFamily: 'var(--font-baloo)' }}>
              ¡Ups! No hay experimentos todavía
            </h2>
            <p className="text-xl text-yellow-700">
              Los experimentos se cargarán desde el directorio /experiments
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {experiments.map((experiment: any) => {
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
                  className={`block bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border-4 ${borderColors[level as keyof typeof borderColors]} hover:scale-105 transform`}
                >
                  <div className={`h-3 bg-gradient-to-r ${safetyColors[level as keyof typeof safetyColors]}`}></div>
                  
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-2xl font-bold text-gray-900 flex-1 leading-tight" style={{ fontFamily: 'var(--font-baloo)' }}>
                        {experiment.metadata?.title || 'Sin título'}
                      </h3>
                    </div>
                    
                    <div className="mb-4">
                      <SafetyBadge level={level} size="sm" />
                    </div>

                    {experiment.metadata?.subtitle && (
                      <p className="text-purple-600 text-base mb-3 font-bold">
                        {experiment.metadata.subtitle}
                      </p>
                    )}

                    <p className="text-gray-600 text-base mb-4 line-clamp-3">
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

                    {experiment.metadata?.tags && Array.isArray(experiment.metadata.tags) && experiment.metadata.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {experiment.metadata.tags.slice(0, 3).map((tag: string, index: number) => (
                          <span
                            key={`${tag}-${index}`}
                            className="text-xs bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 px-3 py-1 rounded-full font-semibold"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className={`bg-gradient-to-r ${safetyColors[level as keyof typeof safetyColors]} px-6 py-4 text-white font-bold text-lg flex items-center justify-between`} style={{ fontFamily: 'var(--font-baloo)' }}>
                    <span>¡Ver Experimento!</span>
                    <span className="text-2xl">→</span>
                  </div>
                </Link>
              );
            })}
          </div>
        )}

        {experiments.length > 0 && (
          <div className="mt-16 text-center bg-gradient-to-r from-purple-100 via-pink-100 to-orange-100 rounded-3xl p-8 shadow-lg">
            <p className="text-2xl font-bold text-purple-700 mb-2" style={{ fontFamily: 'var(--font-baloo)' }}>
              🎉 ¡Más experimentos próximamente! 🎉
            </p>
            <p className="text-lg text-gray-700">
              Estamos trabajando para traerte más diversión científica
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

// Made with Bob
