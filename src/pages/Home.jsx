import { Link } from 'react-router-dom'
import { Globe, Mail, Search, Star, Users, ChevronRight } from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-bg">
      <Header />

      <section className="bg-gradient-to-br from-iris/10 via-mint/5 to-lemon/10 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-ink mb-6 leading-tight">
            El mundo está lleno de museos.<br />Este mapa los une.
          </h1>
          <p className="text-xl opacity-70 mb-8 max-w-2xl mx-auto" style={{color: '#1f2630'}}>
            Explora, aprende y conecta con los lugares donde la humanidad guarda su memoria.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/mapa" className="bg-iris text-white px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-all transform hover:scale-105 flex items-center justify-center gap-2">
              <Globe size={20} />
              Entrar al mapa
            </Link>
            <Link to="/acerca" className="bg-white text-iris border-2 border-iris px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-all flex items-center justify-center gap-2">
              <Mail size={20} />
              Recibir actualizaciones
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-ink mb-12">Cómo funciona</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{backgroundColor: 'rgba(107, 115, 255, 0.1)'}}>
                <Search className="w-8 h-8 text-iris" />
              </div>
              <h3 className="text-xl font-bold text-ink mb-2">Explora</h3>
              <p className="opacity-70" style={{color: '#1f2630'}}>Descubre museos de todo el mundo en un mapa interactivo</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{backgroundColor: 'rgba(0, 184, 148, 0.1)'}}>
                <Star className="w-8 h-8 text-mint" />
              </div>
              <h3 className="text-xl font-bold text-ink mb-2">Aprende</h3>
              <p className="opacity-70" style={{color: '#1f2630'}}>Conoce historias, joyas y curiosidades de cada museo</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{backgroundColor: 'rgba(255, 217, 61, 0.4)'}}>
                <Users className="w-8 h-8 text-ink" />
              </div>
              <h3 className="text-xl font-bold text-ink mb-2">Conecta</h3>
              <p className="opacity-70" style={{color: '#1f2630'}}>Únete a una comunidad que comparte la pasión por la cultura</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección: Descubre */}
<section className="py-20 bg-gray-50">
  <div className="container mx-auto px-4">
    <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
      Constelaciones Culturales
    </h2>
    <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
      Rutas temáticas para viajar entre museos siguiendo hilos narrativos únicos
    </p>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      
      {/* Renacimiento Europeo */}
      <Link 
        to="/constelaciones/renacimiento-europeo"
        className="group bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300"
      >
        <div className="text-6xl mb-4">🎨</div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          El Renacimiento Europeo
        </h3>
        <p className="text-gray-600 mb-4">12 museos</p>
        <span className="inline-flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all">
          Explorar ruta
          <svg 
            className="w-4 h-4" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </Link>

      {/* Civilizaciones Antiguas */}
      <Link 
        to="/constelaciones/civilizaciones-antiguas"
        className="group bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300"
      >
        <div className="text-6xl mb-4">🏛️</div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          Civilizaciones Antiguas
        </h3>
        <p className="text-gray-600 mb-4">8 museos</p>
        <span className="inline-flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all">
          Explorar ruta
          <svg 
            className="w-4 h-4" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </Link>

      {/* Arte Contemporáneo */}
      <Link 
        to="/constelaciones/arte-contemporaneo"
        className="group bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300"
      >
        <div className="text-6xl mb-4">🖼️</div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          Arte Contemporáneo
        </h3>
        <p className="text-gray-600 mb-4">15 museos</p>
        <span className="inline-flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all">
          Explorar ruta
          <svg 
            className="w-4 h-4" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </Link>

    </div>
  </div>
</section>


      <Footer />
    </div>
  )
}