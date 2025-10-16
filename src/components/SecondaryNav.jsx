import { ArrowLeft, Home, Map } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function SecondaryNav({ backTo = '/', showMapLink = true }) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link 
            to={backTo}
            className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
          >
            <ArrowLeft size={20} />
            <span className="font-medium">Volver</span>
          </Link>
          
          <div className="flex items-center gap-4">
            <Link 
              to="/"
              className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
            >
              <Home size={20} />
              <span className="hidden sm:inline font-medium">Inicio</span>
            </Link>
            
            {showMapLink && (
              <Link 
                to="/mapa"
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Map size={20} />
                <span className="hidden sm:inline font-medium">Ver Mapa</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}