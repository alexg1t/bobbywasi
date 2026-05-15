import { getAllExperiments } from '@/lib/experiments';
import BobbyMascot from '@/components/BobbyMascot';
import ExperimentsFilter from '@/components/ExperimentsFilter';

export default function ExperimentsPage() {
  const experiments = getAllExperiments();

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <BobbyMascot size="large" animated={true} className="mx-auto mb-4" />
          <h1 
            className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-500 bg-clip-text text-transparent"
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
          <ExperimentsFilter experiments={experiments} />
        )}
      </div>
    </div>
  );
}

// Made with Bob
