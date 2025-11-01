import { useState, useEffect } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'
import styles from './Navbar.module.css'

const navItems = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Collaboration', href: '#collaboration' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('Home')

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setIsScrolled(scrollY > 50)

      // Get all sections and find which one is currently in view
      const sections = [
        { id: 'hero', label: 'Home', element: document.querySelector('#hero') },
        { id: 'about', label: 'About', element: document.querySelector('#about') },
        { id: 'skills', label: 'Skills', element: document.querySelector('#skills') },
        { id: 'projects', label: 'Projects', element: document.querySelector('#projects') },
        { id: 'experience', label: 'Experience', element: document.querySelector('#experience') },
        { id: 'collaboration', label: 'Collaboration', element: document.querySelector('#collaboration') },
        { id: 'testimonials', label: 'Testimonials', element: document.querySelector('#testimonials') },
        { id: 'contact', label: 'Contact', element: document.querySelector('#contact') }
      ].filter(section => section.element)

      // Find the section that's currently most visible
      let currentSection = 'Home'
      
      for (const section of sections) {
        const rect = section.element!.getBoundingClientRect()
        const sectionTop = rect.top
        const sectionHeight = rect.height
        
        // Check if section is in viewport (with some offset for navbar height)
        if (sectionTop <= 100 && sectionTop + sectionHeight > 100) {
          currentSection = section.label
          break
        }
      }
      
      setActiveSection(currentSection)
    }

    const handleActiveSectionChange = (event: CustomEvent) => {
      setActiveSection(event.detail)
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('activeSection', handleActiveSectionChange as EventListener)
    
    // Initial check on mount
    handleScroll()
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('activeSection', handleActiveSectionChange as EventListener)
    }
  }, [])

  const scrollToSection = (href: string, label: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(label)
    }
    setIsOpen(false)
  }

  return (
    <nav 
      className={`${styles.navbar} ${isScrolled ? styles.scrolled : styles.transparent}`}
    >
      <div className={styles.container}>
        <div className={styles.header}>
          {/* Logo */}
          <div 
            onClick={() => scrollToSection('#hero', 'Home')}
            className={styles.brand}
          >
            <span className={styles.brandText}>
              Pankaj Goyal
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className={styles.desktopNav}>
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href, item.label)}
                className={`${styles.navBtn} ${
                  activeSection === item.label ? styles.active : styles.inactive
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={styles.mobileMenuBtn}
          >
            {isOpen ? (
              <HiX className={styles.mobileMenuIcon} />
            ) : (
              <HiMenu className={styles.mobileMenuIcon} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className={styles.mobileNav}>
            <div className={styles.mobileNavContainer}>
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href, item.label)}
                  className={`${styles.mobileNavBtn} ${
                    activeSection === item.label ? styles.active : styles.inactive
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
