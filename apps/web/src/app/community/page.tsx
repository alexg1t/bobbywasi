import BobbyMascot from '@/components/BobbyMascot';
import Link from 'next/link';

// Mock data for STEM communities
const communities = [
  {
    id: 1,
    name: "STEM Perú",
    description: "Organización que promueve la educación STEM en todo el Perú a través de talleres y programas educativos.",
    type: "Organización Nacional",
    location: "Lima, Perú",
    website: "https://stemperu.org",
    contact: "contacto@stemperu.org",
    ageRange: "6-18 años",
    activities: ["Talleres", "Competencias", "Mentorías"],
    icon: "🔬"
  },
  {
    id: 2,
    name: "Clubes de Ciencia Perú",
    description: "Red de clubes científicos que conecta a estudiantes con científicos profesionales para proyectos de investigación.",
    type: "Red de Clubes",
    location: "Nacional",
    website: "https://clubesdeciencia.pe",
    contact: "info@clubesdeciencia.pe",
    ageRange: "12-18 años",
    activities: ["Investigación", "Proyectos", "Networking"],
    icon: "🧪"
  },
  {
    id: 3,
    name: "Robótica Educativa Lima",
    description: "Centro especializado en robótica y programación para niños y adolescentes con enfoque práctico.",
    type: "Centro Educativo",
    location: "Lima, Perú",
    website: "https://roboticaedu.pe",
    contact: "hola@roboticaedu.pe",
    ageRange: "8-16 años",
    activities: ["Robótica", "Programación", "Competencias"],
    icon: "🤖"
  },
  {
    id: 4,
    name: "Ciencia Divertida Perú",
    description: "Programas educativos que hacen la ciencia accesible y divertida a través de experimentos interactivos.",
    type: "Programa Educativo",
    location: "Lima, Arequipa, Cusco",
    website: "https://cienciadivertida.pe",
    contact: "info@cienciadivertida.pe",
    ageRange: "4-12 años",
    activities: ["Shows", "Talleres", "Fiestas Científicas"],
    icon: "🎪"
  },
  {
    id: 5,
    name: "Matemáticas para Todos",
    description: "Comunidad que promueve el aprendizaje de matemáticas de forma lúdica y accesible.",
    type: "Comunidad Online",
    location: "Virtual",
    website: "https://mateparatodos.org",
    contact: "contacto@mateparatodos.org",
    ageRange: "6-16 años",
    activities: ["Tutorías", "Olimpiadas", "Recursos Online"],
    icon: "➗"
  },
  {
    id: 6,
    name: "Ingenieros del Futuro",
    description: "Programa que introduce a jóvenes en ingeniería a través de proyectos prácticos y mentorías.",
    type: "Programa de Mentorías",
    location: "Lima, Perú",
    website: "https://ingenieriosdelfuturo.pe",
    contact: "mentores@ingenieriosdelfuturo.pe",
    ageRange: "14-18 años",
    activities: ["Proyectos", "Mentorías", "Visitas Industriales"],
    icon: "⚙️"
  }
];

// Mock data for STEM events
const events = [
  {
    id: 1,
    title: "Feria de Ciencias Lima 2026",
    description: "La feria de ciencias más grande del Perú donde estudiantes presentan sus proyectos innovadores.",
    date: "15-17 Junio 2026",
    location: "Centro de Convenciones Lima",
    type: "Feria",
    ageRange: "8-18 años",
    cost: "Gratuito",
    registration: "https://feriacienciaslima.pe",
    icon: "🎪"
  },
  {
    id: 2,
    title: "Hackathon Junior 2026",
    description: "Competencia de programación de 24 horas para jóvenes desarrolladores.",
    date: "5-6 Julio 2026",
    location: "Universidad Nacional de Ingeniería",
    type: "Competencia",
    ageRange: "12-18 años",
    cost: "S/ 50",
    registration: "https://hackathon junior.pe",
    icon: "💻"
  },
  {
    id: 3,
    title: "Olimpiada Nacional de Robótica",
    description: "Competencia nacional donde equipos diseñan y programan robots para resolver desafíos.",
    date: "20-22 Agosto 2026",
    location: "Arequipa, Perú",
    type: "Olimpiada",
    ageRange: "10-16 años",
    cost: "S/ 100 por equipo",
    registration: "https://olimpiadarobotica.pe",
    icon: "🤖"
  },
  {
    id: 4,
    title: "Semana de la Ciencia y Tecnología",
    description: "Semana llena de talleres, charlas y actividades científicas para toda la familia.",
    date: "10-16 Septiembre 2026",
    location: "Múltiples sedes en Lima",
    type: "Festival",
    ageRange: "Todas las edades",
    cost: "Gratuito",
    registration: "https://semanadelaciencia.pe",
    icon: "🔬"
  },
  {
    id: 5,
    title: "Taller de Astronomía para Niños",
    description: "Aprende sobre el universo, las estrellas y los planetas con telescopios reales.",
    date: "Todos los sábados",
    location: "Planetario de Lima",
    type: "Taller Recurrente",
    ageRange: "8-14 años",
    cost: "S/ 30 por sesión",
    registration: "https://planetariolima.pe",
    icon: "🔭"
  },
  {
    id: 6,
    title: "Campamento de Verano STEM",
    description: "Campamento intensivo de 2 semanas con actividades de ciencia, tecnología y naturaleza.",
    date: "15-28 Enero 2027",
    location: "Valle Sagrado, Cusco",
    type: "Campamento",
    ageRange: "10-16 años",
    cost: "S/ 1,500 (incluye alojamiento)",
    registration: "https://campamentostem.pe",
    icon: "⛺"
  }
];

