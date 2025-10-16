import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Map from './pages/Map'
import Discover from './pages/Discover'
import About from './pages/About'
import MuseumOfMonth from './pages/MuseumOfMonth'
import Exhibition from './pages/Exhibition'
import Constellation from './pages/Constellation'
import ConstellationPage from './pages/ConstellationPage'
import ArtworkPage from './pages/ArtworkPage'  // 👈 Nuevo
import AuthorPage from './pages/AuthorPage'    // 👈 Nuevo

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mapa" element={<Map />} />
        <Route path="/descubre" element={<Discover />} />
        <Route path="/acerca" element={<About />} />
        <Route path="/museo-del-mes" element={<MuseumOfMonth />} />
        <Route path="/exposicion/:id" element={<Exhibition />} />
        <Route path="/constelacion/renacimiento" element={<Constellation />} />
        <Route path="/constelaciones/:slug" element={<ConstellationPage />} />
        
        {/* 👇 Nuevas rutas */}
        <Route path="/obra/:slug" element={<ArtworkPage />} />
        <Route path="/autor/:slug" element={<AuthorPage />} />
      </Routes>
    </Router>
  )
}

export default App