import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { Header } from '../src/components/Header';
import { Hero } from '../src/components/Hero';
import { AboutMe } from '../src/components/Aboutme';
import { Skills } from '../src/components/Skills';
import { Project } from '../src/components/Project';
import { Footer } from './components/Footer';
import { ContactForm } from '../src/components/Contact';
import { Hobbies } from '../src/components/Hobbies';

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