export default function CommunityPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <BobbyMascot size="large" className="mx-auto mb-4" />
          <h1 
            className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-500 bg-clip-text text-transparent"
            style={{ fontFamily: 'var(--font-baloo)' }}
          >
            🌍 Comunidad STEM
          </h1>
          <p className="text-2xl text-gray-700 font-semibold mb-4" style={{ fontFamily: 'var(--font-baloo)' }}>
            ¡Conecta con comunidades y eventos científicos! 🚀
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Descubre organizaciones que promueven STEM y eventos emocionantes para niños y adolescentes en todo el Perú
          </p>
        </div>

        {/* Communities Section */}
        <div className="mb-20">
          <div className="flex items-center justify-center mb-10">
            <div className="text-4xl mr-4">🏛️</div>
            <h2 
              className="text-4xl font-bold text-emerald-600"
              style={{ fontFamily: 'var(--font-baloo)' }}
            >
              Comunidades STEM
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {communities.map((community) => (
              <div 
                key={community.id}
                className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border-4 border-emerald-400 hover:scale-105 transform"
              >
                <div className="text-6xl mb-4 text-center">{community.icon}</div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center" style={{ fontFamily: 'var(--font-baloo)' }}>
                  {community.name}
                </h3>

                <div className="mb-4">
                  <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-bold">
                    {community.type}
                  </span>
                </div>

                <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                  {community.description}
                </p>

                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <div className="flex items-center">
                    <span className="mr-2">📍</span>
                    <span>{community.location}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2">👥</span>
                    <span>{community.ageRange}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2">✉️</span>
                    <span className="text-xs">{community.contact}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {community.activities.map((activity, index) => (
                    <span 
                      key={index}
                      className="text-xs bg-teal-100 text-teal-700 px-2 py-1 rounded-full"
                    >
                      {activity}
                    </span>
                  ))}
                </div>

                <a
                  href={community.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-center py-3 rounded-full font-bold hover:scale-105 transition-all"
                  style={{ fontFamily: 'var(--font-baloo)' }}
                >
                  Visitar Sitio Web →
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Events Section */}
        <div className="mb-12">
          <div className="flex items-center justify-center mb-10">
            <div className="text-4xl mr-4">📅</div>
            <h2 
              className="text-4xl font-bold text-teal-600"
              style={{ fontFamily: 'var(--font-baloo)' }}
            >
              Eventos STEM
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {events.map((event) => (
              <div 
                key={event.id}
                className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-4 border-teal-400 hover:scale-105 transform"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-5xl">{event.icon}</div>
                  <span className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-sm font-bold">
                    {event.type}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'var(--font-baloo)' }}>
                  {event.title}
                </h3>

                <p className="text-gray-700 mb-4 leading-relaxed">
                  {event.description}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div className="bg-gray-50 rounded-xl p-3">
                    <div className="text-gray-500 text-xs mb-1">📅 Fecha</div>
                    <div className="font-semibold text-gray-800">{event.date}</div>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-3">
                    <div className="text-gray-500 text-xs mb-1">📍 Lugar</div>
                    <div className="font-semibold text-gray-800">{event.location}</div>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-3">
                    <div className="text-gray-500 text-xs mb-1">👥 Edades</div>
                    <div className="font-semibold text-gray-800">{event.ageRange}</div>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-3">
                    <div className="text-gray-500 text-xs mb-1">💰 Costo</div>
                    <div className="font-semibold text-gray-800">{event.cost}</div>
                  </div>
                </div>

                <a
                  href={event.registration}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-gradient-to-r from-teal-500 to-cyan-500 text-white text-center py-3 rounded-full font-bold hover:scale-105 transition-all"
                  style={{ fontFamily: 'var(--font-baloo)' }}
                >
                  Registrarse Ahora →
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded-3xl p-12 shadow-2xl">
          <BobbyMascot size="medium" className="mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-baloo)' }}>
            ¿Conoces alguna comunidad o evento STEM?
          </h2>
          <p className="text-xl text-white/90 mb-6">
            ¡Ayúdanos a crecer esta lista! Comparte información sobre comunidades y eventos STEM en tu región.
          </p>
          <Link
            href="/"
            className="inline-block bg-white text-emerald-600 px-10 py-4 rounded-full text-xl font-bold hover:scale-110 transform transition-all duration-300 shadow-xl"
            style={{ fontFamily: 'var(--font-baloo)' }}
          >
            📧 Contáctanos
          </Link>
        </div>
      </div>
    </div>
  );
}

// Made with Bob