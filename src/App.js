import "./App.css";
import About from "./components/About";
import Contact from "./pages/Contact";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import HeroSection from './components/HeroSection';
import Faculty from "./pages/Faculty";
import AimAndObjective from "./pages/AimAndObjective";
import Event from "./pages/Event";
import HomeButton from "./components/HomeButton";
import Footer from './components/Footer';
import Guest from './pages/Guest'; // Sahi folder aur file import
import Aac from "./pages/Aac";

function App() {
  return (
    <>
      {/* Top Banner section */}
      <HeroSection />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Faculty" element={<Faculty />} />
        
        {/* Yeh line ab TabNavBar ke link ke sath perfect match karegi */}
        <Route path="/Guest" element={<Guest />} />
        
        <Route path="/AimAndObjective" element={<AimAndObjective />} />
        <Route path="/Event" element={<Event />} />
        <Route path="/Aac" element={<Aac />} />
      </Routes>

      {/* Bottom Footer section */}
      <HomeButton />
      <Footer />
    </>
  );
}

export default App;