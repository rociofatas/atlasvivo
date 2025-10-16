import { useState, useEffect } from 'react'
import { Search } from 'lucide-react'
import Header from '../components/Header'
import MapView from '../components/MapView'
import MuseumModal from '../components/MuseumModal'
import { fetchMuseums, filterMuseums } from '../lib/utils.jsx'

export default function Map() {
  const [museums, setMuseums] = useState([])
  const [filteredMuseums, setFilteredMuseums] = useState([])
  const [selectedMuseum, setSelectedMuseum] = useState(null)
  const [filters, setFilters] = useState({
    search: '',
    types: [],
    atmospheres: [],
    region: null
  })

  useEffect(() => {
    fetchMuseums().then(data => {
      setMuseums(data)
      setFilteredMuseums(data)
    }).catch(err => {
      console.error('Error cargando museos:', err)
    })
  }, [])

  useEffect(() => {
    const filtered = filterMuseums(museums, filters)
    setFilteredMuseums(filtered)
  }, [museums, filters])

  return (
    <div className="h-screen flex flex-col bg-bg">
      <Header />

      <div className="bg-white border-b p-4 z-10">
        <div className="max-w-7xl mx-auto flex gap-2">
          <div className="flex-1 min-w-[200px] relative">
            <Search className="absolute left-3 top-1/2 w-5 h-5 opacity-40" style={{transform: 'translateY(-50%)', color: '#1f2630'}} />
            <input
              type="text"
              placeholder="Buscar museo, ciudad o país..."
              value={filters.search}
              onChange={(e) => setFilters({ ...filters, search: e.target.value })}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
              style={{borderColor: '#d1d5db'}}
            />
          </div>
        </div>
      </div>

      <div className="flex-1 flex overflow-hidden" style={{ minHeight: '600px' }}>
        <div className="flex-1 relative" style={{ minHeight: '600px' }}>
          <MapView
            museums={filteredMuseums}
            onMuseumClick={setSelectedMuseum}
            selectedMuseum={selectedMuseum}
          />
        </div>

        <div className="hidden md:block w-80 bg-white border-l overflow-y-auto">
          <div className="p-4">
            <h2 className="font-bold text-lg mb-4">
              {filteredMuseums.length} museo{filteredMuseums.length !== 1 ? 's' : ''}
            </h2>
            <div className="space-y-3">
              {filteredMuseums.map(museum => (
                <button
                  key={museum.id}
                  onClick={() => setSelectedMuseum(museum)}
                  className="w-full text-left p-3 rounded-lg border transition-all"
                  style={{
                    borderColor: selectedMuseum?.id === museum.id ? '#6b73ff' : '#e5e7eb',
                    backgroundColor: selectedMuseum?.id === museum.id ? 'rgba(107, 115, 255, 0.05)' : 'white'
                  }}
                >
                  <h3 className="font-semibold text-sm">{museum.name}</h3>
                  <p className="text-xs text-gray-600">{museum.city}, {museum.country}</p>
                  <div className="flex gap-1 mt-2 flex-wrap">
                    {museum.type.map(t => (
                      <span key={t} className="text-xs bg-gray-100 px-2 py-1 rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {selectedMuseum && (
        <MuseumModal
          museum={selectedMuseum}
          onClose={() => setSelectedMuseum(null)}
        />
      )}
    </div>
  )
}