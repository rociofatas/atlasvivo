import { lazy, Suspense, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useConstellation } from '../hooks/useConstellation'
import Header from '../components/Header'  // 👈 Añadir
import Footer from '../components/Footer'  // 👈 Añadir
import ConstellationHero from '../components/constellation/ConstellationHero'
import ConstellationIntro from '../components/constellation/ConstellationIntro'
import ConstellationMuseums from '../components/constellation/ConstellationMuseums'
import ConstellationHighlights from '../components/constellation/ConstellationHighlights'
import ConstellationCTA from '../components/constellation/ConstellationCTA'

const ConstellationTimeline = lazy(() => import('../components/constellation/ConstellationTimeline'))

function LoadingSpinner() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-600"></div>
    </div>
  )
}

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">Constelación no encontrada</p>
        <a 
          href="/descubre"
          className="inline-block px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors"
        >
          Volver a Descubre
        </a>
      </div>
    </div>
  )
}

export default function ConstellationPage() {
  const { slug } = useParams()
  const { data, loading, error } = useConstellation(slug)

  useEffect(() => {
    if (data?.seo) {
      document.title = data.seo.title || `${data.title} - Atlas Vivo`
      
      const metaDescription = document.querySelector('meta[name="description"]')
      if (metaDescription) {
        metaDescription.setAttribute('content', data.seo.description)
      }

      const ogTitle = document.querySelector('meta[property="og:title"]')
      const ogDescription = document.querySelector('meta[property="og:description"]')
      const ogImage = document.querySelector('meta[property="og:image"]')
      
      if (ogTitle) ogTitle.setAttribute('content', data.seo.title)
      if (ogDescription) ogDescription.setAttribute('content', data.seo.description)
      if (ogImage && data.seo.ogImage) ogImage.setAttribute('content', data.seo.ogImage)
    }

    return () => {
      document.title = 'Atlas Vivo - Shared Museum'
    }
  }, [data])

  if (loading) return <LoadingSpinner />
  if (error || !data) return <NotFound />

  return (
    <>
      <Header />  {/* 👈 Añadido */}
      
      <main className="min-h-screen">
        <ConstellationHero 
          title={data.title}
          subtitle={data.subtitle}
          gradient={data.gradient || 'from-blue-600 to-purple-600'}
          image={data.image}
        />

        <ConstellationIntro intro={data.intro} />

        <ConstellationMuseums 
          museums={data.museums}
          gradient={data.gradient}
        />

        <ConstellationHighlights 
          highlights={data.highlights}
          gradient={data.gradient}
        />

        <Suspense fallback={<LoadingSpinner />}>
          <ConstellationTimeline route={data.route} />
        </Suspense>

        <ConstellationCTA 
          cta={data.cta}
          gradient={data.gradient || 'from-blue-600 to-purple-600'}
        />
      </main>

      <Footer />  {/* 👈 Añadido */}
    </>
  )
}