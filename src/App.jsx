import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar'
import Hero from "./Hero"
import { BrowserRouter } from "react-router-dom"
import Footer from  './Footer.jsx'



function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <>
        <Navbar/> 
        <Hero/>
      <Footer/>
     
        
      </>
    </BrowserRouter>
  )
}

export default App
