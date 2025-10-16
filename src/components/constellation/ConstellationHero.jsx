import { Heart, Share2, ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function ConstellationHero({ title, subtitle, gradient, image }) {
  const [isLiked, setIsLiked] = useState(false)

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          text: subtitle,
          url: window.location.href
        })
      } catch (err) {
        console.log('Error sharing:', err)
      }
    }
  }

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background */}
      {image && (
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-85`}></div>
        </div>
      )}
      {!image && (
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient}`}></div>
      )}

      {/* Back button */}
      <Link 
        to="/descubre"
        className="absolute top-6 left-6 z-20 flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md text-white rounded-full hover:bg-white/30 transition-colors"
        aria-label="Volver a Descubre"
      >
        <ArrowLeft size={20} />
        <span className="hidden sm:inline">Volver</span>
      </Link>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="animate-fadeIn">
          <p className="text-sm sm:text-base uppercase tracking-wider mb-4 opacity-90">
            Constelación Cultural
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto mb-8 opacity-90">
            {subtitle}
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center items-center">
            <a 
              href="#museos"
              className="px-8 py-4 bg-white text-gray-900 rounded-full font-semibold hover:scale-105 transition-transform shadow-xl"
            >
              Explorar
            </a>
            <button
              onClick={() => setIsLiked(!isLiked)}
              className={`p-4 rounded-full ${isLiked ? 'bg-red-500' : 'bg-white/20'} backdrop-blur-sm hover:scale-110 transition-all`}
              aria-label={isLiked ? 'Quitar de favoritos' : 'Añadir a favoritos'}
            >
              <Heart size={24} fill={isLiked ? 'white' : 'none'} stroke="white" />
            </button>
            <button 
              onClick={handleShare}
              className="p-4 bg-white/20 backdrop-blur-sm rounded-full hover:scale-110 transition-all"
              aria-label="Compartir constelación"
            >
              <Share2 size={24} stroke="white" />
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  )
}