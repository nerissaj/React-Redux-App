import React from 'react';

const Bitcoin = props => {
  return (
    <div>
      <p>{props.bitcoin.date}</p>
      <p>{props.bitcoin.tid}</p>
      <p>{props.bitcoin.price}</p>
      <p>{props.bitcoin.amount}</p>
      
    </div>
  );
};

export default Bitcoin;
