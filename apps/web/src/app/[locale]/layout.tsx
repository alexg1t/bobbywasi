import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales } from '../../../i18n';
import '../globals.css';
import { Baloo_2 } from 'next/font/google';

const baloo = Baloo_2({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-baloo',
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Validate locale
  if (!locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} className={baloo.variable}>
      <body className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
        <NextIntlClientProvider messages={messages}>
          <nav className="bg-white/80 backdrop-blur-sm shadow-lg sticky top-0 z-50 border-b-4 border-emerald-400">
            <div className="container mx-auto px-4 py-4">
              <div className="flex items-center justify-between">
                <a href={`/${locale}`} className="flex items-center space-x-3">
                  <span className="text-4xl">🐧</span>
                  <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent" style={{ fontFamily: 'var(--font-baloo)' }}>
                    BobbyWasi
                  </span>
                </a>
                <div className="flex items-center space-x-6">
                  <a href={`/${locale}`} className="text-lg font-semibold text-gray-700 hover:text-emerald-600 transition-colors" style={{ fontFamily: 'var(--font-baloo)' }}>
                    🏠 {locale === 'es' ? 'Inicio' : 'Home'}
                  </a>
                  <a href={`/${locale}/experiments`} className="text-lg font-semibold text-gray-700 hover:text-emerald-600 transition-colors" style={{ fontFamily: 'var(--font-baloo)' }}>
                    🧪 {locale === 'es' ? 'Experimentos' : 'Experiments'}
                  </a>
                  <a href={`/${locale}/community`} className="text-lg font-semibold text-gray-700 hover:text-emerald-600 transition-colors" style={{ fontFamily: 'var(--font-baloo)' }}>
                    👥 {locale === 'es' ? 'Comunidad' : 'Community'}
                  </a>
                  <div className="flex items-center space-x-2 ml-4 pl-4 border-l-2 border-gray-300">
                    <a
                      href="/es"
                      className={`px-3 py-1 rounded-full font-bold transition-all ${
                        locale === 'es'
                          ? 'bg-emerald-500 text-white'
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                      style={{ fontFamily: 'var(--font-baloo)' }}
                    >
                      ES
                    </a>
                    <a
                      href="/en"
                      className={`px-3 py-1 rounded-full font-bold transition-all ${
                        locale === 'en'
                          ? 'bg-emerald-500 text-white'
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                      style={{ fontFamily: 'var(--font-baloo)' }}
                    >
                      EN
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </nav>
          {children}
          <footer className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white py-12 mt-20">
            <div className="container mx-auto px-4 text-center">
              <div className="text-6xl mb-4">🐧</div>
              <p className="text-2xl font-bold mb-2" style={{ fontFamily: 'var(--font-baloo)' }}>
                BobbyWasi
              </p>
              <p className="text-lg mb-4">
                {locale === 'es' 
                  ? 'Hecho con ❤️ para educadores, padres y niños curiosos'
                  : 'Made with ❤️ for educators, parents and curious children'}
              </p>
              <p className="text-sm opacity-80">
                © 2026 BobbyWasi - {locale === 'es' ? 'Todos los derechos reservados' : 'All rights reserved'}
              </p>
            </div>
          </footer>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

// Made with Bob
