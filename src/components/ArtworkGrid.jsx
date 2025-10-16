import { ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function ArtworkGrid({ artworks }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {artworks.map((artwork, index) => (
        <article 
          key={index}
          className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
        >
          <div className="relative h-64 overflow-hidden">
            <img 
              src={artwork.image} 
              alt={artwork.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white text-sm">{artwork.artist}</p>
              </div>
            </div>
          </div>
          <div className="p-4">
            <h3 className="font-bold text-lg mb-2">{artwork.title}</h3>
            <p className="text-gray-600 text-sm mb-3">{artwork.year}</p>
            {artwork.description && (
              <p className="text-gray-700 text-sm line-clamp-2 mb-3">
                {artwork.description}
              </p>
            )}
            {artwork.slug && (
              <Link 
                to={`/obra/${artwork.slug}`}
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm font-medium"
              >
                Saber más <ExternalLink size={14} />
              </Link>
            )}
          </div>
        </article>
      ))}
    </div>
  )
}