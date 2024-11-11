import React from 'react';
import styles from '../assets/styles/BakeryCard.module.css';

function BakeryCard({ name, price, offerPrice, description, rating }) {
  return (
    <div className={styles.card}>
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.description}>{description}</p>
      <div className={styles.priceContainer}>
        {offerPrice ? (
          <>
            <span className={styles.offerPrice}>${offerPrice}</span>
            <span className={styles.originalPrice}>${price}</span>
          </>
        ) : (
          <span className={styles.price}>${price}</span>
        )}
      </div>
      <p className={styles.rating}>Rating: {rating} / 5</p>
    </div>
  );
}

export default BakeryCard;
