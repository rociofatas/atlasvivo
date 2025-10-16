import { useState } from 'react'
import { MapPin, Calendar, Users, Star, Heart, Share2, Play } from 'lucide-react'
import SecondaryNav from '../components/SecondaryNav'
import Hero from '../components/Hero'
import ArtworkGrid from '../components/ArtworkGrid'

export default function MuseumOfMonth() {
  const [isLiked, setIsLiked] = useState(false)
  
  // Mock data - luego esto vendrá de museumOfMonth.json
  const museum = {
    name: "Museo del Prado",
    location: "Madrid, España",
    image: "https://www.acciona.com/content/dam/accionacom/media/3490343/prado.jpg",
    description: "Una colección incomparable de pintura española y europea, hogar de Velázquez y Goya.",
    reason: "Celebramos el 205 aniversario de su fundación este mes",
    founded: 1819,
    visitors: "3.5M visitantes anuales",
    history: {
      title: "Historia Viva",
      content: "El Museo del Prado, inaugurado en 1819, nació como Museo Real de Pinturas por iniciativa del rey Fernando VII. Su edificio neoclásico, diseñado por Juan de Villanueva, fue concebido originalmente como Gabinete de Historia Natural. Hoy alberga la colección más completa de pintura española del mundo.",
      timeline: [
        { year: 1785, event: "Inicio de construcción del edificio" },
        { year: 1819, event: "Inauguración como Museo Real" },
        { year: 1868, event: "Pasa a ser propiedad nacional" },
        { year: 2007, event: "Ampliación con el Cubo de Moneo" }
      ]
    },
    masterpieces: [
      {
        title: "Las Meninas",
        artist: "Diego Velázquez",
        year: "1656",
        image: "https://volfredo.com/wp-content/uploads/2023/03/las_menivas-lorealmaravilloso.jpg?w=1024",
        description: "Obra cumbre del barroco español que revoluciona la perspectiva y la mirada del espectador.",
        slug: "las-meninas"  // 👈 Añadir
      },
      {
        title: "El jardín de las delicias",
        artist: "El Bosco",
        year: "1490-1500",
        image: "https://cdn.culturagenial.com/es/imagenes/el-bosco-y-el-jardin-de-las-delicias-historia-y-analisis-og.jpg?class=ogImageRectangle",
        description: "Tríptico enigmático que explora el paraíso, el infierno y las tentaciones humanas."
      },
      {
        title: "Los fusilamientos del 3 de mayo",
        artist: "Francisco de Goya",
        year: "1814",
        image: "https://content-historia.nationalgeographic.com.es/medio/2024/05/02/fusilamientos_81c82b04_240502155817_1200x630.jpg",
        description: "Obra maestra que denuncia la brutalidad de la guerra con intensidad sin precedentes."
      }
    ],
    curiosities: [
      "Alberga más de 8,000 pinturas y 1,000 esculturas, aunque solo se exhibe un 10%.",
      "El edificio fue bombardeado durante la Guerra Civil pero las obras fueron evacuadas a Valencia.",
      "Velázquez y Goya fueron pintores de la corte española antes de que sus obras llegaran al museo.",
      "La colección inicial contaba con solo 311 pinturas de la Corona española."
    ],
    multimedia: {
      video360: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      gallery: [
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/64/f0/28/museo-nacional-del-prado.jpg?w=900&h=-1&s=1",
        "https://res.cloudinary.com/hello-tickets/image/upload/c_limit,f_auto,q_auto,w_1300/v1652924770/agdwabbva2rv0cqhsgwr.jpg",
        "https://static01.nyt.com/images/2019/01/30/arts/30PRADO-3/29PRADO-3-facebookJumbo.jpg?year=2019&h=550&w=1050&s=124053f9ccc0214c3b707acbd55fbcdc1317401e6beb2af9ddb843f21f9192da&k=ZQJBKqZ0VN",
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2d/7f/14/95/caption.jpg?w=800&h=800&s=1"
      ]
    }
  }

  return (
    <>
      <SecondaryNav backTo="/descubre" />
      
      {/* Hero */}
      <Hero
        image={museum.image}
        title={museum.name}
        subtitle="MUSEO DEL MES"
        description={museum.reason}
        gradient="from-blue-600 to-cyan-500"
      >
        <div className="flex flex-wrap gap-4 justify-center items-center mt-8">
          <a 
            href="#historia"
            className="px-8 py-4 bg-white text-gray-900 rounded-full font-semibold hover:scale-105 transition-transform shadow-xl"
          >
            Descubrir
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

      {/* Stats */}
      <section className="bg-gradient-to-r from-blue-50 to-cyan-50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Calendar className="text-blue-600 mb-2" size={32} />
              <p className="text-3xl font-bold text-gray-900">{museum.founded}</p>
              <p className="text-gray-600">Año de fundación</p>
            </div>
            <div className="flex flex-col items-center">
              <Users className="text-blue-600 mb-2" size={32} />
              <p className="text-3xl font-bold text-gray-900">{museum.visitors}</p>
              <p className="text-gray-600">Visitantes</p>
            </div>
            <div className="flex flex-col items-center">
              <Star className="text-blue-600 mb-2" size={32} />
              <p className="text-3xl font-bold text-gray-900">Top 10</p>
              <p className="text-gray-600">Museos del mundo</p>
            </div>
          </div>
        </div>
      </section>

      {/* Historia Viva */}
      <section id="historia" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            {museum.history.title}
          </h2>
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-gray-700 leading-relaxed text-lg">
              {museum.history.content}
            </p>
          </div>
          
          {/* Timeline */}
          <div className="space-y-6">
            {museum.history.timeline.map((item, index) => (
              <div key={index} className="flex gap-4 items-start group">
                <div className="flex-shrink-0 w-20 text-right">
                  <span className="text-2xl font-bold text-blue-600 group-hover:scale-110 inline-block transition-transform">
                    {item.year}
                  </span>
                </div>
                <div className="flex-shrink-0 w-4 h-4 rounded-full bg-blue-600 mt-2 group-hover:scale-150 transition-transform"></div>
                <div className="flex-grow">
                  <p className="text-gray-700 text-lg">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Obras Imprescindibles */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Obras Imprescindibles</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Tres joyas maestras que no puedes perderte en tu visita
          </p>
          <ArtworkGrid artworks={museum.masterpieces} />
        </div>
      </section>

      {/* Curiosidades */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12">¿Sabías que...?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {museum.curiosities.map((fact, index) => (
              <div 
                key={index}
                className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <p className="text-gray-700 leading-relaxed">{fact}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Galería Multimedia */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Galería Multimedia</h2>
          <p className="text-center text-gray-600 mb-12">
            Explora el museo desde casa
          </p>
          
          {/* Video 360 */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl group cursor-pointer">
              <img 
                src={museum.image} 
                alt="Tour 360°"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-colors">
                <div className="text-center text-white">
                  <Play size={64} className="mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <p className="text-xl font-semibold">Tour Virtual 360°</p>
                </div>
              </div>
            </div>
          </div>

          {/* Galería de imágenes */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {museum.multimedia.gallery.map((img, index) => (
              <div 
                key={index}
                className="aspect-square rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow cursor-pointer group"
              >
                <img 
                  src={img} 
                  alt={`Galería ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">¿Listo para visitarlo?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Planifica tu visita o explora otros museos fascinantes en nuestro atlas
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a 
              href="#"
              className="px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:scale-105 transition-transform shadow-xl"
            >
              Planificar visita
            </a>
            <a 
              href="/mapa"
              className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white rounded-full font-semibold hover:scale-105 transition-transform border-2 border-white"
            >
              Ver en el mapa
            </a>
          </div>
        </div>
      </section>

      {/* Estilos adicionales */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out;
        }
      `}</style>
    </>
  )
}