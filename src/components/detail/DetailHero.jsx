import { ArrowLeft, ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function DetailHero({ title, subtitle, year, image, backTo, externalLink }) {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-purple-50 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        
        <Link 
          to={backTo || '/descubre'}
          className="inline-flex items-center gap-2 text-iris hover:text-mint mb-8 transition-colors font-medium"
        >
          <ArrowLeft size={20} />
          Volver
        </Link>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-ink mb-4">
              {title}
            </h1>
            {subtitle && (
              <p className="text-xl text-gray-700 mb-2">{subtitle}</p>
            )}
            {year && (
              <p className="text-lg text-gray-600 mb-6">{year}</p>
            )}
            
            {externalLink && (
              <a
                href={externalLink.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-iris text-white rounded-full font-semibold hover:bg-mint transition-colors"
              >
                {externalLink.label || 'Más información'}
                <ExternalLink size={18} />
              </a>
            )}
          </div>

          {image && (
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={image} 
                alt={title}
                className="w-full h-auto object-cover"
                loading="eager"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}