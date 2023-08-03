import { useState } from 'react';

import './App.css';

function App() {
  const [names, setNames] = useState(['Aaron', 'Alfred', 'Anthony', 'Andrew'])
  function namesAsList(){
    let allLis = names.map( n => <li key={n}>{n}</li>)
    return allLis;
  }
  function handleClick(){
    fetch('/users')
    .then(res => {
      return res.json()
    }).then(val => {
      setNames(val)
    })
  }
  return (
    <div className="App">
      <h1>List of Names</h1>
     <ul>
      {namesAsList()}
     </ul>
     <button onClick={handleClick}>Update names</button>
    </div>
  );
}

export default App;
