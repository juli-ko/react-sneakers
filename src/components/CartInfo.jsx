import React from 'react';

export const CartInfo = ({ onClose, title, description, imageUrl }) => {
  return (
    <div className="cartEmpty d-flex align-center justify-center flex-column flex">
      <img className="mb-20" width="120px" src={imageUrl} alt="cartInfo" />
      <h2>{title}</h2>
      <p className="opacity-6">{description}</p>
      <button onClick={onClose} className="greenBtn">
        Вернуться назад <img src="img/arrow.svg" alt="Arrow" />
      </button>
    </div>
  );
};

export default CartInfo;
