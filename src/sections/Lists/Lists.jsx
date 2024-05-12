import './Lists.css'
import React, { useState } from 'react'
import { ListItem, SectionWrapper, SectionHeader, PrimaryButton, Modal } from '../../components/index'
import { NewListForm } from '../index'
import Database from '../../Data/Database'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Lists = () => {
    const [showArchived, setShowArchived] = useState(false);
    const [shoppingLists, setShoppingLists] = useState(Database.shoppingLists);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleShowArchived = () => {
        setShowArchived(!showArchived);
        if (!showArchived) {
            const notArchivedLists = shoppingLists.filter(list => !list.archived);
            setShoppingLists(notArchivedLists);
        } else {
            setShoppingLists(Database.shoppingLists);
        }
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const renderLists = () => {
        return shoppingLists.map(list => {
            const owner = Database.users.find(user => user.id === list.owner)?.username;
            const archived = list.archived ? "Archived" : "Not Archived";
            return <ListItem key={list.id} id={list.id} title={list.title} owner={owner} archived={archived} />
        });
    };

    // Calculate item counts for each shopping list
    const data = shoppingLists.map(list => ({
        title: list.title,
        itemCount: list.items.length
    }));

    return (
        <>
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
                    <PrimaryButton onClick={openModal}>Create New List</PrimaryButton>
                </div>
                <div>
                    <Modal isOpen={isModalOpen} onClose={closeModal} onSubmit={closeModal} submitBtnName="create">
                        <NewListForm onSubmit={closeModal} />
                    </Modal>
                </div>
            </SectionWrapper>

            <SectionWrapper>
                <SectionHeader>
                    Shopping Lists Overview
                </SectionHeader>
                <div style={{ width: '100%', height: 300 }}>
                    <BarChart
                        width={600}
                        height={300}
                        data={data}
                        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="title" type="category" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="itemCount" fill="#8884d8" />
                    </BarChart>
                </div>
            </SectionWrapper>
        </>
    )
}

export default Lists;
