import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Philosophy from './components/Philosophy.jsx'
import WhyChooseUs from './components/WhyChooseUs.jsx'
import Services from './components/Services.jsx'
import ContactFooter from './components/ContactFooter.jsx'
import FloatingWhatsApp from './components/FloatingWhatsApp.jsx'
import Staff from './components/Staff.jsx'
import Appointment from './components/Appointment.jsx'
import './App.css'

function App() {
  return (
    <>
      <main className="w-full min-h-screen font-sans bg-gray-50">
        <Navbar />
        <Hero />
        <Philosophy />
        <WhyChooseUs />
        <Staff />
        <Services />
        <Appointment />
        <ContactFooter />
      </main>
      <FloatingWhatsApp />
    </>
  )
}

export default App