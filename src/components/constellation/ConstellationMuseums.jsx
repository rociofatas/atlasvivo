import { MapPin, ExternalLink } from 'lucide-react'

export default function ConstellationMuseums({ museums, gradient }) {
  if (!museums || museums.length === 0) return null

  return (
    <section id="museos" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Museos de la Constelación</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          {museums.length} instituciones conectadas por un hilo cultural común
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {museums.map((museum, index) => (
            <article 
              key={index}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={museum.image} 
                  alt={museum.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin size={16} />
                      <p className="text-sm">{museum.city}</p>
                    </div>
                    <h3 className="font-bold text-lg line-clamp-2">{museum.name}</h3>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <p className="text-gray-700 text-sm leading-relaxed mb-4 line-clamp-3">
                  {museum.blurb}
                </p>
                {museum.url && (
                  <a 
                    href={museum.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm font-semibold transition-colors"
                  >
                    Visitar museo <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}