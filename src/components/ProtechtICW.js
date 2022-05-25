import React from 'react';

const ProtechtICW = (props) => {
  console.log(props.items);
  const listItems = props.items.map((item) =>
    <li>{item.cost}</li>
  );

  return (
    <div>
      <h3>Items:</h3>  
      <ul>
        {listItems}
      </ul>
    </div>
  );
};

export default ProtechtICW;