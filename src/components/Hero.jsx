export default function Hero({ 
  image, 
  title, 
  subtitle, 
  description,
  ctaText, 
  ctaLink,
  gradient = 'from-blue-500 to-teal-500',
  children 
}) {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      {image && (
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-80`}></div>
        </div>
      )}
      {!image && (
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient}`}></div>
      )}
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="animate-fadeIn">
          {subtitle && (
            <p className="text-sm sm:text-base uppercase tracking-wider mb-4 opacity-90">
              {subtitle}
            </p>
          )}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
            {title}
          </h1>
          {description && (
            <p className="text-lg sm:text-xl max-w-3xl mx-auto mb-8 opacity-90">
              {description}
            </p>
          )}
          
          {children || (ctaText && ctaLink && (
            <a 
              href={ctaLink}
              className="inline-block px-8 py-4 bg-white text-gray-900 rounded-full font-semibold hover:scale-105 transition-transform shadow-xl"
            >
              {ctaText}
            </a>
          ))}
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  )
}