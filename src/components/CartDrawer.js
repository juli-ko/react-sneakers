import React from 'react';
import axios from 'axios';
import CartInfo from './CartInfo';
import { AppContext } from '../App';

function CartDrawer({ onRemoveFromCart }) {
  const { cartItems, setCartOpened, setCartItems } = React.useContext(AppContext);
  const [isOrderComplete, setIsOrderComplete] = React.useState(false);
  const [orderId, setOrderId] = React.useState(1);
  const [isLoading, setIsLoading] = React.useState(false);
  const onClose = () => setCartOpened(false);
  const onClickOrder = async (obj) => {
    try {
      setIsLoading(true);
      const { data } = await axios.post('/orders', cartItems);
      axios.put('/cart', []);
      setOrderId(data.id);
      setIsOrderComplete(true);
      setCartItems([]);
    } catch (err) {
      console.log('Не получилось отправить заказ');
    }
    setIsLoading(false);
  };

  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="mb-30 d-flex justify-between">
          Корзина
          <div className="remove-btn" onClick={onClose}>
            <img src="/img/btn-remove.svg" alt="Remove" />
          </div>
        </h2>

        {cartItems.length > 0 ? (
          [
            <div className="cartItems">
              {cartItems.map((item) => (
                <div key={item.id} className="cartItem d-flex align-center">
                  <div className="cartItemImg" style={{ backgroundImage: `url(${item.imageUrl})` }}></div>
                  <div className="mr-20 flex">
                    <p className="mb-5">{item.title}</p>
                    <b>{item.price} руб.</b>
                  </div>
                  <div className="remove-btn">
                    <img src="/img/btn-remove.svg" alt="Remove" onClick={() => onRemoveFromCart(item.id)} />
                  </div>
                </div>
              ))}
            </div>,

            <div className="CartTotalBlock">
              <ul>
                <li>
                  <span>Итого: </span>
                  <div></div>
                  <b>21 498 руб.</b>
                </li>
                <li>
                  <span>Налог 5%:</span>
                  <div></div>
                  <b>1 074 руб. </b>
                </li>
              </ul>

              <button className="greenBtn" disabled={true} onClick={onClickOrder}>
                Оформить заказ <img src="/img/arrow.svg" alt="arrow" />
              </button>
            </div>,
          ]
        ) : isOrderComplete ? (
          <CartInfo
            onClose={onClose}
            title="Заказ оформлен!"
            description={`Ваш заказ #${orderId} скоро будет передан курьерской доставке`}
            imageUrl="/img/complete-order.jpg"
          />
        ) : (
          <CartInfo
            onClose={onClose}
            title="Корзина пустая"
            description="Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."
            imageUrl="/img/empty-cart.jpg"
          />
        )}
      </div>
    </div>
  );
}

export default CartDrawer;
