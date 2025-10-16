import Header from '../components/Header'
import Footer from '../components/Footer'
import ProjectEcosystem from '../components/ProjectEcosystem'
import { Mail } from 'lucide-react'
import { useState } from 'react'

export default function About() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('success')
    setTimeout(() => {
      setEmail('')
      setStatus('idle')
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-bg">
      <Header />
      
      <div className="py-12 px-4">
        <div className="max-w-3xl mx-auto">
          
          {/* Hero title */}
          <h1 className="text-4xl font-bold text-ink mb-8 text-center">
            Acerca de
          </h1>

          {/* Main content */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-ink mb-6">
              Un mapa vivo para habitar la cultura, juntos.
            </h2>
            <div className="space-y-4 opacity-80 leading-relaxed" style={{color: '#1f2630'}}>
              <p>
                Atlas Vivo es más que un directorio de museos. Es una invitación a redescubrir
                cómo nos relacionamos con el patrimonio cultural de la humanidad.
              </p>
              <p>
                Creemos que cada museo guarda no solo objetos, sino historias, emociones y conexiones
                que trascienden el tiempo y el espacio. Este mapa interactivo es el primer paso de
                un viaje más amplio: <a href="https://www.sharedmuseum.com/" target="_blank"><strong>Shared Museum</strong></a>, una plataforma donde la cultura
                se vive en compañía, donde el aprendizaje es un acto social y donde cada visita,
                virtual o presencial, se convierte en una experiencia compartida.
              </p>
              <p>
                Por ahora, te invitamos a explorar, descubrir joyas ocultas y trazar tus propias rutas
                entre los museos del mundo. Pronto, podrás hacerlo acompañado.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* 👇 NUEVO: Ecosistema visual */}
      <ProjectEcosystem />

      {/* Newsletter signup */}
      <div className="py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="rounded-xl p-8" style={{background: 'linear-gradient(135deg, rgba(107, 115, 255, 0.1) 0%, rgba(0, 184, 148, 0.1) 100%)'}}>
            <h3 className="text-2xl font-bold text-ink mb-4 text-center">
              Quiero explorar en compañía
            </h3>
            <p className="opacity-70 text-center mb-6" style={{color: '#1f2630'}}>
              Recibe actualizaciones sobre nuevos museos, constelaciones culturales y el lanzamiento de Shared Museum
            </p>
            {status === 'success' ? (
              <div className="bg-mint text-white p-4 rounded-lg text-center font-semibold">
                ¡Gracias por suscribirte! Te mantendremos informado.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="rocio@rociofatas.info"
                  required
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
                />
                <button
                  type="submit"
                  className="bg-iris text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                >
                  <Mail size={20} />
                  Suscribirme
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}