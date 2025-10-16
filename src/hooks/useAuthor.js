import { useState, useEffect } from 'react'

export function useAuthor(slug) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function loadAuthor() {
      try {
        setLoading(true)
        setError(null)
        
        const authorData = await import(`../data/authors/${slug}.json`)
        setData(authorData.default)
      } catch (err) {
        console.error('Error loading author:', err)
        setError('Autor no encontrado')
      } finally {
        setLoading(false)
      }
    }

    if (slug) {
      loadAuthor()
    }
  }, [slug])

  return { data, loading, error }
}