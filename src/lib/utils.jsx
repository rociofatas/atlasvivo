export const colors = {
  bg: '#f5f4f1',
  iris: '#6b73ff',
  mint: '#00b894',
  lemon: '#ffd93d',
  ink: '#1f2630'
}

export const fetchMuseums = async () => {
  const response = await fetch('/data/museums.json')
  return response.json()
}

export const filterMuseums = (museums, filters) => {
  return museums.filter(museum => {
    const matchesSearch = !filters.search || 
      museum.name.toLowerCase().includes(filters.search.toLowerCase()) ||
      museum.city.toLowerCase().includes(filters.search.toLowerCase()) ||
      museum.country.toLowerCase().includes(filters.search.toLowerCase())
    
    const matchesType = !filters.types || filters.types.length === 0 || 
      museum.type.some(t => filters.types.includes(t))
    
    const matchesAtmosphere = !filters.atmospheres || filters.atmospheres.length === 0 || 
      museum.atmosphere.some(a => filters.atmospheres.includes(a))
    
    const matchesRegion = !filters.region || museum.region === filters.region
    
    return matchesSearch && matchesType && matchesAtmosphere && matchesRegion
  })
}