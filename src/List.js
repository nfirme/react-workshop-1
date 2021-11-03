import React from 'react';

export default function List(props) {
  function handleClick(e, item) {
    console.log(item);
    props.deleteTask(item);
  }

  return (
    <ul className="List">
      {props.items.map((i) => (
        <li onClick={(e) => handleClick(e, i)} className="list-item">
          {i}
        </li>
      ))}
    </ul>
  );
}
