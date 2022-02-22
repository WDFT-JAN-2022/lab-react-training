import React from 'react';

const Random = (props) => {
  const randomNumber = Math.floor(
    Math.random() * (props.max + 1 - props.min) + props.min
  );

  return (
    <p>
      Random value between {props.min} and {props.max} is {randomNumber}
    </p>
  );
};

export default Random;
