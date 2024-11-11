import React from 'react';
import BakeryCard from '../components/BakeryCard';
import bakeryItems from '../../data.js';

function BakeryList() {
  return (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      {bakeryItems.map(item => (
        <BakeryCard
          key={item.id}
          name={item.name}
          price={item.price}
          offerPrice={item.offerPrice}
          description={item.description}
          rating={item.rating}
        />
      ))}
    </div>
  );
}

export default BakeryList;
