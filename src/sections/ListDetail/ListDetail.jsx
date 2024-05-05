import './ListDetail.css'
import React from 'react'
import { SectionWrapper, SectionHeader, ListItemDetial, PrimaryButton } from '../../components/index'
import Database from '../../Data/Database'

const ListDetail = () => {
    const shoppingLists = Database.shoppingLists;

    const renderLists = () => {
        return shoppingLists.map(list => {
            const owner = Database.users.find(user => user.id === list.owner)?.username;
            const members = list.invitedMembers.map(memberId => {
                const member = Database.users.find(user => user.id === memberId)?.username;
                return member;
            });
            const archived = list.archived ? "Archived" : "Not Archived";
            return <ListItemDetial key={list.id} title={list.title} owner={owner} members={members} archived={archived} />
        });
    };

    return (
        <SectionWrapper>
            <SectionHeader>
                Shopping list <em>Title</em>
            </SectionHeader>
            <div className='list-detail'>
                {renderLists()}
            </div>
            <div className='list-button'>
                <PrimaryButton>Button</PrimaryButton>
                <PrimaryButton>Button</PrimaryButton>
                <PrimaryButton>Button</PrimaryButton>
            </div>
        </SectionWrapper>
    )
}

export default ListDetail