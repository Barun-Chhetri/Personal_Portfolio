import React, { useState, Suspense, lazy } from 'react';
import { Navbar } from './components/Navbar';
import { WebCursor } from './components/Canvas3D/WebCursor';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { WebPlayground } from './components/WebPlayground';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Certificates } from './components/Certificates';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

// Lazy-load the 3D City Skyline to optimize initial page load performance
const CitySkyline3D = lazy(() =>
  import('./components/Canvas3D/CitySkyline3D').then((module) => ({
    default: module.CitySkyline3D,
  }))
);

export function App() {
  const [motionEnabled, setMotionEnabled] = useState(true);

  const toggleMotion = () => {
    setMotionEnabled((prev) => !prev);
  };

  return (
    <div className="relative min-h-screen bg-[#030712] text-slate-100 selection:bg-red-600 selection:text-white">
      {/* Three.js 3D City Skyline Canvas in Background */}
      {motionEnabled && (
        <Suspense fallback={<div className="fixed inset-0 bg-[#030712] pointer-events-none" />}>
          <CitySkyline3D />
        </Suspense>
      )}

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
