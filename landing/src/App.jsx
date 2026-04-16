import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Philosophy from './components/Philosophy.jsx'
import WhyChooseUs from './components/WhyChooseUs.jsx'
import Services from './components/Services.jsx'
import ContactFooter from './components/ContactFooter.jsx'
import FloatingWhatsApp from './components/FloatingWhatsApp.jsx'
import './App.css'

function App() {
  return (
    <>
      <main className="w-full min-h-screen font-sans bg-gray-50">
        <Navbar />
        <Hero />
        <Philosophy />
        <WhyChooseUs />
        <Services />
        <ContactFooter />
      </main>
      <FloatingWhatsApp />
    </>
  )
}

export default App