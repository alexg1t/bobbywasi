import type { Metadata } from 'next'
import { Baloo_2 } from 'next/font/google'
import './globals.css'
import NatureParticles from '@/components/NatureParticles'
import BobbyMascot from '@/components/BobbyMascot'

const baloo = Baloo_2({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-baloo'
})

export const metadata: Metadata = {
  title: 'BobbyWasi - ¡Experimentos Científicos Divertidos!',
  description: '¡Descubre la ciencia de forma divertida y segura con BobbyWasi! 🔬✨',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${baloo.variable} font-sans`}>
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
          <header className="relative bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 shadow-2xl overflow-hidden">
            {/* Nature Particles */}
            <NatureParticles />
            
            <div className="container mx-auto px-4 py-6 relative z-10">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <BobbyMascot size="small" animated={true} />
                  <div>
                    <h1 className="text-4xl font-bold text-white drop-shadow-lg" style={{ fontFamily: 'var(--font-baloo)' }}>
                      BobbyWasi
                    </h1>
                    <p className="text-lg text-white/90 font-semibold">
                      ¡Ciencia Natural! 🌿✨
                    </p>
                  </div>
                </div>
                <nav className="hidden md:flex space-x-6">
                  <a
                    href="/"
                    className="text-white hover:text-yellow-200 font-bold text-lg transition-all duration-200 hover:scale-110 transform backdrop-blur-sm bg-white/10 px-4 py-2 rounded-full"
                    style={{ fontFamily: 'var(--font-baloo)' }}
                  >
                    🏠 Inicio
                  </a>
                  <a
                    href="/experiments"
                    className="text-white hover:text-yellow-200 font-bold text-lg transition-all duration-200 hover:scale-110 transform backdrop-blur-sm bg-white/10 px-4 py-2 rounded-full"
                    style={{ fontFamily: 'var(--font-baloo)' }}
                  >
                    🧪 Experimentos
                  </a>
                </nav>
              </div>
            </div>
          </header>
          
          <main className="flex-1 relative overflow-hidden">
            {/* Animated wave background */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 wave-bg"></div>
            <div className="relative z-10">
              {children}
            </div>
          </main>
          
          <footer className="relative bg-gradient-to-r from-emerald-800 via-teal-800 to-cyan-800 text-white py-8 overflow-hidden">
            {/* Subtle wave effect in footer */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-pulse"></div>
            </div>
            <div className="container mx-auto px-4 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <div className="flex items-center space-x-2 mb-3">
                    <BobbyMascot size="small" animated={false} />
                    <h3 className="text-2xl font-bold" style={{ fontFamily: 'var(--font-baloo)' }}>
                      BobbyWasi
                    </h3>
                  </div>
                  <p className="text-white/80 text-sm">
                    ¡Inspirando a la próxima generación de científicos curiosos con la naturaleza!
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3" style={{ fontFamily: 'var(--font-baloo)' }}>
                    Enlaces Rápidos
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li><a href="/experiments" className="text-white/80 hover:text-yellow-200 transition">🧪 Experimentos</a></li>
                    <li><a href="/about" className="text-white/80 hover:text-yellow-200 transition">ℹ️ Acerca de</a></li>
                    <li><a href="/safety" className="text-white/80 hover:text-yellow-200 transition">🛡️ Seguridad</a></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3" style={{ fontFamily: 'var(--font-baloo)' }}>
                    Niveles de Seguridad
                  </h3>
                  <div className="flex space-x-3 text-3xl mb-2">
                    <span title="Experimentos Verdes - Autónomos">🟢</span>
                    <span title="Experimentos Amarillos - Supervisión Sugerida">🟡</span>
                    <span title="Experimentos Rojos - Supervisión Obligatoria">🔴</span>
                  </div>
                  <p className="text-white/70 text-xs">
                    Seguridad integrada en cada experimento
                  </p>
                </div>
              </div>
              <div className="border-t border-white/20 mt-8 pt-6 text-center">
                <p className="text-xl font-bold mb-2" style={{ fontFamily: 'var(--font-baloo)' }}>
                  🌈 ¡Aprende con la Naturaleza y BobbyWasi! 🌿
                </p>
                <p className="text-white/70 text-sm">
                  © 2026 BobbyWasi. Hecho con ❤️ para jóvenes científicos curiosos.
                </p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}

// Made with Bob
