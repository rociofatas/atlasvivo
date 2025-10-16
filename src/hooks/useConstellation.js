import { useState, useEffect } from 'react'

export function useConstellation(slug) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function loadConstellation() {
      try {
        setLoading(true)
        setError(null)
        
        // Intenta cargar el archivo JSON dinámicamente
        const constellationData = await import(
          `../data/constellations/${slug}.json`
        )
        
        setData(constellationData.default)
      } catch (err) {
        console.error('Error loading constellation:', err)
        setError('Constelación no encontrada')
      } finally {
        setLoading(false)
      }
    }

    if (slug) {
      loadConstellation()
    }
  }, [slug])

  return { data, loading, error }
}