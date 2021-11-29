import React, { useState } from 'react'

import './AddIssue.css';

const AddIssue = ({ refreshBugs }) => {
    const [description, setDescription] = useState('')
    const [dev, setDev] = useState('')
    const [priority, setPriority] = useState('')

    const resetForm = () => {
        setDescription('')
        setDev('')
        setPriority('')
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const body = { description, dev, priority }
        try {
            const res = await fetch('/.netlify/functions/createBug', {
                method: 'POST',
                body: JSON.stringify(body),
            })
            resetForm();
            refreshBugs();
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className='add-issue'>
            <form onSubmit={handleSubmit}>
                <label htmlFor="description">
                    Description
                </label>
                <input
                    type="text"
                    name="description"
                    id="inputID"
                    placeholder="Bug Description..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />

                <label htmlFor="dev">
                    Assign To
                </label>
                <input
                    type="text"
                    name="dev"
                    id="inputID"
                    placeholder="Assign a Dev to the Bug"
                    value={dev}
                    onChange={(e) => setDev(e.target.value)}
                />

                <label htmlFor="priority">
                    Priority
                </label>
                <input
                    type="text"
                    name="priority"
                    id="inputID"
                    placeholder="Set a Priority"
                    value={priority}
                    onChange={(e) => setPriority(e.target.value)}
                />

                <button type='submit'>Add</button>
            </form>
        </div>
    )
}

export default AddIssue

