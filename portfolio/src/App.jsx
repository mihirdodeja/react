import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'
import LoadingScreen from './components/LoadingScreen'
import './App.css'

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time so user can see the cool animation
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <LoadingScreen />}
      <CustomCursor />
      <Navbar />
      <div className="app-container">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </div>
      <Footer />
    </>
  )
}

export default App
