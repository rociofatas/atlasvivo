import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useArtwork } from '../hooks/useArtwork'
import Header from '../components/Header'
import Footer from '../components/Footer'
import DetailHero from '../components/detail/DetailHero'
import FactSheet from '../components/detail/FactSheet'
import KeyIdeas from '../components/detail/KeyIdeas'
import RelatedGrid from '../components/detail/RelatedGrid'
import DetailCTA from '../components/detail/DetailCTA'

function LoadingSpinner() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-iris"></div>
    </div>
  )
}

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">Obra no encontrada</p>
        <a 
          href="/descubre"
          className="inline-block px-8 py-4 bg-iris text-white rounded-full font-semibold hover:bg-mint transition-colors"
        >
          Volver a Descubre
        </a>
      </div>
    </div>
  )
}

export default function ArtworkPage() {
  const { slug } = useParams()
  const { data, loading, error } = useArtwork(slug)

  useEffect(() => {
    if (data?.seo) {
      document.title = data.seo.title || `${data.title} - Atlas Vivo`
      
      const metaDescription = document.querySelector('meta[name="description"]')
      if (metaDescription && data.seo.description) {
        metaDescription.setAttribute('content', data.seo.description)
      }

      const ogTitle = document.querySelector('meta[property="og:title"]')
      const ogDescription = document.querySelector('meta[property="og:description"]')
      const ogImage = document.querySelector('meta[property="og:image"]')
      
      if (ogTitle) ogTitle.setAttribute('content', data.seo.title)
      if (ogDescription) ogDescription.setAttribute('content', data.seo.description)
      if (ogImage && data.seo.image) ogImage.setAttribute('content', data.seo.image)
    }

    return () => {
      document.title = 'Atlas Vivo - Shared Museum'
    }
  }, [data])

  if (loading) return <LoadingSpinner />
  if (error || !data) return <NotFound />

  return (
    <>
      <Header />
      
      <main>
        <DetailHero 
          title={data.title}
          subtitle={data.artist}
          year={data.year}
          image={data.image}
          backTo={data.backTo || '/museo-del-mes'}
          externalLink={data.externalLink}
        />

        <FactSheet facts={data.facts} />

        <KeyIdeas 
          title="Análisis de la obra"
          ideas={data.keyIdeas}
        />

        {data.relatedWorks && (
          <RelatedGrid 
            title="Obras relacionadas"
            items={data.relatedWorks}
            type="obra"
          />
        )}

        <DetailCTA />
      </main>

      <Footer />
    </>
  )
}