import './ListItemDetial.css'
import React from 'react'
import { SecondaryButton } from '../index'

const ListItemDetial = (props) => {
    return (
        <div className='list-item-detail'>
            <ul>
                <li><h4>owner: <span>{props.owner}</span></h4></li>
                <li><h4>status: <span>{props.archived}</span></h4></li>
                <li>
                    <h4>Members:
                        {props.members && props.members.map((member, index) => (
                            <span key={index}> {member}, </span>
                        ))}
                    </h4>
                </li>
            </ul>
            <ul className='list-item-button'>
                <li><SecondaryButton>button</SecondaryButton></li>
                <li><SecondaryButton>button</SecondaryButton></li>
                <li><SecondaryButton>button</SecondaryButton></li>
                <li><SecondaryButton>button</SecondaryButton></li>
                <li><SecondaryButton>button</SecondaryButton></li>
            </ul>
        </div >
    )
}

export default ListItemDetial