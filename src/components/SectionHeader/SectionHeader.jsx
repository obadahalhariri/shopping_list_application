import './SectionHeader.css'
import React from 'react'

const SectionHeader = (props) => {
    return (
        <div className='section-header'>
            <h4>{props.children}</h4>
        </div>
    )
}

export default SectionHeader