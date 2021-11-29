import React from 'react'

import './BugCard.css'

const BugCard = ({ bug, refreshBugs }) => {
    const resolveBug = async () => {
        bug.resolved = !bug.resolved;
        try {
            await fetch('/.netlify/functions/updateBug', {
                method: 'PUT',
                body: JSON.stringify(bug),
            })
            refreshBugs();
        } catch (error) {
            console.error('Bug Card resolveBug Error', error)
        }
    }

    const deleteBug = async () => {
        const id = bug._id
        try {
            await fetch('/.netlify/functions/deleteBug', {
                method: 'DELETE',
                body: JSON.stringify({ id }),
            })
            refreshBugs();
        } catch (error) {
            console.error('Bug Card deleteBug Error', error)
        }
    }

    return (
        <div className="bug-card">
            <div className="indv-issue">
                <p>Assigned<span>{bug.dev}</span></p>
                <p>Priority<span>{bug.priority}</span></p>
                <p>Description</p>
                <p class="description-text">
                    {bug.description}
                </p>

                <div class="card-footer">
                    <button className="resolved" onClick={resolveBug}>
                        Resolved
                    </button>
                    <button className="delete" onClick={deleteBug}>
                        Delete
                    </button>
                </div>
            </div>
        </div>
    )
}

export default BugCard
