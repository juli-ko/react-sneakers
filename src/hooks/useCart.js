import React from 'react';
import { AppContext } from '../App';

export const useCart = () => {
  const { cartItems } = React.useContext(AppContext);
  const totalPrice = cartItems.reduce((accumulator, currentValue) => accumulator + currentValue.price, 0);

  return totalPrice;
};
