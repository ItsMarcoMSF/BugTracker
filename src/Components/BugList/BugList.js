import React from 'react'

import BugCard from '../BugCard/BugCard'
import './BugList.css'

const BugList = ({ bugs, refreshBugs }) => {
    return (
        <div>
            <h2>Bugs</h2>
            {bugs &&
                bugs
                    .filter((bug) => !bug.resolved)
                    .map((bug) => (
                        <BugCard
                            key={bug._id}
                            bug={bug}
                            refreshBugs={refreshBugs}
                        />
                    ))
            }

            <h2>Resolved</h2>
            {bugs &&
                bugs
                    .filter((bug) => bug.resolved)
                    .map((bug) => (
                        <BugCard
                            key={bug._id}
                            bug={bug}
                            refreshBugs={refreshBugs}
                        />
                    ))
            }
        </div>
    )
}

export default BugList
