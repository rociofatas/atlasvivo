import { useState } from 'react'
import { Calendar, MapPin, Clock, Ticket, Video, Volume2, Heart, Share2, Users } from 'lucide-react'
import SecondaryNav from '../components/SecondaryNav'
import Hero from '../components/Hero'
import ArtworkGrid from '../components/ArtworkGrid'

export default function Exhibition() {
  const [isLiked, setIsLiked] = useState(false)
  
  // Mock data - luego esto vendrá de exhibitions.json
  const exhibition = {
    title: "Impresionismo en París",
    subtitle: "El movimiento que cambió el arte",
    location: "Musée d'Orsay, París",
    image: "https://historia-arte.com/_/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpbSI6WyJcL2FydHdvcmtcL2ltYWdlRmlsZVwvY2xhdWRlX21vbmV0X2ltcHJlc3Npb25fc29sZWlsX2xldmFudF8xODcyLmpwZyIsInJlc2l6ZSw4MDAiXX0.3zVJiMH6IcfJ8fJz_4NrRgBxqPC6eekNBVE15Fc/EPY8.jpg",
    dates: {
      start: "15 enero 2025",
      end: "30 abril 2025"
    },
    schedule: "Martes a domingo, 9:30 - 18:00h",
    price: "16€ (14€ reducida)",
    description: "Un viaje fascinante por las obras que revolucionaron el arte a finales del siglo XIX. Explora cómo los impresionistas capturaron la luz, el movimiento y la vida moderna de París.",
    narrative: {
      intro: "En la década de 1870, un grupo de artistas rebeldes desafió las convenciones académicas y creó un nuevo lenguaje visual. Rechazados por el Salón oficial de París, organizaron su propia exposición en 1874. Los críticos los ridiculizaron llamándolos 'impresionistas' por la aparente falta de acabado de sus obras. Sin saberlo, acababan de bautizar el movimiento artístico más influyente de la era moderna.",
      sections: [
        {
          title: "La revolución de la luz",
          content: "Los impresionistas abandonaron los estudios oscuros para pintar al aire libre. Observaron cómo la luz cambia constantemente los colores y las formas, y capturaron estos momentos efímeros con pinceladas rápidas y colores puros."
        },
        {
          title: "París en transformación",
          content: "La modernización de París por Haussmann creó nuevos bulevares, cafés y parques. Los impresionistas documentaron esta nueva vida urbana: bailarinas, regatas, estaciones de tren, jardines públicos."
        },
        {
          title: "Técnica revolucionaria",
          content: "Abandonaron las mezclas tradicionales de colores. Aplicaban pinceladas de colores puros directamente sobre el lienzo, dejando que el ojo del espectador los mezclara ópticamente."
        }
      ]
    },
    artworks: [
      {
        title: "Impresión, sol naciente",
        artist: "Claude Monet",
        year: "1872",
        image: "https://historia-arte.com/_/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpbSI6WyJcL2FydHdvcmtcL2ltYWdlRmlsZVwvY2xhdWRlX21vbmV0X2ltcHJlc3Npb25fc29sZWlsX2xldmFudF8xODcyLmpwZyIsInJlc2l6ZSw4MDAiXX0.3zVJiMH6IcfJ8fJz_4NrRgBxqPC6eekNBVE15Fc/EPY8.jpg",
        description: "La obra que dio nombre al movimiento. Monet captura el puerto de Le Havre al amanecer con pinceladas sueltas y colores vibrantes.",
        link: "#"
      },
      {
        title: "Baile en el Moulin de la Galette",
        artist: "Pierre-Auguste Renoir",
        year: "1876",
        image: "https://historia-arte.com/_/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpbSI6WyJcL2FydHdvcmtcL2ltYWdlRmlsZVwvNjFmNTBlODg1MjlmZS5qcGciLCJyZXNpemUsMTUwMHxmb3JtYXQsd2VicCJdfQ.gVMfZnPpTskInX__kyTHOQwZzTAaPO-UphCHvmHcW0E.webp",
        description: "Celebración de la vida parisina moderna. La luz del sol se filtra entre los árboles creando un efecto de mosaico luminoso.",
        link: "#"
      },
      {
        title: "La clase de danza",
        artist: "Edgar Degas",
        year: "1874",
        image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/Edgar_Germain_Hilaire_Degas_021.jpg",
        description: "Degas captura el momento íntimo de una clase de ballet con composición innovadora y perspectiva inusual.",
        link: "#"
      },
      {
        title: "Almuerzo de remeros",
        artist: "Pierre-Auguste Renoir",
        year: "1881",
        image: "https://historia-arte.com/_/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpbSI6WyJcL2FydHdvcmtcL2ltYWdlRmlsZVwvcmVub2lyLXJlbWVyb3MuanBnIiwicmVzaXplLDIwMDAsMjAwMCJdfQ._jzauem3LxK9GOD8WH1o6b1031bD17oE6yi1LTWO54M.jpg",
        description: "Escena de ocio burgués a orillas del Sena. Los juegos de luz y las expresiones capturan la alegría del momento.",
        link: "#"
      },
      {
        title: "La catedral de Rouen",
        artist: "Claude Monet",
        year: "1892-1894",
        image: "https://historia-arte.com/_/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpbSI6WyJcL2FydHdvcmtcL2ltYWdlRmlsZVwvNWQ0NmMzOGNkMGRhNy5qcGciLCJyZXNpemUsMjAwMCwyMDAwIl19.dRgj6MppFZJ-MIumwjFreWjnzLy4BeIIgHKX_qNQZbY.jpg",
        description: "Serie donde Monet pintó la misma catedral en diferentes momentos del día para estudiar los efectos de la luz.",
        link: "#"
      },
      {
        title: "Tarde de domingo en la isla de la Grande Jatte",
        artist: "Georges Seurat",
        year: "1884-1886",
        image: "https://historia-arte.com/_/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpbSI6WyJcL2FydHdvcmtcL2ltYWdlRmlsZVwvc2V1cmF0X2hpc3RvcmlhLWFydGUuanBnIiwicmVzaXplLDIwMDAsMjAwMCJdfQ.qmr1S6pflTTBGcHR6AbaZwLcNoAr40cIMcitghKWbv4.jpg",
        description: "Evolución del impresionismo al puntillismo. Seurat construye la imagen con miles de puntos de color puro.",
        link: "#"
      }
    ],
    artists: [
      {
        name: "Claude Monet",
        role: "Maestro de la luz",
        image: "https://historia-arte.com/_/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpbSI6WyJcL2FydGlzdFwvaW1hZ2VGaWxlXC81MjE2OTI3NDFfNDA2ZDNjNzZmZS5qcGciLCJyZXNpemUsNjAwLDYwMCJdfQ.kgm7Lgxu7A58q_dTmIBYwX6r4CD9NHlOEHzQ7nMLxig.jpg",
        bio: "Fundador del impresionismo. Obsesionado con capturar los efectos cambiantes de la luz natural.",
        works: 18
      },
      {
        name: "Pierre-Auguste Renoir",
        role: "Pintor de la alegría",
        image: "https://www.worldhistory.org/uploads/images/15799.png",
        bio: "Celebró la vida parisina y la belleza femenina con colores radiantes y pinceladas sensuales.",
        works: 12
      },
      {
        name: "Edgar Degas",
        role: "Cronista del movimiento",
        image: "https://uploads7.wikiart.org/images/edgar-degas/self-portrait-1.jpg!Large.jpg",
        bio: "Exploró el movimiento humano, especialmente bailarinas, con composiciones innovadoras.",
        works: 15
      },
      {
        name: "Berthe Morisot",
        role: "Maestra intimista",
        image: "https://www.worldhistory.org/img/r/p/500x600/15493.png?v=1694437083",
        bio: "Única mujer fundadora del movimiento. Pintó escenas íntimas de la vida doméstica con delicadeza.",
        works: 10
      }
    ],
    multimedia: {
      audioGuide: "12 pistas con análisis de expertos",
      videos: [
        {
          title: "Técnicas impresionistas explicadas",
          duration: "8:34",
          thumbnail: "https://picsum.photos/seed/video1/800/450"
        },
        {
          title: "El París de los impresionistas",
          duration: "12:15",
          thumbnail: "https://picsum.photos/seed/video2/800/450"
        }
      ],
      virtualTour: true
    }
  }

  return (
    <>
      <SecondaryNav backTo="/descubre" />
      
      {/* Hero */}
      <Hero
        image={exhibition.image}
        title={exhibition.title}
        subtitle="EXPOSICIÓN DESTACADA"
        description={exhibition.subtitle}
        gradient="from-green-500 to-yellow-500"
      >
        <div className="flex flex-wrap gap-4 justify-center items-center mt-8">
          <a 
            href="#comprar"
            className="px-8 py-4 bg-white text-gray-900 rounded-full font-semibold hover:scale-105 transition-transform shadow-xl inline-flex items-center gap-2"
          >
            <Ticket size={20} />
            Comprar entrada
          </a>
          <a 
            href="#tour"
            className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white rounded-full font-semibold hover:scale-105 transition-transform border-2 border-white inline-flex items-center gap-2"
          >
            <Video size={20} />
            Tour virtual
          </a>
          <button
            onClick={() => setIsLiked(!isLiked)}
            className={`p-4 rounded-full ${isLiked ? 'bg-red-500' : 'bg-white/20'} backdrop-blur-sm hover:scale-110 transition-all`}
          >
            <Heart size={24} fill={isLiked ? 'white' : 'none'} stroke="white" />
          </button>
          <button className="p-4 bg-white/20 backdrop-blur-sm rounded-full hover:scale-110 transition-all">
            <Share2 size={24} stroke="white" />
          </button>
        </div>
      </Hero>

      {/* Info práctica */}
      <section className="bg-gradient-to-r from-green-50 to-yellow-50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center">
              <Calendar className="text-green-600 mb-3" size={32} />
              <p className="font-semibold text-gray-900 mb-1">Fechas</p>
              <p className="text-sm text-gray-600">{exhibition.dates.start}</p>
              <p className="text-sm text-gray-600">{exhibition.dates.end}</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center">
              <MapPin className="text-green-600 mb-3" size={32} />
              <p className="font-semibold text-gray-900 mb-1">Ubicación</p>
              <p className="text-sm text-gray-600">{exhibition.location}</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center">
              <Clock className="text-green-600 mb-3" size={32} />
              <p className="font-semibold text-gray-900 mb-1">Horario</p>
              <p className="text-sm text-gray-600">{exhibition.schedule}</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center">
              <Ticket className="text-green-600 mb-3" size={32} />
              <p className="font-semibold text-gray-900 mb-1">Precio</p>
              <p className="text-sm text-gray-600">{exhibition.price}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Introducción narrativa */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-green-600 to-yellow-600 bg-clip-text text-transparent">
            La Historia
          </h2>
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-gray-700 leading-relaxed text-lg first-letter:text-6xl first-letter:font-bold first-letter:text-green-600 first-letter:mr-2 first-letter:float-left">
              {exhibition.narrative.intro}
            </p>
          </div>
          
          <div className="space-y-8">
            {exhibition.narrative.sections.map((section, index) => (
              <div key={index} className="group">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">
                  {section.title}
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {section.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Obras destacadas */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-yellow-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Obras Destacadas</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Seis obras maestras que definen el movimiento impresionista
          </p>
          <ArtworkGrid artworks={exhibition.artworks} />
        </div>
      </section>

      {/* Artistas */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Los Maestros</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Conoce a los artistas que revolucionaron el arte
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {exhibition.artists.map((artist, index) => (
              <div 
                key={index}
                className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={artist.image} 
                    alt={artist.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {artist.works} obras
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-1">{artist.name}</h3>
                  <p className="text-green-600 text-sm font-medium mb-3">{artist.role}</p>
                  <p className="text-gray-700 text-sm leading-relaxed">{artist.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experiencia multimedia */}
      <section id="tour" className="py-20 bg-gradient-to-br from-green-50 to-yellow-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Experiencia Multimedia</h2>
          <p className="text-center text-gray-600 mb-12">
            Sumérgete en el mundo de los impresionistas
          </p>
          
          <div className="max-w-5xl mx-auto space-y-8">
            {/* Audioguía */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-4 bg-gradient-to-br from-green-500 to-yellow-500 rounded-full">
                  <Volume2 size={32} className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Audioguía Interactiva</h3>
                  <p className="text-gray-600">{exhibition.multimedia.audioGuide}</p>
                </div>
              </div>
              <button className="px-6 py-3 bg-gradient-to-r from-green-600 to-yellow-600 text-white rounded-full font-semibold hover:scale-105 transition-transform">
                Descargar gratis
              </button>
            </div>

            {/* Videos */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {exhibition.multimedia.videos.map((video, index) => (
                <div 
                  key={index}
                  className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <img 
                      src={video.thumbnail} 
                      alt={video.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-colors">
                      <Video size={48} className="text-white group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                      {video.duration}
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900">{video.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section id="comprar" className="py-20 bg-gradient-to-r from-green-600 to-yellow-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Vive la experiencia impresionista</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Reserva tu entrada ahora y sumérgete en el París de finales del siglo XIX
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a 
              href="#"
              className="px-8 py-4 bg-white text-green-600 rounded-full font-semibold hover:scale-105 transition-transform shadow-xl inline-flex items-center gap-2"
            >
              <Ticket size={20} />
              Comprar entrada
            </a>
            <a 
              href="#"
              className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white rounded-full font-semibold hover:scale-105 transition-transform border-2 border-white inline-flex items-center gap-2"
            >
              <Users size={20} />
              Visita en grupo
            </a>
          </div>
        </div>
      </section>
    </>
  )
}