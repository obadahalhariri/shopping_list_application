import './Buttons.css'
import React from 'react'
import { Link } from 'react-router-dom'

const PrimaryButton = ({ to, onClick, children }) => {
    return (
        <div className='button primary-btn'>
            <a href={to} onClick={onClick}>{children}</a>
        </div>
    )
}

const SecondaryButton = ({ to, children }) => {
    return (
        <div className='button secondary-btn'>
            <Link to={to}>{children}</Link>
        </div>
    )
}

export default PrimaryButton
export { SecondaryButton }