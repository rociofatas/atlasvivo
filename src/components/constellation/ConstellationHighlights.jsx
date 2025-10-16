import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function ConstellationHighlights({ highlights, gradient }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  if (!highlights || highlights.length === 0) return null

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % highlights.length)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + highlights.length) % highlights.length)
  }

  const current = highlights[currentIndex]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Obras Destacadas</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Las joyas que conectan esta constelación
        </p>
        
        <div className="max-w-5xl mx-auto">
          {/* Carousel */}
          <div className="relative">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Imagen */}
              <div className="relative h-96 md:h-[500px] rounded-xl overflow-hidden shadow-2xl">
                <img 
                  src={current.image}
                  alt={current.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Info */}
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-blue-600 font-semibold mb-2">{current.museum}</p>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">{current.title}</h3>
                  <p className="text-gray-600">
                    {current.artist} • {current.year}
                  </p>
                </div>
                
                {current.note && (
                  <p className="text-gray-700 leading-relaxed">{current.note}</p>
                )}

                {/* Navigation dots */}
                <div className="flex gap-2 pt-4">
                  {highlights.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`h-2 rounded-full transition-all ${
                        index === currentIndex 
                          ? 'w-8 bg-blue-600' 
                          : 'w-2 bg-gray-300 hover:bg-gray-400'
                      }`}
                      aria-label={`Ver obra ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Navigation buttons */}
            <button
              onClick={prev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 p-3 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-colors"
              aria-label="Obra anterior"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={next}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 p-3 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-colors"
              aria-label="Siguiente obra"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}