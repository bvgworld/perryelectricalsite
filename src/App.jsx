import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import ServiceHome from './pages/ServiceHome'
import CommercialConstruction from './pages/CommercialConstruction'
import ResidentialConstruction from './pages/ResidentialConstruction'
import Projects from './pages/Projects'
import Employment from './pages/Employment'
import Services from './pages/Services'
import TermsAndConditions from './pages/TermsAndConditions'
import AboutUs from './pages/AboutUs'
import Contact from './pages/Contact'
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/service" element={<ServiceHome />} />
            <Route path="/commercial-construction" element={<CommercialConstruction />} />
            <Route path="/residential-construction" element={<ResidentialConstruction />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/employment" element={<Employment />} />
            <Route path="/services" element={<Services />} />
            <Route path="/terms" element={<TermsAndConditions />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
