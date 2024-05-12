import './NewListForm.css'
import React, { useState } from 'react'

const NewListForm = ({ onSubmit }) => {
    const [title, setTitle] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(title);
        setTitle('');
    };

    return (
        <form className='create-list-form-main' onSubmit={handleSubmit}>
            <div>
                <label>title:</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
        </form>
    )
}

export default NewListForm
