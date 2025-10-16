import { useState, useEffect } from 'react'

export function useArtwork(slug) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function loadArtwork() {
      try {
        setLoading(true)
        setError(null)
        
        const artworkData = await import(`../data/artworks/${slug}.json`)
        setData(artworkData.default)
      } catch (err) {
        console.error('Error loading artwork:', err)
        setError('Obra no encontrada')
      } finally {
        setLoading(false)
      }
    }

    if (slug) {
      loadArtwork()
    }
  }, [slug])

  return { data, loading, error }
}