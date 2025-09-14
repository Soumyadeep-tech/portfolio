import { useState, useEffect } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Timeline from "./components/Timeline";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Terminal from "./components/Terminal";
import Chatbot from "./components/Chatbot";
import Footer from "./components/Footer";
import ThemeToggle from "./components/ThemeToggle";
import RealTimeClock from "./components/RealTimeClock";
import ParticleBackground from "./components/ParticleBackground";
import AOS from "aos";
import "aos/dist/aos.css";
import "./index.css";

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={`${isDark ? "dark" : ""} transition-all duration-300`}>
      <div className="bg-black text-white dark:bg-white dark:text-black relative">
        <ParticleBackground />
        <ThemeToggle toggleTheme={toggleTheme} />
        <RealTimeClock />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Timeline />
        <Certificates />
        <Contact />
        <Terminal />
        <Footer />
        <Chatbot />
      </div>
    </div>
  );
}

export default App;
