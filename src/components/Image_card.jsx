import React from 'react'
import './Image_card.css'

const Image_card = ({Image}) => {
  return (
    <div className="project-item">
        <img src={Image} />
        <div className="overy">
            <div className="project-info">
                <h3>project name</h3>
                <p>User Interface Design</p>
            </div>
           
        </div>
    </div>
  )
}

export default Image_card