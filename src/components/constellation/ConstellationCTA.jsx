import { Sparkles, Map } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function ConstellationCTA({ gradient }) {
  // Convertir las clases de Tailwind a gradiente CSS real
  const getGradientStyle = (gradientClasses) => {
    if (!gradientClasses) {
      return 'linear-gradient(to right, #2563eb, #9333ea)'
    }
    
    // Mapeo de colores Tailwind a hex
    const colorMap = {
      'amber-500': '#f59e0b',
      'orange-500': '#f97316',
      'red-600': '#dc2626',
      'yellow-600': '#ca8a04',
      'amber-700': '#b45309',
      'orange-800': '#9a3412',
      'purple-600': '#9333ea',
      'pink-600': '#db2777',
      'blue-600': '#2563eb',
      'green-500': '#22c55e',
      'yellow-500': '#eab308'
    }
    
    // Extraer colores de la clase gradient
    const colors = gradientClasses.match(/(from|via|to)-(\w+-\d+)/g) || []
    const gradientColors = colors.map(color => {
      const colorName = color.replace(/^(from|via|to)-/, '')
      return colorMap[colorName] || '#2563eb'
    })
    
    return `linear-gradient(to right, ${gradientColors.join(', ')})`
  }

  return (
    <section 
      style={{
        width: '100%',
        padding: '5rem 1rem',
        background: getGradientStyle(gradient)
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem' }}>
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          textAlign: 'center',
          gap: '2rem'
        }}>
          
          <Sparkles 
            size={64} 
            style={{ color: 'white', opacity: 0.9 }}
          />
          
          <h2 style={{ 
            fontSize: 'clamp(2rem, 5vw, 2.5rem)', 
            fontWeight: 'bold', 
            color: 'white',
            margin: 0
          }}>
            Continúa explorando
          </h2>
          
          <p style={{ 
            fontSize: 'clamp(1rem, 3vw, 1.25rem)', 
            color: 'white', 
            opacity: 0.9, 
            maxWidth: '42rem',
            margin: 0
          }}>
            Descubre más constelaciones culturales o explora el atlas completo de museos
          </p>
          
          <div style={{ 
            display: 'flex', 
            gap: '1rem', 
            flexWrap: 'wrap', 
            justifyContent: 'center',
            marginTop: '1rem'
          }}>
            <Link 
              to="/descubre"
              style={{ 
                padding: '1rem 2rem', 
                backgroundColor: 'white', 
                color: '#1f2937', 
                borderRadius: '9999px', 
                fontWeight: '600',
                textDecoration: 'none',
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.2s'
              }}
              onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
            >
              Más constelaciones
            </Link>
            
            <Link 
              to="/mapa"
              style={{ 
                padding: '1rem 2rem', 
                backgroundColor: 'rgba(255, 255, 255, 0.2)', 
                color: 'white', 
                borderRadius: '9999px', 
                fontWeight: '600',
                textDecoration: 'none',
                border: '2px solid white',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                backdropFilter: 'blur(8px)',
                transition: 'transform 0.2s'
              }}
              onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
            >
              <Map size={20} />
              Ver en el mapa
            </Link>
          </div>
          
        </div>
      </div>
    </section>
  )
}