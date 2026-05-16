import { useTranslations } from 'next-intl';
import Link from 'next/link';
import BobbyMascot from '@/components/BobbyMascot';

export default function Home({ params: { locale } }: { params: { locale: string } }) {
  return <HomeContent locale={locale} />;
}

function HomeContent({ locale }: { locale: string }) {
  const t = useTranslations('home');

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-20">
        <BobbyMascot size="hero" animated={true} className="mx-auto mb-6" />
        <div className="mb-4">
          <span className="text-2xl font-bold text-emerald-600" style={{ fontFamily: 'var(--font-baloo)' }}>
            {t('hero.greeting')}
          </span>
        </div>
        <h1 
          className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-500 bg-clip-text text-transparent drop-shadow-lg"
          style={{ fontFamily: 'var(--font-baloo)' }}
        >
          {t('hero.title')}
        </h1>
        <p className="text-2xl md:text-3xl text-gray-700 mb-8 font-semibold" style={{ fontFamily: 'var(--font-baloo)' }}>
          {t('hero.subtitle')}
        </p>
        
        {/* Estadísticas Badges */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <div className="bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border-2 border-emerald-400">
            <span className="font-bold text-emerald-600" style={{ fontFamily: 'var(--font-baloo)' }}>
              {t('hero.experimentsCount', { count: 10 })}
            </span>
          </div>
          <div className="bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border-2 border-teal-400">
            <span className="font-bold text-teal-600" style={{ fontFamily: 'var(--font-baloo)' }}>
              {t('hero.levelsCount')}
            </span>
          </div>
          <div className="bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border-2 border-cyan-400">
            <span className="font-bold text-cyan-600" style={{ fontFamily: 'var(--font-baloo)' }}>
              {t('hero.safetyBadge')}
            </span>
          </div>
        </div>

        <Link
          href={`/${locale}/experiments`}
          className="inline-block bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-12 py-5 rounded-full text-2xl font-bold hover:scale-110 transform transition-all duration-300 shadow-2xl hover:shadow-emerald-500/50"
          style={{ fontFamily: 'var(--font-baloo)' }}
        >
          {t('hero.cta')}
        </Link>
      </div>

      {/* Sección "Conoce a Bobby" */}
      <div className="max-w-4xl mx-auto mb-20 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-10 shadow-xl">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <BobbyMascot size="large" animated={true} className="mx-auto md:mx-0" />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-emerald-600 mb-4" style={{ fontFamily: 'var(--font-baloo)' }}>
              {t('meetBobby.title')}
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              {t('meetBobby.description')}
            </p>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <span className="text-2xl">🎯</span>
                <div>
                  <h3 className="font-bold text-emerald-700" style={{ fontFamily: 'var(--font-baloo)' }}>
                    {t('meetBobby.mission.title')}
                  </h3>
                  <p className="text-gray-600">{t('meetBobby.mission.description')}</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-2xl">💡</span>
                <div>
                  <h3 className="font-bold text-teal-700" style={{ fontFamily: 'var(--font-baloo)' }}>
                    {t('meetBobby.values.title')}
                  </h3>
                  <p className="text-gray-600">{t('meetBobby.values.description')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cómo Funciona (3 Pasos) */}
      <div className="max-w-5xl mx-auto mb-20">
        <h2 
          className="text-4xl font-bold text-center mb-12 text-emerald-600"
          style={{ fontFamily: 'var(--font-baloo)' }}
        >
          {t('howItWorks.title')}
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Paso 1 */}
          <div className="text-center relative">
            <div className="bg-gradient-to-br from-emerald-400 to-teal-400 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <span className="text-4xl font-bold text-white" style={{ fontFamily: 'var(--font-baloo)' }}>1</span>
            </div>
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-emerald-700 mb-3" style={{ fontFamily: 'var(--font-baloo)' }}>
              {t('howItWorks.step1.title')}
            </h3>
            <p className="text-gray-700 text-lg">
              {t('howItWorks.step1.description')}
            </p>
            <div className="hidden md:block absolute top-10 -right-8 text-4xl text-teal-400">→</div>
          </div>

          {/* Paso 2 */}
          <div className="text-center relative">
            <div className="bg-gradient-to-br from-teal-400 to-cyan-400 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <span className="text-4xl font-bold text-white" style={{ fontFamily: 'var(--font-baloo)' }}>2</span>
            </div>
            <div className="text-6xl mb-4">📋</div>
            <h3 className="text-2xl font-bold text-teal-700 mb-3" style={{ fontFamily: 'var(--font-baloo)' }}>
              {t('howItWorks.step2.title')}
            </h3>
            <p className="text-gray-700 text-lg">
              {t('howItWorks.step2.description')}
            </p>
            <div className="hidden md:block absolute top-10 -right-8 text-4xl text-cyan-400">→</div>
          </div>

          {/* Paso 3 */}
          <div className="text-center">
            <div className="bg-gradient-to-br from-cyan-400 to-blue-400 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <span className="text-4xl font-bold text-white" style={{ fontFamily: 'var(--font-baloo)' }}>3</span>
            </div>
            <div className="text-6xl mb-4">🔬</div>
            <h3 className="text-2xl font-bold text-cyan-700 mb-3" style={{ fontFamily: 'var(--font-baloo)' }}>
              {t('howItWorks.step3.title')}
            </h3>
            <p className="text-gray-700 text-lg">
              {t('howItWorks.step3.description')}
            </p>
          </div>
        </div>
      </div>

      {/* Safety System */}
      <div className="max-w-5xl mx-auto mb-16">
        <h2 
          className="text-4xl font-bold text-center mb-10 text-emerald-600"
          style={{ fontFamily: 'var(--font-baloo)' }}
        >
          {t('safety.title')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Green Level */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-4 border-green-400 hover:scale-105 transform">
            <div className="text-6xl mb-4 text-center">🟢</div>
            <h3 className="text-2xl font-bold text-green-600 mb-3 text-center" style={{ fontFamily: 'var(--font-baloo)' }}>
              {t('safety.green.title')}
            </h3>
            <p className="text-lg text-gray-700 text-center font-medium">
              {t('safety.green.description')}
            </p>
            <ul className="mt-4 space-y-2 text-gray-600">
              {t.raw('safety.green.features').map((feature: string, i: number) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </div>

          {/* Yellow Level */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-4 border-yellow-400 hover:scale-105 transform">
            <div className="text-6xl mb-4 text-center">🟡</div>
            <h3 className="text-2xl font-bold text-yellow-600 mb-3 text-center" style={{ fontFamily: 'var(--font-baloo)' }}>
              {t('safety.yellow.title')}
            </h3>
            <p className="text-lg text-gray-700 text-center font-medium">
              {t('safety.yellow.description')}
            </p>
            <ul className="mt-4 space-y-2 text-gray-600">
              {t.raw('safety.yellow.features').map((feature: string, i: number) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </div>

          {/* Red Level */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-4 border-red-400 hover:scale-105 transform">
            <div className="text-6xl mb-4 text-center">🔴</div>
            <h3 className="text-2xl font-bold text-red-600 mb-3 text-center" style={{ fontFamily: 'var(--font-baloo)' }}>
              {t('safety.red.title')}
            </h3>
            <p className="text-lg text-gray-700 text-center font-medium">
              {t('safety.red.description')}
            </p>
            <ul className="mt-4 space-y-2 text-gray-600">
              {t.raw('safety.red.features').map((feature: string, i: number) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="max-w-5xl mx-auto mb-16">
        <h2 
          className="text-4xl font-bold text-center mb-10 text-teal-600"
          style={{ fontFamily: 'var(--font-baloo)' }}
        >
          {t('features.title')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-emerald-100 to-teal-100 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all backdrop-blur-sm bg-white/50">
            <div className="text-5xl mb-4">📚</div>
            <h3 className="text-2xl font-bold text-emerald-700 mb-3" style={{ fontFamily: 'var(--font-baloo)' }}>
              {t('features.learning.title')}
            </h3>
            <p className="text-gray-700 text-lg">
              {t('features.learning.description')}
            </p>
          </div>

          <div className="bg-gradient-to-br from-cyan-100 to-blue-100 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all backdrop-blur-sm bg-white/50">
            <div className="text-5xl mb-4">🏠</div>
            <h3 className="text-2xl font-bold text-cyan-700 mb-3" style={{ fontFamily: 'var(--font-baloo)' }}>
              {t('features.materials.title')}
            </h3>
            <p className="text-gray-700 text-lg">
              {t('features.materials.description')}
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all backdrop-blur-sm bg-white/50">
            <div className="text-5xl mb-4">🛡️</div>
            <h3 className="text-2xl font-bold text-green-700 mb-3" style={{ fontFamily: 'var(--font-baloo)' }}>
              {t('features.safe.title')}
            </h3>
            <p className="text-gray-700 text-lg">
              {t('features.safe.description')}
            </p>
          </div>

          <div className="bg-gradient-to-br from-teal-100 to-cyan-100 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all backdrop-blur-sm bg-white/50">
            <div className="text-5xl mb-4">🎯</div>
            <h3 className="text-2xl font-bold text-teal-700 mb-3" style={{ fontFamily: 'var(--font-baloo)' }}>
              {t('features.stepByStep.title')}
            </h3>
            <p className="text-gray-700 text-lg">
              {t('features.stepByStep.description')}
            </p>
          </div>
        </div>
      </div>

      {/* CTA Final */}
      <div className="text-center bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded-3xl p-12 shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
        <div className="relative z-10">
          <BobbyMascot size="large" animated={true} className="mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-baloo)' }}>
            {t('cta.title')}
          </h2>
          <p className="text-2xl text-white/90 mb-8 font-semibold">
            {t('cta.subtitle')}
          </p>
          <Link
            href={`/${locale}/experiments`}
            className="inline-block bg-white text-emerald-600 px-12 py-5 rounded-full text-2xl font-bold hover:scale-110 transform transition-all duration-300 shadow-xl hover:shadow-white/50"
            style={{ fontFamily: 'var(--font-baloo)' }}
          >
            {t('cta.button')}
          </Link>
        </div>
      </div>
    </div>
  );
}

// Made with Bob
