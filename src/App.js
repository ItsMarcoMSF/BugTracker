import React, { useState, useEffect } from 'react';
import AddIssue from './Components/AddIssue/AddIssue';
import CurrentIssue from './Components/CurrentIssue/CurrentIssue';
import BugList from './Components/BugList/BugList';
import './App.css';

function App() {
  const [addIssue, setAddIssue] = useState(true)
  const [bugs, setBugs] = useState([])

  const loadBugs = async () => {
    try {
      const res = await fetch('/.netlify/functions/getBugs')
      const bugs = await res.json()
      setBugs(bugs)
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    loadBugs();
  }, []);

  // return (
  //   <div className="App">
  //     <h1>Bug Tracker</h1>
  //     <div className="grey-card-container">
  //       {addIssue ? <AddIssue /> : <CurrentIssue />}
  //     </div>
  //     <div className="view-selection">
  //       <button class="view-button" onClick={() => setAddIssue(false)}>
  //         Current Issues
  //       </button>
  //       <button class="view-button active-button" onClick={() => setAddIssue(true)}>
  //         Add Issue
  //       </button>
  //     </div>
  //   </div>
  // );

  return (
    <div className="App">
      <h1 className="text-center mb-5">Bug Tracker</h1>
      <div className="grey-card-container">
        <AddIssue refreshBugs={loadBugs} />
      </div>
      <BugList bugs={bugs} refreshBugs={loadBugs} />

    </div>
  );
}

export default App;
