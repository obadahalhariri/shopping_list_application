import './SectionWrapper.css'
import React from 'react'

const SectionWrapper = (props) => {
    return (
        <div className='section-wrapper'>{props.children}</div>
    )
}

export default SectionWrapper