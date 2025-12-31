import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Locked from './pages/Locked'
import Personal from './pages/Personal'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/locked" element={<Locked />} />
      <Route path="/personal" element={<Personal />} />
    </Routes>
  )
}

export default App
