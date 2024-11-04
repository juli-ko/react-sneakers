import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../hooks/useCart';

function Header(props) {
  const totalPrice = useCart();

  return (
    <header className="d-flex justify-between align-center p-40	">
      <div className="headerLeft d-flex align-center">
        <Link to="/">
          <img width={40} height={40} src="/img/logo.png" alt="logo" />
          <div>
            <h3 className="text-uppercase">React sneakers</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
        </Link>
      </div>
      <ul className="d-flex">
        <li className="mr-30" onClick={props.onClickCart}>
          <img width={18} height={18} src="/img/cart.svg" alt="cart" />
          <span className="opacity-5">{totalPrice} руб.</span>
        </li>
        <li className="mr-30">
          <Link to="/favorites">
            <img width={18} height={18} src="/img/heart.svg" alt="fav" />
          </Link>
        </li>
        <li>
          <Link to="/orders">
            <img width={18} height={18} src="/img/user.svg" alt="user" />
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
