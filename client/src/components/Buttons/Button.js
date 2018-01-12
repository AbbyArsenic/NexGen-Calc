import React from 'react';

const Button = (props) => (

  <button
    className={props.className ? props.className : 'btn'}
    onClick={props.onClick}
  >
  {props.text}
  </button>
);

export default Button;