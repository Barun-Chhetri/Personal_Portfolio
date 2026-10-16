import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { CitySkyline3D } from './components/Canvas3D/CitySkyline3D';
import { WebCursor } from './components/Canvas3D/WebCursor';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { WebPlayground } from './components/WebPlayground';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Certificates } from './components/Certificates';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export function App() {
  const [motionEnabled, setMotionEnabled] = useState(true);

  const toggleMotion = () => {
    setMotionEnabled((prev) => !prev);
  };

  return (
    <div className="relative min-h-screen bg-[#030712] text-slate-100 selection:bg-red-600 selection:text-white">
      {/* Three.js 3D City Skyline Canvas in Background */}
      {motionEnabled && <CitySkyline3D />}

      {/* Spider-Man Web Cursor Overlay */}
      <WebCursor enabled={motionEnabled} />

      {/* Top HUD Navigation Bar */}
      <Navbar motionEnabled={motionEnabled} onToggleMotion={toggleMotion} />

      {/* Main Content Sections */}
      <main className="relative z-10 flex flex-col">
        <Hero />
        <About />
        <WebPlayground />
        <Skills />
        <Projects />
        <Certificates />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
