import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <footer>
        <div className="bg-top">
                <div className="container-top">

                    <div className="location-info">
                        <h4>Location</h4>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia, dolorem quam saepe odit maxime aliquid.</p>
                    </div>

                    <div className="share-info">
                        <h4>sharewith love</h4>
                        <div className="share-logo">
                            <a href="#" className='icon'><i class="fa fa-facebook"></i></a>
                            <a href="#" className='icon'><i class="fa fa-twitter"></i></a>
                            <a href="#" className='icon'><i class="fa fa-linkedin"></i></a>
                   

                        </div>
            
                    </div>

                    <div className="about">
                        <h4>about activebox</h4>
                        <div className="about-text">
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus sint cum animi in dolores, architecto ea ratione optio eligendi a!
                            </p>
                        </div>
                      
                    </div>

                </div>
         

        

        </div>

        <div className="bg-buttom">
            <div className="container-buttom">
            
                <h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse quod consequuntur culpa, saepe sed praesentium.</h2>
        
            </div>
        </div>

        
    </footer>
  )
}

export default Footer