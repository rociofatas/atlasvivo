export default function ProjectEcosystem() {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-blue-50 to-green-50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{color: '#1f2630'}}>
              Ecosistema de proyectos
            </h2>
            <p className="text-lg leading-relaxed" style={{color: '#1f2630', opacity: 0.8}}>
              Atlas Vivo forma parte de{' '}
              <a href="https://www.sharedmuseum.com/" target="_blank"><span className="font-semibold" style={{color: '#00b894'}}>Shared Museum</span></a>, 
              una iniciativa creada desde{' '}
              <a href="https://rociofatas.info/ludico" target="_blank"><span className="font-semibold" style={{color: '#6b73ff'}}>Lu·di·co</span></a>, 
              estudio de diseño fundado por Rocío Fatás.
            </p>
          </div>

          {/* Visual Diagram */}
          <div className="relative">
            
            {/* Nivel 1: Atlas Vivo */}
            <div className="flex flex-col items-center mb-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-3 h-3 rounded-full" style={{background: 'linear-gradient(135deg, #6b73ff 0%, #00b894 100%)'}}></div>
                  <h3 className="text-2xl font-bold" style={{color: '#1f2630'}}>Atlas Vivo</h3>
                </div>
                <p className="text-sm" style={{color: '#1f2630', opacity: 0.7}}>
                  Mapa interactivo de museos
                </p>
              </div>
              
              {/* Flecha curva */}
              <svg className="my-4" width="60" height="40" viewBox="0 0 60 40" fill="none">
                <path 
                  d="M30 0 L30 30 M25 25 L30 30 L35 25" 
                  stroke="#00b894" 
                  strokeWidth="2.5" 
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              
              <p className="text-xs italic mb-4" style={{color: '#1f2630', opacity: 0.5}}>
                parte de
              </p>
            </div>

            {/* Nivel 2: Shared Museum */}
            <div className="flex flex-col items-center mb-8">
              <a href="https://www.sharedmuseum.com/" target="_blank">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex flex-col items-center gap-4">
                    <img 
                      src="/logos/SM-LOGO.png" 
                      alt="Shared Museum"
                      className="h-20 w-auto"
                    />
                    <div className="text-center">
                      <h3 className="text-xl font-bold mb-1" style={{color: '#1f2630'}}>
                        Shared Museum
                      </h3>
                      <p className="text-sm" style={{color: '#1f2630', opacity: 0.7}}>
                        Experiencias culturales compartidas
                      </p>
                    </div>
                  </div>
                </div>
              </a>
              
              {/* Flecha curva */}
              <svg className="my-4" width="60" height="40" viewBox="0 0 60 40" fill="none">
                <path 
                  d="M30 0 L30 30 M25 25 L30 30 L35 25" 
                  stroke="#6b73ff" 
                  strokeWidth="2.5" 
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              
              <p className="text-xs italic mb-4" style={{color: '#1f2630', opacity: 0.5}}>
                proyecto de
              </p>
            </div>

            {/* Nivel 3: Lu·di·co */}
            <div className="flex flex-col items-center">
              <a href="https://rociofatas.info/ludico" target="_blank">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex flex-col items-center gap-4">
                    <img 
                      src="/logos/ldcLogo.png" 
                      alt="Lu·di·co - Lugar Dinámico"
                      className="h-16 w-auto"
                    />
                    <div className="text-center">
                      <h3 className="text-xl font-bold mb-1" style={{color: '#1f2630'}}>
                        Lu·di·co
                      </h3>
                      <p className="text-sm" style={{color: '#1f2630', opacity: 0.7}}>
                        Lugar Dinámico
                      </p>
                      <p className="text-xs mt-2" style={{color: '#1f2630', opacity: 0.5}}>
                        Diseño estratégico y cultural · Rocío Fatás
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}