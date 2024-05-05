import './ListItem.css'
import React from 'react'
import { SecondaryButton } from '../index'


const ListItem = (props) => {
    return (
        <div className='list-item'>
            <div className='item-wrapper'>
                <div className='list-item-content'>
                    <ul>
                        <li>
                            <h4 className='list-item-title'>{props.title}</h4>
                            <h6><span>Owner: {props.owner}</span></h6>
                            <h6><span>{props.archived}</span></h6>
                        </li>
                    </ul>
                </div>
                <div className='list-item-buttons'>
                    <ul>
                        <li><SecondaryButton>View Details</SecondaryButton></li>
                        <li><SecondaryButton>Delete</SecondaryButton></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ListItem