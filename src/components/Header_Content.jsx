import React , { useState } from 'react'
import { Link } from 'react-router-dom'
import './Header_Content.css'


// Components
import { Button } from './Button'

function Header_Content() {
    const [isScorll , setisScorll] = useState(false);

    function CheckScroll() {
        const ScrollValue = document.documentElement.scrollTop;
        if(ScrollValue > 100) {
            setisScorll(true)
        }
        else {
            setisScorll(false)
        }
        
    }
  window.addEventListener('scroll' , CheckScroll);

  return (
    <header className='header-content'>
        {/* Navbar */}
        <nav className={isScorll ? "navbar-scroll" : "navbar"}>
            <div className={isScorll ? "nav-container-scroll" : "nav-container"}>
                <div className="logo">
                    <Link to="/"><img src="../../images/logo@2x.png" /></Link>
                </div>
                <div className="menu-link">
                    <ul>
                        <li className="nav-link">
                            <Link to="/features" className='link-info'>features</Link>
                        </li>

                        <li className="nav-link">
                            <Link to="/works" className='link-info'>works</Link>
                        </li>

                        <li className="nav-link">
                            <Link to="/our_team" className='link-info'>our team</Link>
                        </li>

                        <li className="nav-link">
                            <Link to="/testimonials" className='link-info'>testimonials</Link>
                        </li>

                        <li className="nav-link">
                            <Link to="/download" className='link-info'>download</Link>
                        </li>


                    </ul>
                </div>
            </div>
        </nav>

      
         
        <div className="banner-container">
                <div className="banner-info">
                    <h1>YOUR FAVORITE ONE PAGE<br/> MULTI PURPOSE TEMPLATE</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna <br/>vel scelerisque nisl consectetur et.</p>

                    <Button buttonStyle="btn--primary" buttonSize="btn--large" children="FIND OUT MORE"/>
                       
                    
                </div>
        </div>
     


    </header>
  
  )
}

export default Header_Content