export default function KeyIdeas({ title, ideas }) {
  if (!ideas || ideas.length === 0) return null

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-bold text-ink mb-8 text-center">
          {title || 'Ideas clave'}
        </h2>
        <div className="space-y-6">
          {ideas.map((idea, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              {idea.title && (
                <h3 className="text-xl font-bold text-ink mb-3">{idea.title}</h3>
              )}
              <p className="text-gray-700 leading-relaxed">{idea.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}