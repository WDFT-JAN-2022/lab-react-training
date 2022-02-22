import React from 'react';
import Rating from './Rating';

const DriverCard = ({ name, rating, img, car }) => {
  return (
    <div>
      <img src={img} alt="img" width={50} height={50} />
      <h1>{name}</h1>
      <Rating>{rating}</Rating>
      <p>
        {car.model} - {car.licensePlate}
      </p>
    </div>
  );
};

export default DriverCard;
