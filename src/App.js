import React, { useState } from 'react';
import Form from './Form';
import List from './List';
import './styles.css';

function App() {
  const [items, setItems] = useState(['apple', 'banana', 'carrot']);

  function addTask(newItem) {
    setItems([...items, newItem]);
  }

  function deleteTask(item) {
    const remaining = items.filter((i) => i !== item);
    setItems(remaining);
  }

  return (
    <div className="App">
      <img alt="" className="grocery-icon" src="https://www.svgrepo.com/show/227498/groceries-grocery.svg" />
      <h1>My Shopping List</h1>
      <Form addTask={addTask} />
      <List deleteTask={deleteTask} items={items} />
    </div>
  );
}

export default App;
