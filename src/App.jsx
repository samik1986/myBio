import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import ResearchGraph from './components/ResearchGraph/ResearchGraph';
import Experience from './components/Experience/Experience';
import ExperienceDetail from './components/Experience/ExperienceDetail';
import Projects from './components/Projects/Projects';
import ProjectDetail from './components/Projects/ProjectDetail';
import Publications from './components/Publications/Publications';
import PublicationDetail from './components/Publications/PublicationDetail';
import Education from './components/Education/Education';
import EducationDetail from './components/Education/EducationDetail';
import CareerTimeline from './components/CareerTimeline/CareerTimeline';
import GitHubStats from './components/GitHubStats/GitHubStats';
import GithubRepos from './components/GithubRepos/GithubRepos';
import GeminiAssistant from './components/GeminiAssistant/GeminiAssistant';
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
    <About />
    <ResearchGraph />
    <Skills />
    <Experience limit={2} />
    <Projects limit={2} />
    <GitHubStats />
    <Publications limit={2} />
    <Education limit={2} />
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
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/experience/:id" element={<ExperienceDetail />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/publication/:id" element={<PublicationDetail />} />
          <Route path="/education" element={<Education />} />
          <Route path="/education/:id" element={<EducationDetail />} />
          <Route path="/timeline" element={<CareerTimeline />} />
          <Route path="/github" element={<GithubRepos />} />
        </Routes>
      </main>
      <GeminiAssistant />
      <Footer />
    </div>
  );
}

export default App;
