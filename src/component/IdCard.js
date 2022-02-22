import React from 'react';

const IdCard = (props) => {
  return (
    <div>
      <img src={props.picture} alt="not found" />
      <p>First name: {props.firstName}</p>
      <p>Last name: {props.lastName}</p>
      <p>Gender: {props.gender}</p>
      <p>Height: {props.height}</p>
      <p>Birthday: {props.birth.toDateString()}</p>
    </div>
  );
};

export default IdCard;
