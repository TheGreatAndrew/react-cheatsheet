import React from 'react';

function List(props) {
  const itemsList = props.items.map((item, index) => (
    <li key={index}>{item}</li>
  ));

  return (
    <div>
      <h2>{props.title}</h2>
      <ul>
        {itemsList}
      </ul>
    </div>
  );
}

export default List;
