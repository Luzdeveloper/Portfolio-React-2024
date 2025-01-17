import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Header } from './Header'
import { Hero } from './Hero'
import { Aboutme } from './Aboutme'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Hero />
    <Aboutme />
  </StrictMode>,
)
