import React from 'react';
import styles from './Card.module.scss';

function Card({ title, key, price, imageUrl, onPlus, onFavorite }) {
  const [isAdded, setIsAddedToCart] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(false);

  const onClickPlus = () => {
    onPlus({ title, imageUrl, price });
    setIsAddedToCart(!isAdded);
  };

  const onClickFavorite = () => {
    onFavorite({ title, imageUrl, price });
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img src={isFavorite ? '/img/liked.svg' : '/img/unliked.svg'} onClick={() => onClickFavorite()} alt="liked" />
      </div>
      <img width={133} height={122} src={imageUrl} alt="Sneakers" />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{price} руб.</b>
        </div>
        <img
          className={styles.plus}
          onClick={() => onClickPlus()}
          src={isAdded ? '/img/btn-checked.svg' : '/img/btn-plus.svg'}
          alt="plus"
        />
      </div>
    </div>
  );
}

export default Card;
