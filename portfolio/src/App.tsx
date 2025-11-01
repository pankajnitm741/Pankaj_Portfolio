import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SocialSidebar from './components/SocialSidebar'
import ScrollToTop from './components/ScrollToTop'
import About from './components/About'
import Experience from './components/Experience'
import CollaborationProcess from './components/CollaborationProcess'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="min-h-screen w-full m-0 p-0">
      {/* Navigation */}
      <Navbar />
      
      {/* Social Sidebar */}
      <SocialSidebar />
      
      {/* Hero Section */}
      <Hero />

      {/* Other Sections */}
      <About />
      <Skills />
      <Projects />
      <Experience />
      <CollaborationProcess />
      <Testimonials />
      <Contact />
      
      {/* Footer */}
      <Footer />
      
      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  )
}

export default App
