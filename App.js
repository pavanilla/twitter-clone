import React from 'react';
import './App.css';
import Feed from './components/Feed';
import Sidebar from './components/Sidebar';


function App() {
  return (
    <div className="App">
      <Sidebar/>
      {/*feed components*/}
      <Feed/>

      {/* Whats happening component*/}
    </div>
  );
}

export default App;
