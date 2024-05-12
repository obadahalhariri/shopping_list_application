import './ListItemDetial.css'
import React from 'react'
import { PieChart, Pie, Cell, Tooltip } from 'recharts';
import { SecondaryButton } from '../index'

const ListItemDetial = (props) => {
    const solvedCount = props.items.filter(item => item.solved).length;
    const unsolvedCount = props.items.length - solvedCount;

    const data = [
        { name: 'Solved', value: solvedCount },
        { name: 'Unsolved', value: unsolvedCount }
    ];

    const colors = ['#0088FE', '#FF8042'];

    return (
        <div className='list-item-detail'>
            <ul className='external-ul'>
                <li><h4>owner:</h4><span>{props.owner}</span></li>
                <li><h4>status:</h4><span>{props.archived}</span></li>
                <li>
                    <ul className='inner-ul'>
                        <li><SecondaryButton>change list's name</SecondaryButton></li>
                        <li><SecondaryButton>delete the list</SecondaryButton></li>
                        <li><SecondaryButton>remove a member</SecondaryButton></li>
                        <li><SecondaryButton>archive the list</SecondaryButton></li>
                    </ul>
                </li>
            </ul>
            <ul className='external-ul'>
                <li><h4>Members:</h4></li>
                <span>{props.members}</span>
                <li>
                    <ul className='inner-ul'>
                        <li><SecondaryButton>leave the list</SecondaryButton></li>
                        <li><SecondaryButton>invite users</SecondaryButton></li>
                    </ul>
                </li>
            </ul>
            <ul className='external-ul'>
                <li><h4>Items:</h4></li>
                <li>
                    <ul className='inner-ul'>
                        {props.items.map(item => (
                            <li className='items-li' key={item.id}> <span>{item.name} : {item.solved ? 'Solved' : 'Not Solved'}</span>
                                <ul className='inner-ul'>
                                    <li><SecondaryButton>remove</SecondaryButton></li>
                                    <li><SecondaryButton>resolve</SecondaryButton></li>
                                </ul>
                            </li>
                        ))}
                    </ul>
                </li>
                <li><SecondaryButton>add new item</SecondaryButton></li>
            </ul>
            <ul className='external-ul'>
                <li><h4>Items Status:</h4></li>
                <li className='list-item-chart'>
                    <PieChart width={200} height={200}>
                        <Pie dataKey="value" data={data} cx="50%" cy="50%" innerRadius={40} outerRadius={80} fill="#8884d8" paddingAngle={5} label>
                            {
                                data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                                ))
                            }
                        </Pie>
                        <Tooltip />
                    </PieChart>
                </li>
            </ul>
        </div >
    )
}

export default ListItemDetial