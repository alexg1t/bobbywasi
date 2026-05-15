import Link from 'next/link';
import BobbyMascot from '@/components/BobbyMascot';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section - MEJORADO */}
      <div className="text-center mb-20">
        <BobbyMascot size="hero" animated={true} className="mx-auto mb-6" />
        <div className="mb-4">
          <span className="text-2xl font-bold text-emerald-600" style={{ fontFamily: 'var(--font-baloo)' }}>
            ¡Hola! Soy Bobby, tu guía científico 🐧
          </span>
        </div>
        <h1 
          className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-500 bg-clip-text text-transparent drop-shadow-lg"
          style={{ fontFamily: 'var(--font-baloo)' }}
        >
          ¡Bienvenido a BobbyWasi!
        </h1>
        <p className="text-2xl md:text-3xl text-gray-700 mb-8 font-semibold" style={{ fontFamily: 'var(--font-baloo)' }}>
          🌿 Tu compañero en aventuras científicas 🔬
        </p>
        
        {/* Estadísticas Badges */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <div className="bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border-2 border-emerald-400">
            <span className="font-bold text-emerald-600" style={{ fontFamily: 'var(--font-baloo)' }}>
              🧪 10 Experimentos
            </span>
          </div>
          <div className="bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border-2 border-teal-400">
            <span className="font-bold text-teal-600" style={{ fontFamily: 'var(--font-baloo)' }}>
              🛡️ 3 Niveles
            </span>
          </div>
          <div className="bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border-2 border-cyan-400">
            <span className="font-bold text-cyan-600" style={{ fontFamily: 'var(--font-baloo)' }}>
              ✅ 100% Seguro
            </span>
          </div>
        </div>

        <Link
          href="/experiments"
          className="inline-block bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-12 py-5 rounded-full text-2xl font-bold hover:scale-110 transform transition-all duration-300 shadow-2xl hover:shadow-emerald-500/50"
          style={{ fontFamily: 'var(--font-baloo)' }}
        >
          🧪 ¡Ver Experimentos! 🌟
        </Link>
      </div>

      {/* Sección "Conoce a Bobby" - NUEVA */}
      <div className="max-w-4xl mx-auto mb-20 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-10 shadow-xl">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <BobbyMascot size="large" animated={true} className="mx-auto md:mx-0" />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-emerald-600 mb-4" style={{ fontFamily: 'var(--font-baloo)' }}>
              🐧 Conoce a Bobby
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              ¡Hola! Soy Bobby, un pingüino de Humboldt muy curioso que ama la ciencia. 
              Vengo de las costas de Perú y me encanta explorar, experimentar y aprender cosas nuevas.
            </p>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <span className="text-2xl">🎯</span>
                <div>
                  <h3 className="font-bold text-emerald-700" style={{ fontFamily: 'var(--font-baloo)' }}>Mi Misión</h3>
                  <p className="text-gray-600">Ayudar a niños a descubrir la ciencia de forma divertida y segura</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-2xl">💡</span>
                <div>
                  <h3 className="font-bold text-teal-700" style={{ fontFamily: 'var(--font-baloo)' }}>Mis Valores</h3>
                  <p className="text-gray-600">Curiosidad, Seguridad y Diversión en cada experimento</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cómo Funciona (3 Pasos) - NUEVA */}
      <div className="max-w-5xl mx-auto mb-20">
        <h2 
          className="text-4xl font-bold text-center mb-12 text-emerald-600"
          style={{ fontFamily: 'var(--font-baloo)' }}
        >
          🚀 ¿Cómo Funciona?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Paso 1 */}
          <div className="text-center relative">
            <div className="bg-gradient-to-br from-emerald-400 to-teal-400 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <span className="text-4xl font-bold text-white" style={{ fontFamily: 'var(--font-baloo)' }}>1</span>
            </div>
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-emerald-700 mb-3" style={{ fontFamily: 'var(--font-baloo)' }}>
              Elige
            </h3>
            <p className="text-gray-700 text-lg">
              Selecciona tu experimento favorito de nuestra colección
            </p>
            {/* Arrow */}
            <div className="hidden md:block absolute top-10 -right-8 text-4xl text-teal-400">→</div>
          </div>

          {/* Paso 2 */}
          <div className="text-center relative">
            <div className="bg-gradient-to-br from-teal-400 to-cyan-400 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <span className="text-4xl font-bold text-white" style={{ fontFamily: 'var(--font-baloo)' }}>2</span>
            </div>
            <div className="text-6xl mb-4">📋</div>
            <h3 className="text-2xl font-bold text-teal-700 mb-3" style={{ fontFamily: 'var(--font-baloo)' }}>
              Reúne
            </h3>
            <p className="text-gray-700 text-lg">
              Consigue los materiales que ya tienes en casa
            </p>
            {/* Arrow */}
            <div className="hidden md:block absolute top-10 -right-8 text-4xl text-cyan-400">→</div>
          </div>

          {/* Paso 3 */}
          <div className="text-center">
            <div className="bg-gradient-to-br from-cyan-400 to-blue-400 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <span className="text-4xl font-bold text-white" style={{ fontFamily: 'var(--font-baloo)' }}>3</span>
            </div>
            <div className="text-6xl mb-4">🔬</div>
            <h3 className="text-2xl font-bold text-cyan-700 mb-3" style={{ fontFamily: 'var(--font-baloo)' }}>
              Experimenta
            </h3>
            <p className="text-gray-700 text-lg">
              ¡Sigue las instrucciones y aprende mientras te diviertes!
            </p>
          </div>
        </div>
      </div>

      {/* Experimentos Destacados - NUEVA */}
      <div className="max-w-6xl mx-auto mb-20">
        <h2 
          className="text-4xl font-bold text-center mb-12 text-teal-600"
          style={{ fontFamily: 'var(--font-baloo)' }}
        >
          ⭐ Experimentos Destacados
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Experimento 1 */}
          <Link href="/experiments/volcan-bicarbonato" className="group">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-4 border-green-400 hover:scale-105 transform">
              <div className="text-7xl mb-4 text-center group-hover:animate-bounce">🌋</div>
              <div className="flex justify-center mb-3">
                <span className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-bold">🟢 Básico</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3 text-center" style={{ fontFamily: 'var(--font-baloo)' }}>
                Volcán de Bicarbonato
              </h3>
              <p className="text-gray-600 text-center mb-4">
                ¡El más popular! Crea erupciones espectaculares
              </p>
              <div className="flex justify-center items-center space-x-4 text-sm text-gray-500">
                <span>⏱️ 15 min</span>
                <span>👥 Solo</span>
              </div>
            </div>
          </Link>

          {/* Experimento 2 */}
          <Link href="/experiments/circuito-simple" className="group">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-4 border-yellow-400 hover:scale-105 transform">
              <div className="text-7xl mb-4 text-center group-hover:animate-bounce">💡</div>
              <div className="flex justify-center mb-3">
                <span className="bg-yellow-100 text-yellow-700 px-4 py-1 rounded-full text-sm font-bold">🟡 Intermedio</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3 text-center" style={{ fontFamily: 'var(--font-baloo)' }}>
                Circuito Eléctrico
              </h3>
              <p className="text-gray-600 text-center mb-4">
                ¡El más educativo! Aprende sobre electricidad
              </p>
              <div className="flex justify-center items-center space-x-4 text-sm text-gray-500">
                <span>⏱️ 30 min</span>
                <span>👥 Con ayuda</span>
              </div>
            </div>
          </Link>

          {/* Experimento 3 */}
          <Link href="/experiments/cohete-agua" className="group">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-4 border-red-400 hover:scale-105 transform">
              <div className="text-7xl mb-4 text-center group-hover:animate-bounce">🚀</div>
              <div className="flex justify-center mb-3">
                <span className="bg-red-100 text-red-700 px-4 py-1 rounded-full text-sm font-bold">🔴 Avanzado</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3 text-center" style={{ fontFamily: 'var(--font-baloo)' }}>
                Cohete de Agua
              </h3>
              <p className="text-gray-600 text-center mb-4">
                ¡El más emocionante! Lanza tu propio cohete
              </p>
              <div className="flex justify-center items-center space-x-4 text-sm text-gray-500">
                <span>⏱️ 45 min</span>
                <span>👥 Adulto</span>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* Safety System */}
      <div className="max-w-5xl mx-auto mb-16">
        <h2 
          className="text-4xl font-bold text-center mb-10 text-emerald-600"
          style={{ fontFamily: 'var(--font-baloo)' }}
        >
          🛡️ Sistema de Seguridad de 3 Niveles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Green Level */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-4 border-green-400 hover:scale-105 transform">
            <div className="text-6xl mb-4 text-center">🟢</div>
            <h3 className="text-2xl font-bold text-green-600 mb-3 text-center" style={{ fontFamily: 'var(--font-baloo)' }}>
              Nivel Verde
            </h3>
            <p className="text-lg text-gray-700 text-center font-medium">
              ¡Totalmente seguro! Puedes hacerlo solo 😊
            </p>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li>✅ Sin supervisión adulta</li>
              <li>✅ Materiales seguros</li>
              <li>✅ Para edades 6-12 años</li>
            </ul>
          </div>

          {/* Yellow Level */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-4 border-yellow-400 hover:scale-105 transform">
            <div className="text-6xl mb-4 text-center">🟡</div>
            <h3 className="text-2xl font-bold text-yellow-600 mb-3 text-center" style={{ fontFamily: 'var(--font-baloo)' }}>
              Nivel Amarillo
            </h3>
            <p className="text-lg text-gray-700 text-center font-medium">
              ¡Mejor con ayuda! Pide a un adulto 👨‍👩‍👧‍👦
            </p>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li>⚠️ Supervisión sugerida</li>
              <li>⚠️ Más cuidado necesario</li>
              <li>⚠️ Para edades 8-14 años</li>
            </ul>
          </div>

          {/* Red Level */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-4 border-red-400 hover:scale-105 transform">
            <div className="text-6xl mb-4 text-center">🔴</div>
            <h3 className="text-2xl font-bold text-red-600 mb-3 text-center" style={{ fontFamily: 'var(--font-baloo)' }}>
              Nivel Rojo
            </h3>
            <p className="text-lg text-gray-700 text-center font-medium">
              ¡Adulto obligatorio! Seguridad primero 🛡️
            </p>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li>🚨 Supervisión OBLIGATORIA</li>
              <li>🚨 Equipo de protección</li>
              <li>🚨 Para edades 10-16 años</li>
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
          ✨ ¿Por qué BobbyWasi es Genial? ✨
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-emerald-100 to-teal-100 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all backdrop-blur-sm bg-white/50">
            <div className="text-5xl mb-4">📚</div>
            <h3 className="text-2xl font-bold text-emerald-700 mb-3" style={{ fontFamily: 'var(--font-baloo)' }}>
              Aprende Jugando
            </h3>
            <p className="text-gray-700 text-lg">
              Cada experimento incluye explicaciones científicas divertidas y fáciles de entender
            </p>
          </div>

          <div className="bg-gradient-to-br from-cyan-100 to-blue-100 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all backdrop-blur-sm bg-white/50">
            <div className="text-5xl mb-4">🏠</div>
            <h3 className="text-2xl font-bold text-cyan-700 mb-3" style={{ fontFamily: 'var(--font-baloo)' }}>
              Materiales Caseros
            </h3>
            <p className="text-gray-700 text-lg">
              Usa cosas que ya tienes en casa. ¡Nada complicado ni costoso!
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all backdrop-blur-sm bg-white/50">
            <div className="text-5xl mb-4">🛡️</div>
            <h3 className="text-2xl font-bold text-green-700 mb-3" style={{ fontFamily: 'var(--font-baloo)' }}>
              100% Seguro
            </h3>
            <p className="text-gray-700 text-lg">
              Cada experimento ha sido revisado para garantizar tu seguridad
            </p>
          </div>

          <div className="bg-gradient-to-br from-teal-100 to-cyan-100 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all backdrop-blur-sm bg-white/50">
            <div className="text-5xl mb-4">🎯</div>
            <h3 className="text-2xl font-bold text-teal-700 mb-3" style={{ fontFamily: 'var(--font-baloo)' }}>
              Paso a Paso
            </h3>
            <p className="text-gray-700 text-lg">
              Instrucciones claras y detalladas para que no te pierdas
            </p>
          </div>
        </div>
      </div>

      {/* CTA Final - MEJORADO */}
      <div className="text-center bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded-3xl p-12 shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
        <div className="relative z-10">
          <BobbyMascot size="large" animated={true} className="mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-baloo)' }}>
            🌿 ¿Listo para tu Primera Aventura Científica? 🔬
          </h2>
          <p className="text-2xl text-white/90 mb-8 font-semibold">
            ¡Bobby te está esperando con 10 experimentos increíbles!
          </p>
          <Link
            href="/experiments"
            className="inline-block bg-white text-emerald-600 px-12 py-5 rounded-full text-2xl font-bold hover:scale-110 transform transition-all duration-300 shadow-xl hover:shadow-white/50"
            style={{ fontFamily: 'var(--font-baloo)' }}
          >
            🧪 ¡Empezar Ahora! ✨
          </Link>
        </div>
      </div>
    </div>
  );
}

// Made with Bob
