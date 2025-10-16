import { useEffect, useRef } from 'react'
import maplibregl from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'

export default function MapView({ museums, onMuseumClick, selectedMuseum }) {
  const mapContainer = useRef(null)
  const map = useRef(null)
  const markers = useRef([])

useEffect(() => {
  console.log('🗺️ MapView useEffect ejecutado')
  console.log('mapContainer:', mapContainer.current)
  
  if (!mapContainer.current) {
    console.error('❌ No hay contenedor')
    return
  }

  if (map.current) {
    console.log('⚠️ Mapa ya existe, saliendo')
    return
  }

  console.log('🚀 Creando mapa...')

  try {
    map.current = new maplibregl.Map({
      container: mapContainer.current,
      //style: 'https://demotiles.maplibre.org/style.json',
  style: {
    version: 8,
    sources: {
      'osm-tiles': {
        type: 'raster',
        tiles: ['https://tile.openstreetmap.org/{z}/{x}/{y}.png'],
        tileSize: 256,
        attribution: '© OpenStreetMap'
      }
    },
    layers: [{
      id: 'osm-tiles',
      type: 'raster',
      source: 'osm-tiles',
      minzoom: 0,
      maxzoom: 19
    }]
  }, 
      center: [0, 20],
      zoom: 2
    })

    console.log('✅ Mapa creado')

    map.current.on('load', () => {
      console.log('🎉 Mapa cargado')
    })

    // Silencia los errores de abort durante cleanup
    map.current.on('error', (e) => {
      if (e.error?.name !== 'AbortError') {
        console.error('❌ Error mapa:', e)
      }
    })

    map.current.addControl(new maplibregl.NavigationControl(), 'top-right')

  } catch (error) {
    console.error('❌ Error creando mapa:', error)
  }

  return () => {
    console.log('🧹 Limpiando')
    
    // Limpia marcadores primero
    markers.current.forEach(marker => {
      try {
        marker.remove()
      } catch (e) {
        // Ignora errores de marcadores
      }
    })
    markers.current = []
    
    // Limpia el mapa de forma segura
    if (map.current) {
      try {
        // Remueve listeners antes de eliminar el mapa
        map.current.off('load')
        map.current.off('error')
        map.current.remove()
        map.current = null
      } catch (error) {
        // Ignora AbortError y otros errores de cleanup
        if (error.name !== 'AbortError') {
          console.warn('Error al limpiar el mapa:', error.message)
        }
        map.current = null
      }
    }
  }
}, [])

  useEffect(() => {
    console.log('📍 useEffect marcadores, museums:', museums?.length)
    
    if (!map.current || !museums) return

    markers.current.forEach(marker => marker.remove())
    markers.current = []

    museums.forEach(museum => {
      const el = document.createElement('div')
      el.className = 'museum-marker'
      
      el.addEventListener('click', () => {
        onMuseumClick(museum)
      })

      const marker = new maplibregl.Marker({ element: el })
        .setLngLat([museum.coordinates.lng, museum.coordinates.lat])
        .addTo(map.current)

      markers.current.push(marker)
    })

    console.log('✅ Marcadores:', markers.current.length)
  }, [museums, onMuseumClick])

  return (
    <div 
      ref={mapContainer} 
      style={{ 
        width: '100%',
        height: '100%',
        minHeight: '500px',
        backgroundColor: '#e0e0e0',
        border: '5px solid blue'
      }}
    />
  )
}