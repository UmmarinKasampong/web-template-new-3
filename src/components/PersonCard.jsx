import React from 'react'
import './PersonCard.css'
const PersonCard =({Image , Name , Position}) => {
  return (
    <div>
        <div className="Person-Card Card">
            <img src={Image}/>
            <div className="card-header">
                <h3>{Name}</h3>
                <span>{Position}</span>
            </div>

            <div className="card-info">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque quidem suscipit rerum minima rem expedita laboriosam provident perspiciatis! Obcaecati nesciunt animi natus commodi illo voluptas?</p>
            </div>

            <div className="card-footer">
                <a href="#" className='icon'><i class="fa fa-facebook"></i></a>
                <a href="#" className='icon'><i class="fa fa-twitter"></i></a>
                <a href="#" className='icon'><i class="fa fa-linkedin"></i></a>
                <a href="#" className='icon'><i class="fa fa-google-plus"></i></a>
           
           
            </div>
        </div>

    </div>
  )
}

export default PersonCard