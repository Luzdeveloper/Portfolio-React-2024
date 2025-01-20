import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import{ Header } from './components/Header'
import { Hero } from './components/Hero'
import { Aboutme } from './components/Aboutme'
import { Skills } from './components/skills'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Hero />
    <Aboutme />
    <Skills />
  </StrictMode>,
)
