import React from 'react';

function RestaurantCard({ name, location, onDetailsClick }) {
  return (
    <div className="card-box">
      <h2>{name}</h2>
      <p>{location?.country}, {location?.city}</p>
      <button onClick={onDetailsClick}>More details</button>
    </div>
  );
}

export default RestaurantCard;