import './Lists.css'
import React, { useState } from 'react'
import { ListItem, SectionWrapper, SectionHeader, PrimaryButton } from '../../components/index'
import Database from '../../Data/Database'

const Lists = () => {
    const [showArchived, setShowArchived] = useState(false);
    const [shoppingLists, setShoppingLists] = useState(Database.shoppingLists);

    const toggleShowArchived = () => {
        setShowArchived(!showArchived);
        if (!showArchived) {
            const notArchivedLists = shoppingLists.filter(list => !list.archived);
            setShoppingLists(notArchivedLists);
        } else {
            setShoppingLists(Database.shoppingLists);
        }
    };

    const renderLists = () => {
        return shoppingLists.map(list => {
            const owner = Database.users.find(user => user.id === list.owner)?.username;
            const archived = list.archived ? "Archived" : "Not Archived";
            return <ListItem key={list.id} title={list.title} owner={owner} archived={archived} />
        });
    };

    return (
        <SectionWrapper>
            <SectionHeader>
                All Shopping <em>Lists</em>
            </SectionHeader>

            <div className='filter-main'>
                <label>
                    <input type="checkbox" checked={!showArchived} onChange={toggleShowArchived} />
                    <span> Show Archived Lists</span>
                </label>
            </div>

            <div className='lists-items'>
                {renderLists()}
            </div>

            <div className='list-create-btn'>
                <PrimaryButton>Create New List</PrimaryButton>
            </div>
        </SectionWrapper>
    )
}

export default Lists