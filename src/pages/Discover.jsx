import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Discover() {
  return (
    <div className="min-h-screen bg-bg">
      <Header />
      
      <div className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* Hero */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-ink mb-4">
              Descubre
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explora museos destacados, exposiciones temporales y constelaciones culturales
            </p>
          </div>

          {/* Destacados */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-ink mb-8">Destacados del mes</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {/* Tarjeta 1: Museo del Mes */}
              <Link 
                to="/museo-del-mes" 
                className="block bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="h-48 bg-gradient-to-br from-blue-500 to-teal-500"></div>
                <div className="p-6">
                  <p className="text-blue-600 font-semibold text-sm mb-2">MUSEO DEL MES</p>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Museo del Prado</h3>
                  <p className="text-gray-600 mb-4">
                    Una colección incomparable de pintura española y europea, hogar de Velázquez y Goya.
                  </p>
                  <span className="text-blue-600 font-semibold hover:text-blue-700">
                    Leer más →
                  </span>
                </div>
              </Link>

              {/* Tarjeta 2: Exposición Destacada */}
              <Link 
                to="/exposicion/impresionismo-paris" 
                className="block bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="h-48 bg-gradient-to-br from-green-500 to-yellow-500"></div>
                <div className="p-6">
                  <p className="text-green-600 font-semibold text-sm mb-2">EXPOSICIÓN DESTACADA</p>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Impresionismo en París</h3>
                  <p className="text-gray-600 mb-4">
                    Un recorrido por las obras que revolucionaron el arte a finales del siglo XIX.
                  </p>
                  <span className="text-green-600 font-semibold hover:text-green-700">
                    Explorar →
                  </span>
                </div>
              </Link>

              {/* Tarjeta 3: Constelación destacada */}
              <Link 
                to="/constelaciones/renacimiento-europeo" 
                className="block bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="h-48 bg-gradient-to-br from-yellow-400 via-amber-500 to-purple-600"></div>
                <div className="p-6">
                  <p className="text-purple-600 font-semibold text-sm mb-2">CONSTELACIÓN</p>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Arte del Renacimiento</h3>
                  <p className="text-gray-600 mb-4">
                    12 museos unidos por las obras maestras que definieron una era.
                  </p>
                  <span className="text-purple-600 font-semibold hover:text-purple-700">
                    Ver ruta →
                  </span>
                </div>
              </Link>

            </div>
          </section>

          {/* Constelaciones Culturales */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-ink mb-4">Constelaciones Culturales</h2>
            <p className="text-gray-600 mb-8 max-w-2xl">
              Rutas temáticas para viajar entre museos siguiendo hilos narrativos únicos
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
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
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>

            </div>
          </section>

        </div>
      </div>

      <Footer />
    </div>
  )
}