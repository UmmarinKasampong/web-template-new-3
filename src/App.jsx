import { useState } from 'react'
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom'
import Header_Content from './components/Header_Content'
import Home from './components/pages/Home'
import './App.css'


// Components
import Navbar from './components/Header_Content'

function App() {


  return (
    <Router>
      <Header_Content/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/feature' element={""}/>
          <Route path='/works' element={""}/>
          <Route path='/our_team' element={""}/>
          <Route path='/testmonial' element={""}/>
          <Route path='/download' element={""}/>
      </Routes>
    </Router>
  )
}

export default App
