import { X, Star, Heart, ExternalLink } from 'lucide-react'

export default function MuseumModal({ museum, onClose }) {
  if (!museum) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50" onClick={onClose}>
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-screen overflow-y-auto" style={{maxHeight: '90vh'}} onClick={(e) => e.stopPropagation()}>
        <div className="p-6">
          {museum.image_url && (
            <img src={museum.image_url} alt={museum.name} className="w-full h-60 object-cover rounded-lg mb-4" />
          )}

          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="text-3xl font-bold text-ink mb-1">{museum.name}</h2>
              <p className="opacity-60" style={{color: '#1f2630'}}>{museum.city}, {museum.country}</p>
              <p className="text-sm opacity-40" style={{color: '#1f2630'}}>Fundado en {museum.year_founded}</p>
            </div>
            <button onClick={onClose} className="opacity-40 hover:opacity-100 transition-opacity" style={{color: '#1f2630'}}>
              <X size={24} />
            </button>
          </div>

          <p className="opacity-80 mb-6 leading-relaxed" style={{color: '#1f2630'}}>{museum.description_short}</p>

          {museum.crown_jewel && (
            <div className="p-4 rounded-lg mb-6" style={{backgroundColor: 'rgba(107, 115, 255, 0.05)'}}>
              <h3 className="font-bold text-ink mb-2 flex items-center gap-2">
                <Star className="text-iris" size={20} />
                Joya del museo
              </h3>
              <p className="font-semibold text-ink">{museum.crown_jewel.title}</p>
              <p className="text-sm opacity-70 mt-1" style={{color: '#1f2630'}}>{museum.crown_jewel.story}</p>
            </div>
          )}

          {museum.did_you_know && museum.did_you_know.length > 0 && (
            <div className="mb-6">
              <h3 className="font-bold text-ink mb-2 flex items-center gap-2">
                <Heart className="text-mint" size={20} />
                Lo que no sabías
              </h3>
              <ul className="space-y-2">
                {museum.did_you_know.map((fact, i) => (
                  <li key={i} className="text-sm opacity-70 pl-4 border-l-2" style={{color: '#1f2630', borderColor: 'rgba(0, 184, 148, 0.3)'}}>{fact}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="flex flex-wrap gap-2">
            {museum.official_url && (
              <a href={museum.official_url} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-iris text-white rounded-lg hover:opacity-90 transition-opacity text-sm flex items-center gap-1">
                Sitio oficial <ExternalLink size={16} />
              </a>
            )}
            {museum.wikipedia_url && (
              <a href={museum.wikipedia_url} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-gray-100 text-ink rounded-lg hover:bg-gray-200 transition-colors text-sm flex items-center gap-1">
                Wikipedia <ExternalLink size={16} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}