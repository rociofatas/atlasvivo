import { Link } from 'react-router-dom'
import { ExternalLink } from 'lucide-react'

export default function RelatedGrid({ title, items, type = 'artwork' }) {
  if (!items || items.length === 0) return null

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-bold text-ink mb-8">
          {title || 'Relacionados'}
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <Link
              key={index}
              to={`/${type}/${item.slug}`}
              className="group bg-gray-50 rounded-xl overflow-hidden hover:shadow-xl transition-all"
            >
              {item.image && (
                <div className="h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              )}
              <div className="p-4">
                <h3 className="font-bold text-ink mb-1 group-hover:text-iris transition-colors">
                  {item.title}
                </h3>
                {item.subtitle && (
                  <p className="text-sm text-gray-600">{item.subtitle}</p>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}