import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './components/layouts/Header'
import Footer from './components/layouts/Footer'
import HomePage from './pages/Home'
import AboutPage from './pages/About'
import { Routes, Route, useLocation } from "react-router-dom";

// Corrected Imports
import ScrollToTopButton from "./components/layouts/Scrolltotop";
import FloatingSidePanel from "./components/layouts/Floatingsidepanel";
import ServicePage from './pages/Services'
import GalleryPage from './pages/Gallery'
import ContactPage from './pages/Contact'


// 1. Inline Scroll To Top Router Utility (No extra file or import needed!)
function ScrollToTopOnNavigate() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    {/* Listens to page changes and scrolls the screen to 0, 0 */}
      <ScrollToTopOnNavigate />

    <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/services' element={<ServicePage />} />
        <Route path='/gallery' element={<GalleryPage />} />
        <Route path='/contact' element={<ContactPage />} />
      </Routes>
    <Footer />

    <FloatingSidePanel />
    <ScrollToTopButton />
    </>
  )
}

export default App
