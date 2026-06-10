import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Publications from './components/Publications/Publications';
import PublicationDetail from './components/Publications/PublicationDetail';
import Footer from './components/Footer/Footer';
import './App.css';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const HomePage = () => (
  <>
    <Hero />
    <Experience />
    <Projects />
    <Publications />
  </>
);

function App() {
  return (
    <div className="app-container">
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/publication/:id" element={<PublicationDetail />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
