import React, { useState } from 'react';
import './styles.css';

export default function Form(props) {

  const [text, setText] = useState("");

  function handleChange(e) {
    setText(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.addTask(text);
    setText("");
  }

  return (
    <form onSubmit={handleSubmit} >
      <label>Enter a new item:</label>
      <input type="text" value={text} onChange={handleChange} className="search-bar"></input>
      <input type="submit" className="submit-btn"></input>
    </form>
  );
}
