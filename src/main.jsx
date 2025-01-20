import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import{ Header } from './components/Header'
import { Hero } from './components/Hero'
import { Aboutme } from './components/Aboutme'
import { Skills } from './components/skills'
import { Project } from './components/Project'
import { ContactUs } from './components/Contact'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Hero />
    <Aboutme />
    <Skills />
    <Project />
    <ContactUs />
  </StrictMode>,
)
