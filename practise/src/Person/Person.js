import React from 'react';
import './Person.css';
const person = props => {
  return (
    <div className="Person">
      <h1 onClick={props.click}> I'm {props.name} </h1>
      <p> age {props.age} </p>
      <h3> {props.children}</h3>
    </div>
  );
};

export default person;
