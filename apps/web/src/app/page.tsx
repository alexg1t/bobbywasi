import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <div className="text-8xl mb-6 animate-bounce">🔬🧪🚀</div>
        <h1 
          className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 bg-clip-text text-transparent"
          style={{ fontFamily: 'var(--font-baloo)' }}
        >
          ¡Bienvenido a BobbyWasi!
        </h1>
        <p className="text-2xl md:text-3xl text-gray-700 mb-8 font-semibold" style={{ fontFamily: 'var(--font-baloo)' }}>
          🌟 ¡Descubre la ciencia de forma divertida y segura! 🌟
        </p>
        <Link
          href="/experiments"
          className="inline-block bg-gradient-to-r from-purple-600 to-pink-500 text-white px-12 py-5 rounded-full text-2xl font-bold hover:scale-110 transform transition-all duration-300 shadow-2xl hover:shadow-purple-500/50"
          style={{ fontFamily: 'var(--font-baloo)' }}
        >
          🧪 ¡Ver Experimentos! 🚀
        </Link>
      </div>

      {/* Safety System */}
      <div className="max-w-5xl mx-auto mb-16">
        <h2 
          className="text-4xl font-bold text-center mb-10 text-purple-600"
          style={{ fontFamily: 'var(--font-baloo)' }}
        >
          🛡️ Sistema de Seguridad de 3 Niveles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Green Level */}
          <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-4 border-green-400 hover:scale-105 transform">
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
          <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-4 border-yellow-400 hover:scale-105 transform">
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
          <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-4 border-red-400 hover:scale-105 transform">
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
          className="text-4xl font-bold text-center mb-10 text-pink-600"
          style={{ fontFamily: 'var(--font-baloo)' }}
        >
          ✨ ¿Por qué BobbyWasi es Genial? ✨
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all">
            <div className="text-5xl mb-4">📚</div>
            <h3 className="text-2xl font-bold text-purple-700 mb-3" style={{ fontFamily: 'var(--font-baloo)' }}>
              Aprende Jugando
            </h3>
            <p className="text-gray-700 text-lg">
              Cada experimento incluye explicaciones científicas divertidas y fáciles de entender
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all">
            <div className="text-5xl mb-4">🏠</div>
            <h3 className="text-2xl font-bold text-blue-700 mb-3" style={{ fontFamily: 'var(--font-baloo)' }}>
              Materiales Caseros
            </h3>
            <p className="text-gray-700 text-lg">
              Usa cosas que ya tienes en casa. ¡Nada complicado ni costoso!
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all">
            <div className="text-5xl mb-4">🛡️</div>
            <h3 className="text-2xl font-bold text-green-700 mb-3" style={{ fontFamily: 'var(--font-baloo)' }}>
              100% Seguro
            </h3>
            <p className="text-gray-700 text-lg">
              Cada experimento ha sido revisado para garantizar tu seguridad
            </p>
          </div>

          <div className="bg-gradient-to-br from-orange-100 to-red-100 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all">
            <div className="text-5xl mb-4">🎯</div>
            <h3 className="text-2xl font-bold text-orange-700 mb-3" style={{ fontFamily: 'var(--font-baloo)' }}>
              Paso a Paso
            </h3>
            <p className="text-gray-700 text-lg">
              Instrucciones claras y detalladas para que no te pierdas
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 rounded-3xl p-12 shadow-2xl">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-baloo)' }}>
          🚀 ¿Listo para la Aventura Científica? 🚀
        </h2>
        <p className="text-2xl text-white/90 mb-8 font-semibold">
          ¡Tenemos 8 experimentos increíbles esperándote!
        </p>
        <Link
          href="/experiments"
          className="inline-block bg-white text-purple-600 px-12 py-5 rounded-full text-2xl font-bold hover:scale-110 transform transition-all duration-300 shadow-xl"
          style={{ fontFamily: 'var(--font-baloo)' }}
        >
          🧪 ¡Empezar Ahora! ✨
        </Link>
      </div>
    </div>
  );
}

// Made with Bob
