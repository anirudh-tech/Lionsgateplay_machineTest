import { Navigate, Route, Routes } from 'react-router-dom'
import DesktopNavbar from './components/Navbar/DesktopNavbar'
import Home from './pages/Home'
import Shows from './pages/Shows'
import Movies from './pages/Movies'
import MobileNavbar from './components/Navbar/MobileNavbar'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
      <DesktopNavbar />
      <MobileNavbar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/shows" element={<Shows />} />
        <Route path="/movies" element={<Movies />} />
        {/* <Route path="/home" element={<Home/>} /> */}
      </Routes>
      <Footer />
    </>
  )
}

export default App
