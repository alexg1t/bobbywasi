import { getExperimentById } from '@/lib/experiments';
import { SafetyBadge } from '@/components/SafetyBadge';
import { ExperimentTabs } from '@/components/ExperimentTabs';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default function ExperimentDetailPage({ params }: { params: { id: string } }) {
  const experiment: any = getExperimentById(params.id);

  if (!experiment) {
    notFound();
  }

  // Combine all materials from different sources
  // Handle both old structure (home/supermarket/etc) and new structure (required)
  const allMaterials = experiment.materials?.required || [
    ...(experiment.materials?.home || []),
    ...(experiment.materials?.supermarket || []),
    ...(experiment.materials?.pharmacy || []),
    ...(experiment.materials?.hardware || []),
  ];

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="max-w-5xl mx-auto">
        {/* Back Button */}
        <Link
          href="/experiments"
          className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-bold text-lg mb-6 transition-all hover:scale-105"
          style={{ fontFamily: 'var(--font-baloo)' }}
        >
          ← Volver a Experimentos
        </Link>

        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 rounded-3xl p-6 md:p-8 mb-6 shadow-2xl">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-baloo)' }}>
            {experiment.metadata?.title}
          </h1>
          
          <div className="flex flex-wrap gap-3 items-center">
            <SafetyBadge level={experiment.safety?.level || 'green'} size="lg" />
            {experiment.metadata?.duration && (
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 md:px-6 py-2 md:py-3 text-white font-bold text-base md:text-lg">
                ⏱️ {experiment.metadata.duration.preparation + experiment.metadata.duration.execution + experiment.metadata.duration.cleanup} min
              </div>
            )}
            <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 md:px-6 py-2 md:py-3 text-white font-bold text-base md:text-lg">
              👥 {experiment.metadata?.ageRange?.min}-{experiment.metadata?.ageRange?.max} años
            </div>
          </div>
        </div>

        {/* Tabs Component (Client-side) */}
        <ExperimentTabs experiment={experiment} allMaterials={allMaterials} />

        {/* Back to Experiments Button */}
        <div className="text-center mt-8">
          <Link
            href="/experiments"
            className="inline-block bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 md:px-12 py-4 md:py-5 rounded-full text-xl md:text-2xl font-bold hover:scale-110 transform transition-all duration-300 shadow-2xl"
            style={{ fontFamily: 'var(--font-baloo)' }}
          >
            🧪 Ver Más Experimentos
          </Link>
        </div>
      </div>
    </div>
  );
}

// Made with Bob
