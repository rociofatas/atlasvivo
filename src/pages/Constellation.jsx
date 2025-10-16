import { useState } from 'react'
import { MapPin, Route, Network, Sparkles, Calendar, Heart, Share2, ExternalLink, ChevronRight } from 'lucide-react'
import SecondaryNav from '../components/SecondaryNav'
import Hero from '../components/Hero'

export default function Constellation() {
  const [isLiked, setIsLiked] = useState(false)
  const [selectedMuseum, setSelectedMuseum] = useState(null)
  
  // Mock data - luego esto vendrá de constellations.json
  const constellation = {
    title: "Arte del Renacimiento",
    subtitle: "12 museos unidos por las obras maestras que definieron una era",
    image: "https://picsum.photos/seed/renaissance/1920/1080",
    description: "Un viaje por los tesoros del Renacimiento europeo, desde Florencia hasta Amsterdam",
    concept: {
      title: "El Renacimiento: Un despertar cultural",
      intro: "Entre los siglos XIV y XVI, Europa experimentó un renacimiento cultural sin precedentes. El redescubrimiento de textos clásicos, los avances científicos y el mecenazgo artístico transformaron para siempre el arte occidental.",
      themes: [
        {
          icon: "🎨",
          title: "Perspectiva y realismo",
          description: "Los artistas dominaron la perspectiva matemática y la representación anatómica, creando ilusiones tridimensionales en superficies planas."
        },
        {
          icon: "📚",
          title: "Humanismo",
          description: "El ser humano se convirtió en el centro del arte. Los artistas exploraron la dignidad, belleza y complejidad de la experiencia humana."
        },
        {
          icon: "✨",
          title: "Mecenazgo",
          description: "Familias poderosas como los Medici financiaron obras maestras, convirtiendo las ciudades italianas en centros de innovación artística."
        },
        {
          icon: "🌍",
          title: "Difusión europea",
          description: "Las ideas renacentistas se expandieron desde Italia por toda Europa, adaptándose a las tradiciones locales."
        }
      ]
    },
    museums: [
      {
        id: "uffizi",
        name: "Galleria degli Uffizi",
        city: "Florencia",
        country: "Italia",
        image: "https://historia-arte.com/_/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpbSI6WyJcL2FydHdvcmtcL2ltYWdlRmlsZVwvbmFjaW1pZW50by12ZW51cy5qcGciLCJyZXNpemUsMjAwMCwyMDAwIl19.PCAgjQkkI4rf0YexzYGIAXY3323oNZtrBkool4ncXVs.jpg",
        masterpiece: "El nacimiento de Venus (Botticelli)",
        year: 1485,
        description: "La cuna del Renacimiento italiano con la mayor colección de obras florentinas.",
        coordinates: { lat: 43.7687, lng: 11.2569 },
        connections: ["louvre", "prado", "national-gallery"]
      },
      {
        id: "louvre",
        name: "Musée du Louvre",
        city: "París",
        country: "Francia",
        image: "https://s3.abcstatics.com/abc/sevilla/media/cultura/2021/11/08/s/gioconda-louvre-kQQB--1248x698@abc.jpeg",
        masterpiece: "La Gioconda (Leonardo da Vinci)",
        year: 1503,
        description: "Alberga obras maestras del Alto Renacimiento italiano.",
        coordinates: { lat: 48.8606, lng: 2.3376 },
        connections: ["uffizi", "vatican", "hermitage"]
      },
      {
        id: "vatican",
        name: "Museos Vaticanos",
        city: "Ciudad del Vaticano",
        country: "Vaticano",
        image: "https://medialab.unmsm.edu.pe/chiqaqnews/wp-content/uploads/2021/01/adan.jpg",
        masterpiece: "La Creación de Adán (Miguel Ángel)",
        year: 1512,
        description: "La Capilla Sixtina: la obra maestra del fresco renacentista.",
        coordinates: { lat: 41.9065, lng: 12.4536 },
        connections: ["uffizi", "louvre", "borghese"]
      },
      {
        id: "prado",
        name: "Museo del Prado",
        city: "Madrid",
        country: "España",
        image: "https://cdn.culturagenial.com/es/imagenes/el-bosco-y-el-jardin-de-las-delicias-historia-y-analisis-og.jpg?class=ogImageRectangle",
        masterpiece: "El Jardín de las Delicias (El Bosco)",
        year: 1500,
        description: "Extraordinaria colección de Renacimiento del Norte de Europa.",
        coordinates: { lat: 40.4138, lng: -3.6921 },
        connections: ["uffizi", "louvre", "rijksmuseum"]
      },
      {
        id: "national-gallery",
        name: "National Gallery",
        city: "Londres",
        country: "Reino Unido",
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgQo80ySQ_mwo65JXpFz838x6dp8b73RW9cj4iyfM0CE4ydlW3ySJXbnSSzHvAWVE_yzjpG3n6FI6ch8m5xlfw76VfmeU3MqDx0sbbgpFXa_R8CbBhG3mR92aMv3dlWACWSDH3KgvA6Kug/s16000-rw/venus-velazquez-national-gallery-barroco-detalle-def.jpg",
        masterpiece: "Venus del espejo (Velázquez)",
        year: 1647,
        description: "Colección completa del Renacimiento italiano y del norte.",
        coordinates: { lat: 51.5089, lng: -0.1283 },
        connections: ["uffizi", "louvre", "rijksmuseum"]
      },
      {
        id: "hermitage",
        name: "Museo del Hermitage",
        city: "San Petersburgo",
        country: "Rusia",
        image: "https://www.casacenina.es/catalog/images/img_220/packshot/123332/1_madonna-litta-PF009.jpg",
        masterpiece: "Madonna Litta (Leonardo da Vinci)",
        year: 1490,
        description: "Importante colección de maestros renacentistas italianos.",
        coordinates: { lat: 59.9398, lng: 30.3146 },
        connections: ["louvre", "uffizi", "kunsthistorisches"]
      },
      {
        id: "kunsthistorisches",
        name: "Kunsthistorisches Museum",
        city: "Viena",
        country: "Austria",
        image: "https://historia-arte.com/_/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpbSI6WyJcL2FydHdvcmtcL2ltYWdlRmlsZVwvNjUzY2MzMDYxNmQ2ZC5qcGciLCJyZXNpemUsODAwIl19.ma8XkUIHcR7ZPm0P2jVyWHQcnYokNk0vRjDW1YtLze0.jpg",
        masterpiece: "La torre de Babel (Pieter Brueghel)",
        year: 1563,
        description: "Colección imperial con obras del Renacimiento del Norte.",
        coordinates: { lat: 48.2035, lng: 16.3619 },
        connections: ["hermitage", "prado", "rijksmuseum"]
      },
      {
        id: "rijksmuseum",
        name: "Rijksmuseum",
        city: "Ámsterdam",
        country: "Países Bajos",
        image: "https://images.squarespace-cdn.com/content/v1/5f638d3adfa9c677cced1579/1613069891305-U6Z9X6XZWHCZ1BUFZFPL/screen-shot-2016-06-30-at-4-41-30-pm.png",
        masterpiece: "La ronda de noche (Rembrandt)",
        year: 1642,
        description: "Renacimiento del Norte y su evolución hacia el Barroco.",
        coordinates: { lat: 52.3600, lng: 4.8852 },
        connections: ["prado", "national-gallery", "kunsthistorisches"]
      },
      {
        id: "borghese",
        name: "Galleria Borghese",
        city: "Roma",
        country: "Italia",
        image: "https://historia-arte.com/_/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpbSI6WyJcL2FydHdvcmtcL2ltYWdlRmlsZVwvNWUxODg4OTM4MTkzNC5qcGciLCJyZXNpemUsMjAwMCwyMDAwIl19.EnFPENsifCgbwer2e1YCVvqyRUK4QdbRYlpmdXb693U.jpg",
        masterpiece: "Amor Sacro y Amor Profano (Tiziano)",
        year: 1514,
        description: "Villa renacentista con esculturas de Bernini y pinturas de Tiziano.",
        coordinates: { lat: 41.9142, lng: 12.4923 },
        connections: ["vatican", "uffizi", "louvre"]
      },
      {
        id: "accademia",
        name: "Galleria dell'Accademia",
        city: "Florencia",
        country: "Italia",
        image: "https://historia-arte.com/_/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpbSI6WyJcL2FydHdvcmtcL2ltYWdlRmlsZVwvZGF2aWQtYnktbWljaGVsYW5nZWxvLWpidTAzLmpwZyIsInJlc2l6ZSwyMDAwLDIwMDAiXX0.i6-5iSqN3uYZZO0mTtuK3Q6JaQgMvXNBtUpaTmk2mzk.jpg",
        masterpiece: "David (Miguel Ángel)",
        year: 1504,
        description: "Hogar del David y obras maestras del Renacimiento florentino.",
        coordinates: { lat: 43.7769, lng: 11.2589 },
        connections: ["uffizi", "vatican", "borghese"]
      },
      {
        id: "bargello",
        name: "Museo Nazionale del Bargello",
        city: "Florencia",
        country: "Italia",
        image: "https://historia-arte.com/_/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpbSI6WyJcL2FydHdvcmtcL2ltYWdlRmlsZVwvc2luLXRpdHVsby5qcGciLCJyZXNpemUsMjAwMCwyMDAwIl19.Xpjyge4e7etLlpw-ObLm7v1R6LylQQY1fqj_vBGRNpo.jpg",
        masterpiece: "David de bronce (Donatello)",
        year: 1440,
        description: "Esculturas renacentistas de Donatello, Verrocchio y Miguel Ángel.",
        coordinates: { lat: 43.7704, lng: 11.2576 },
        connections: ["uffizi", "accademia", "borghese"]
      },
      {
        id: "kunsthalle",
        name: "Kunsthalle Hamburg",
        city: "Hamburgo",
        country: "Alemania",
        image: "https://www.museothyssen.org/sites/default/files/imagen/2025-01/HALS_Grupo%20familiar_179%20%281934.8%29_visor.jpg",
        masterpiece: "Retrato de familia (Frans Hals)",
        year: 1648,
        description: "Renacimiento del Norte y su influencia en Alemania.",
        coordinates: { lat: 53.5511, lng: 9.9937 },
        connections: ["rijksmuseum", "kunsthistorisches", "hermitage"]
      }
    ],
    connections: [
      {
        from: "Leonardo da Vinci",
        museums: ["louvre", "hermitage", "uffizi"],
        description: "El genio universal que dominó pintura, escultura, anatomía e ingeniería."
      },
      {
        from: "Miguel Ángel",
        museums: ["vatican", "accademia", "bargello", "uffizi"],
        description: "Escultor, pintor y arquitecto. Su obra define el Alto Renacimiento."
      },
      {
        from: "Rafael",
        museums: ["vatican", "uffizi", "louvre", "borghese"],
        description: "Maestro de la composición armoniosa y la belleza idealizada."
      },
      {
        from: "Tiziano",
        museums: ["borghese", "prado", "uffizi", "louvre"],
        description: "Revolucionó el uso del color en el Renacimiento veneciano."
      }
    ],
    route: {
      title: "Ruta sugerida: 2 semanas",
      description: "Un itinerario cultural por las capitales del Renacimiento",
      stops: [
        {
          day: "Días 1-4",
          city: "Florencia",
          museums: ["uffizi", "accademia", "bargello"],
          highlights: "La cuna del Renacimiento. Explora donde todo comenzó.",
          transport: "Vuelo internacional"
        },
        {
          day: "Días 5-6",
          city: "Roma y Vaticano",
          museums: ["vatican", "borghese"],
          highlights: "El esplendor papal y las obras maestras del Alto Renacimiento.",
          transport: "Tren (1.5h)"
        },
        {
          day: "Días 7-8",
          city: "Madrid",
          museums: ["prado"],
          highlights: "Renacimiento español y del Norte. El Bosco y Velázquez.",
          transport: "Vuelo (2h)"
        },
        {
          day: "Días 9-10",
          city: "París",
          museums: ["louvre"],
          highlights: "La Gioconda y la colección francesa de maestros italianos.",
          transport: "Tren/Vuelo (2h)"
        },
        {
          day: "Día 11",
          city: "Londres",
          museums: ["national-gallery"],
          highlights: "Renacimiento italiano y británico bajo un mismo techo.",
          transport: "Tren Eurostar (2.5h)"
        },
        {
          day: "Días 12-13",
          city: "Ámsterdam",
          museums: ["rijksmuseum"],
          highlights: "Renacimiento del Norte y su evolución hacia el Barroco holandés.",
          transport: "Vuelo (1h)"
        },
        {
          day: "Día 14",
          city: "Viena",
          museums: ["kunsthistorisches"],
          highlights: "Colección imperial con Brueghel y maestros del Norte.",
          transport: "Vuelo (2h)"
        }
      ]
    }
  }

  return (
    <>
      <SecondaryNav backTo="/descubre" />
      
      {/* Hero con animación de red */}
      <Hero
        image={constellation.image}
        title={constellation.title}
        subtitle="CONSTELACIÓN"
        description={constellation.subtitle}
        gradient="from-purple-600 via-blue-600 to-indigo-600"
      >
        <div className="flex flex-wrap gap-4 justify-center items-center mt-8">
          <a 
            href="#museos"
            className="px-8 py-4 bg-white text-gray-900 rounded-full font-semibold hover:scale-105 transition-transform shadow-xl inline-flex items-center gap-2"
          >
            <Sparkles size={20} />
            Explorar constelación
          </a>
          <a 
            href="#ruta"
            className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white rounded-full font-semibold hover:scale-105 transition-transform border-2 border-white inline-flex items-center gap-2"
          >
            <Route size={20} />
            Ver ruta
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

      {/* Stats de la constelación */}
      <section className="bg-gradient-to-r from-purple-50 via-blue-50 to-indigo-50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-4xl mx-auto">
            <div className="flex flex-col items-center">
              <MapPin className="text-purple-600 mb-2" size={32} />
              <p className="text-3xl font-bold text-gray-900">{constellation.museums.length}</p>
              <p className="text-gray-600">Museos conectados</p>
            </div>
            <div className="flex flex-col items-center">
              <Network className="text-purple-600 mb-2" size={32} />
              <p className="text-3xl font-bold text-gray-900">150+</p>
              <p className="text-gray-600">Obras maestras</p>
            </div>
            <div className="flex flex-col items-center">
              <Calendar className="text-purple-600 mb-2" size={32} />
              <p className="text-3xl font-bold text-gray-900">14 días</p>
              <p className="text-gray-600">Ruta sugerida</p>
            </div>
          </div>
        </div>
      </section>

      {/* Concepto curatorial */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            {constellation.concept.title}
          </h2>
          
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-gray-700 leading-relaxed text-lg first-letter:text-6xl first-letter:font-bold first-letter:text-purple-600 first-letter:mr-2 first-letter:float-left">
              {constellation.concept.intro}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {constellation.concept.themes.map((theme, index) => (
              <div 
                key={index}
                className="group p-6 bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-4xl mb-4">{theme.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                  {theme.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {theme.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Grid de museos */}
      <section id="museos" className="py-20 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Los 12 Templos del Renacimiento</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Cada museo guarda tesoros únicos que juntos cuentan la historia completa del Renacimiento
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {constellation.museums.map((museum, index) => (
              <div 
                key={museum.id}
                className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                onClick={() => setSelectedMuseum(museum)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={museum.image} 
                    alt={museum.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    #{index + 1}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <p className="text-xs mb-1">{museum.city}, {museum.country}</p>
                      <h3 className="font-bold text-lg line-clamp-1">{museum.name}</h3>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-sm text-purple-600 font-semibold mb-2">
                    ✨ {museum.masterpiece}
                  </p>
                  <p className="text-xs text-gray-500 mb-3">{museum.year}</p>
                  <p className="text-gray-700 text-sm line-clamp-2 mb-4">
                    {museum.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <a 
                      href={`/museo/${museum.id}`}
                      className="inline-flex items-center gap-1 text-purple-600 hover:text-purple-700 text-sm font-medium"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Ver museo <ChevronRight size={14} />
                    </a>
                    <a 
                      href={`/mapa?museum=${museum.id}`}
                      className="text-gray-400 hover:text-purple-600 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <MapPin size={18} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conexiones artísticas */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-4">Conexiones entre Maestros</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Los grandes artistas del Renacimiento dejaron su legado distribuido por toda Europa
          </p>
          
          <div className="space-y-8">
            {constellation.connections.map((connection, index) => (
              <div 
                key={index}
                className="group bg-gradient-to-r from-purple-50 to-blue-50 p-8 rounded-xl hover:shadow-xl transition-all"
              >
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                      {connection.from.charAt(0)}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                      {connection.from}
                    </h3>
                    <p className="text-gray-700 mb-4">{connection.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {connection.museums.map((museumId) => {
                        const museum = constellation.museums.find(m => m.id === museumId)
                        return (
                          <a 
                            key={museumId}
                            href={`/museo/${museumId}`}
                            className="px-4 py-2 bg-white rounded-full text-sm font-medium text-purple-600 hover:bg-purple-600 hover:text-white transition-colors shadow-sm"
                          >
                            {museum?.name}
                          </a>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ruta sugerida */}
      <section id="ruta" className="py-20 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">{constellation.route.title}</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            {constellation.route.description}
          </p>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Línea vertical */}
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-600 via-blue-600 to-indigo-600 hidden md:block"></div>
              
              <div className="space-y-8">
                {constellation.route.stops.map((stop, index) => (
                  <div key={index} className="relative">
                    {/* Punto en la línea */}
                    <div className="absolute left-8 w-6 h-6 bg-purple-600 rounded-full border-4 border-white shadow-lg -translate-x-1/2 hidden md:block"></div>
                    
                    <div className="md:ml-20 bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all group">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <p className="text-purple-600 font-semibold text-sm mb-1">{stop.day}</p>
                          <h3 className="text-2xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                            {stop.city}
                          </h3>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-500 mt-2 md:mt-0">
                          <Route size={16} />
                          {stop.transport}
                        </div>
                      </div>
                      
                      <p className="text-gray-700 mb-4">{stop.highlights}</p>
                      
                      <div className="flex flex-wrap gap-2">
                        {stop.museums.map((museumId) => {
                          const museum = constellation.museums.find(m => m.id === museumId)
                          return (
                            <span 
                              key={museumId}
                              className="px-3 py-1 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full text-sm font-medium text-purple-700"
                            >
                              {museum?.name.split(' ')[0]}
                            </span>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <a 
              href="/mapa"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold hover:scale-105 transition-transform shadow-xl"
            >
              <MapPin size={20} />
              Ver ruta completa en el mapa
            </a>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <Sparkles size={64} className="mx-auto mb-6 animate-pulse" />
            <h2 className="text-4xl font-bold mb-6">Descubre más constelaciones</h2>
            <p className="text-xl mb-8 opacity-90">
              Explora otras conexiones temáticas: Impresionismo, Arte Moderno, Civilizaciones Antiguas y más
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a 
                href="/descubre"
                className="px-8 py-4 bg-white text-purple-600 rounded-full font-semibold hover:scale-105 transition-transform shadow-xl"
              >
                Ver todas las constelaciones
              </a>
              <a 
                href="/mapa"
                className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white rounded-full font-semibold hover:scale-105 transition-transform border-2 border-white"
              >
                Explorar atlas completo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Modal de museo seleccionado (opcional) */}
      {selectedMuseum && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedMuseum(null)}
        >
          <div 
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-64">
              <img 
                src={selectedMuseum.image} 
                alt={selectedMuseum.name}
                className="w-full h-full object-cover"
              />
              <button 
                onClick={() => setSelectedMuseum(null)}
                className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
              >
                ✕
              </button>
            </div>
            <div className="p-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-2">{selectedMuseum.name}</h3>
              <p className="text-gray-600 mb-4">{selectedMuseum.city}, {selectedMuseum.country}</p>
              <p className="text-purple-600 font-semibold mb-2">
                ✨ {selectedMuseum.masterpiece}
              </p>
              <p className="text-gray-700 mb-6">{selectedMuseum.description}</p>
              <div className="flex gap-3">
                <a 
                  href={`/museo/${selectedMuseum.id}`}
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold hover:scale-105 transition-transform text-center"
                >
                  Ver detalles
                </a>
                <a 
                  href={`/mapa?museum=${selectedMuseum.id}`}
                  className="px-6 py-3 border-2 border-purple-600 text-purple-600 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
                >
                  En el mapa
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}