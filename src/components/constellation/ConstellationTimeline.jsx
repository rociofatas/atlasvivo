import { Calendar } from 'lucide-react'

export default function ConstellationTimeline({ route }) {
  if (!route || route.length === 0) return null

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Ruta Sugerida</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Un itinerario cultural para explorar toda la constelación
        </p>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Línea vertical */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 to-purple-600 hidden md:block"></div>
            
            <div className="space-y-8">
              {route.map((stop, index) => (
                <div key={index} className="relative">
                  {/* Punto en la línea */}
                  <div className="absolute left-8 w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow-lg -translate-x-1/2 hidden md:block"></div>
                  
                  <article className="md:ml-20 bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="flex items-start gap-4 mb-3">
                      <Calendar className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                      <div className="flex-grow">
                        <p className="text-blue-600 font-semibold text-sm mb-1">{stop.days}</p>
                        <h3 className="text-2xl font-bold text-gray-900">{stop.city}</h3>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 leading-relaxed mb-4">{stop.notes}</p>
                    
                    {stop.museums && stop.museums.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {stop.museums.map((museum, idx) => (
                          <span 
                            key={idx}
                            className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                          >
                            {museum}
                          </span>
                        ))}
                      </div>
                    )}
                  </article>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}