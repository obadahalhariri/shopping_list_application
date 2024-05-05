import './Container.css'
import React from 'react'

const Container = (props) => {
    return (
        <div className='container container-main'>
            {props.children}
        </div>
    )
}

export default Container