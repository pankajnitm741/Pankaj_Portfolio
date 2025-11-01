import { useState, useEffect } from 'react'
import { HiArrowUp } from 'react-icons/hi'

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    const heroSection = document.querySelector('#hero')
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: 'smooth' })
      // Dispatch custom event to update navbar active section
      window.dispatchEvent(new CustomEvent('activeSection', { detail: 'Home' }))
    }
  }

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-gradient-to-r from-teal-400 to-blue-500 hover:from-teal-300 hover:to-blue-400 text-white rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 group backdrop-blur-sm border border-white/20"
          aria-label="Scroll to top"
        >
          <HiArrowUp className="w-6 h-6 group-hover:animate-bounce" />
        </button>
      )}
    </>
  )
}
