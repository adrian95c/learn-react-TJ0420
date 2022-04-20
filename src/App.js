import React from 'react'
import './App.css';
import data from './data.json'
import Navbar from './components/Navbar'
import Contents from './components/Contents'

function App() {

  const detail = data.map(item => {
    return(
        <Contents 
            key= {item.id}
            item={item}  
        />
    )
  }
)
  return (
    <div>
      <Navbar />
      <div className="main-travel-container">     
        {detail}
      </div>
    </div>
  );
}

export default App;
