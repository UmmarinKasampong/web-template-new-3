import React from 'react'
import { Link } from 'react-router-dom'
import './Button.css'


const STYLES = ['btn--primary', 'btn--outline'];

const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({ children,
    buttonStyle,
    buttonSize}) => {

        const ButtonStyleChiose = STYLES.includes(buttonStyle) ?  buttonStyle : STYLES[0];
        const ButtonSizeChiose = SIZES.includes(buttonSize) ?  buttonSize : SIZES[0];
  return (
    <div>
        <Link to='/' className='btn-link'>
            <button
            className={`btn ${ButtonStyleChiose} ${ButtonSizeChiose}`} type='button' >
                {children}
            </button>
        </Link>
    </div>
  )
}

