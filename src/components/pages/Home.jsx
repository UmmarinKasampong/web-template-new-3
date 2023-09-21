import React from 'react'



// Components
import Howgood from '../Howgood'
import Project from '../Project'
import Person_info from '../Person_info'
import BannerSlice from '../BannerSlice'
import Footer from '../Footer'
function Home() {
  return (
    <>
        <Howgood/>
        <Project/>
        <Person_info/>
        <BannerSlice/>
        <Footer/>
    </>
  )
}

export default Home