export default function FactSheet({ facts }) {
  if (!facts || facts.length === 0) return null

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 shadow-md">
          <h2 className="text-2xl font-bold text-ink mb-6">Datos clave</h2>
          <dl className="grid md:grid-cols-2 gap-6">
            {facts.map((fact, index) => (
              <div key={index}>
                <dt className="text-sm text-gray-600 mb-1">{fact.label}</dt>
                <dd className="font-semibold text-ink text-lg">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}