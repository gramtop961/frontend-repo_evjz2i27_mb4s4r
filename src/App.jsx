import React from 'react';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import HowItWorksSection from './components/HowItWorksSection';
import FooterSection from './components/FooterSection';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 antialiased">
      <header className="sticky top-0 z-20 w-full border-b border-gray-100 bg-white/70 backdrop-blur">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-md bg-gradient-to-br from-violet-600 to-blue-500" />
            <span className="text-sm font-semibold tracking-tight">Lynk AI</span>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-gray-600 sm:flex">
            <a href="#features" className="hover:text-gray-900">Features</a>
            <a href="#how" className="hover:text-gray-900">How it works</a>
            <a href="#pricing" className="hover:text-gray-900">Pricing</a>
          </nav>
          <div className="hidden sm:block">
            <a href="#pricing" className="rounded-lg bg-gray-900 px-3 py-1.5 text-sm font-medium text-white hover:bg-gray-800">Get Started</a>
          </div>
        </div>
      </header>

      <main>
        <HeroSection />
        <section id="features">
          <FeaturesSection />
        </section>
        <section id="how">
          <HowItWorksSection />
        </section>
        <FooterSection />
      </main>
    </div>
  );
}

export default App;
