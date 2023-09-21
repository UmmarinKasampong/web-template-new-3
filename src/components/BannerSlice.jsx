import React , { useEffect } from 'react'
import './BannerSlice.css'


// Components
import { Button } from './Button'


function BannerSlice() {

  

  function CurrenSlide(index) {
    const Slide = document.getElementsByClassName("slice-text");
    const dot = document.getElementsByClassName("dots");
    for(let i = 0 ; i < Slide.length ; i++){
      Slide[i].style.display = 'none';
    }

    for(let i=0 ; i < dot.length ; i++) {
      // if(dot[i].search("active")){
      //   dot[i].classList = dot[i].classList.replace(" active" , " ")
      // }
      let text = dot[i].className
      if(text.includes("active")) {
        dot[i].classList = dot[i].className.replace(" active" , " ")
      }
    
    }
   
    Slide[index-1].style.display = 'block'
    dot[index-1].className += " active"
    // Slide[index-1].style.display = "block"
    // dot[index-1].className += " active"
    
    // Slide[index-1].style.display = "block";
    // dots[index-1].className += " active";



  }


  useEffect(()=> {
      CurrenSlide(1)
  });






  return (
    <section className='Banner'>
      <div className="BannerSlice-container">
        <div className="Banner-img">
            <img src="https://images.unsplash.com/photo-1682687220063-4742bd7fd538?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60" />
        </div>
        <div className="Banner-text">
          <div className="text-container">
              <div className="slice-info">

                <div className="slice-text">
                    <h1>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui laudantium eaque unde. Deleniti, reprehenderit ratione1.
                        
                    </h1>
                    <span>
                      Lorem ipsum dolor sit amet.
                    </span>
                </div>

                <div className="slice-text">
                    <h1>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui laudantium eaque unde. Deleniti, reprehenderit ratione2.
                        
                    </h1>
                    <span>
                      Lorem ipsum dolor sit amet.
                    </span>
                </div>

                <div className="slice-text">
                    <h1>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui laudantium eaque unde. Deleniti, reprehenderit ratione3.
                        
                    </h1>
                    <span>
                      Lorem ipsum dolor sit amet.
                    </span>
                </div> 
              </div>
              
              <div className="btn-bubble">
                  <span className="dots" onClick={() =>  CurrenSlide(1)}></span>
                  <span className="dots" onClick={() =>  CurrenSlide(2)}></span>
                  <span className="dots" onClick={() =>  CurrenSlide(3)}></span>
              </div>

          </div>
          
        </div>

      </div>


      <div className="download-page">
        <div className="download-container">
          <div className="download-title">
            <h1>Are You Ready to Start? Download Now For Free!</h1>
            <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</span>
          </div>

        
          <Button buttonStyle="btn--primary" buttonSize="btn--medium" children="DOWNLOAD HERE"/>

        </div>
      </div>
    </section>
  )
}

export default BannerSlice