import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutMe } from './components/Aboutme';
import { Skills } from './components/Skills';
import { Project } from './components/Project';
import { Footer } from './components/Footer';
import { ContactForm } from './components/Contact';
import { Hobbies } from './components/Hobbies';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Hero />
    <AboutMe />
    <Project />
    <Skills />
    <Hobbies />
    <ContactForm />
    <Footer />
  </StrictMode>,
);