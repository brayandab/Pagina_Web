import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [isDark, setIsDark] = useState(false)

  // Verificar preferencia guardada al cargar
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true)
    }
  }, [])

  // Actualizar el tema cuando cambie
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [isDark])

  const toggleDarkMode = () => {
    setIsDark(!isDark)
  }

  return (
    <div className={isDark ? 'dark' : ''}>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
        <Header isDark={isDark} toggleDarkMode={toggleDarkMode} />
        <main>
          <section id="inicio">
            <Hero />
          </section>
          <section id="proyectos">
            <Projects />
          </section>
          <section id="sobre-mi">
            <About />
          </section>
          <section id="contacto">
            <Contact />
          </section>
        </main>
        <Footer />
      </div>
    </div>
  )
}
