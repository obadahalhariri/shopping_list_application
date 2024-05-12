import './ListDetail.css'
import React from 'react'
import { useParams } from 'react-router-dom';
import { SectionWrapper, SectionHeader, ListItemDetial } from '../../components/index'
import Database from '../../Data/Database'

const ListDetail = () => {
    const shoppingLists = Database.shoppingLists;
    const { id } = useParams();
    const list = shoppingLists.find(list => list.id === parseInt(id));
    if (!list) {
        return <div>List not found</div>;
    }
    const renderLists = () => {
        const owner = Database.users.find(user => user.id === list.owner)?.username;
        const members = list.invitedMembers.map(memberId => {
            const member = Database.users.find(user => user.id === memberId)?.username;
            return <li key={memberId}>{member}</li>;
        });
        const archived = list.archived ? "Archived" : "Not Archived";
        return <ListItemDetial key={list.id} title={list.title} owner={owner} members={members} archived={archived} items={list.items} />
    };

    return (
        <SectionWrapper>
            <SectionHeader>Shopping list <em>{list.title}</em></SectionHeader>
            <div className='list-detail-main'>
                {renderLists()}
            </div>
        </SectionWrapper>
    )
}

export default ListDetail