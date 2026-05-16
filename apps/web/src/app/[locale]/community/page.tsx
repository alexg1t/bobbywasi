import { useTranslations } from 'next-intl';
import BobbyMascot from '@/components/BobbyMascot';

export default function CommunityPage({ params: { locale } }: { params: { locale: string } }) {
  return <CommunityContent locale={locale} />;
}

function CommunityContent({ locale }: { locale: string }) {
  const title = locale === 'es' ? '¡Comunidad BobbyWasi!' : 'BobbyWasi Community!';
  const subtitle = locale === 'es' 
    ? '🌟 Próximamente: Comparte tus experimentos y conecta con otros científicos 🌟'
    : '🌟 Coming Soon: Share your experiments and connect with other scientists 🌟';
  const description = locale === 'es'
    ? 'Estamos trabajando en crear un espacio increíble donde podrás compartir fotos de tus experimentos, hacer preguntas y aprender de otros niños científicos como tú.'
    : 'We are working on creating an amazing space where you can share photos of your experiments, ask questions and learn from other young scientists like you.';
  const features = locale === 'es' ? [
    '📸 Galería de experimentos',
    '💬 Foro de preguntas',
    '🏆 Sistema de logros',
    '👥 Perfiles de usuario',
    '⭐ Experimentos favoritos'
  ] : [
    '📸 Experiment gallery',
    '💬 Q&A forum',
    '🏆 Achievement system',
    '👥 User profiles',
    '⭐ Favorite experiments'
  ];
  const cta = locale === 'es' ? '¡Vuelve pronto!' : 'Come back soon!';

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <BobbyMascot size="hero" animated={true} className="mx-auto mb-6" />
          <h1 
            className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-500 bg-clip-text text-transparent"
            style={{ fontFamily: 'var(--font-baloo)' }}
          >
            {title}
          </h1>
          <p className="text-2xl text-gray-700 font-semibold" style={{ fontFamily: 'var(--font-baloo)' }}>
            {subtitle}
          </p>
        </div>

        <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-10 shadow-xl mb-8">
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            {description}
          </p>
          
          <h2 className="text-2xl font-bold text-emerald-600 mb-4" style={{ fontFamily: 'var(--font-baloo)' }}>
            {locale === 'es' ? '✨ Características Próximas:' : '✨ Upcoming Features:'}
          </h2>
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="text-lg text-gray-700 flex items-center space-x-3">
                <span className="text-2xl">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-center bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded-3xl p-12 shadow-2xl">
          <div className="text-6xl mb-4">🚀</div>
          <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-baloo)' }}>
            {cta}
          </h2>
          <p className="text-xl text-white/90">
            {locale === 'es' 
              ? 'Mientras tanto, ¡explora nuestros experimentos!'
              : 'In the meantime, explore our experiments!'}
          </p>
        </div>
      </div>
    </div>
  );
}

// Made with Bob