import { Link } from 'react-router-dom'
import { Sparkles, Map } from 'lucide-react'

export default function DetailCTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-iris to-mint">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <Sparkles size={64} className="mx-auto mb-6 text-white opacity-90" />
          <h2 className="text-4xl font-bold mb-6 text-white">
            Sigue explorando
          </h2>
          <p className="text-xl mb-8 text-white opacity-90">
            Descubre más obras maestras y artistas en nuestro atlas cultural
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/descubre"
              className="px-8 py-4 bg-white text-gray-900 rounded-full font-semibold hover:scale-105 transition-transform shadow-xl"
            >
              Ver destacados
            </Link>
            <Link 
              to="/mapa"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/20 backdrop-blur-sm text-white rounded-full font-semibold hover:scale-105 transition-transform border-2 border-white"
            >
              <Map size={20} />
              Explorar mapa
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}