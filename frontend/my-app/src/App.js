import React from 'react'
import NavBar from './components/NavBar/NavBar'
import Traductor from './components/Traductor/Traductor'
import Footer from './components/Footer/Footer'
import './App.css'
const App = () => {
  return (
    <div className='App'>
      <NavBar/>
      <Traductor/>
      <Footer/>
    </div>
  )
}

export default App

