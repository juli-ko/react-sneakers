function CartDrawer() {
  return (
    <div style={{ display: 'none' }} className="overlay">
      <div className="drawer">
        <h2 className="mb-30 d-flex justify-between">
          Корзина
          <div className="remove-btn">
            <img src="/img/btn-remove.svg" alt="Remove" />
          </div>
        </h2>

        <div className="cartItems">
          <div className="cartItem d-flex align-center">
            <div className="cartItemImg" style={{ backgroundImage: 'url(/img/sneakers/1.1.jpg)' }}></div>
            <div className="mr-20 flex">
              <p className="mb-5">Мужские Кроссовки Nike Blazer Mid Suede</p>
              <b>12 999 руб.</b>
            </div>
            <div className="remove-btn">
              <img src="/img/btn-remove.svg" alt="Remove" />
            </div>
          </div>
          <div className="cartItem d-flex align-center">
            <div className="cartItemImg" style={{ backgroundImage: 'url(/img/sneakers/1.1.jpg)' }}></div>
            <div className="mr-20 flex">
              <p className="mb-5">Мужские Кроссовки Nike Blazer Mid Suede</p>
              <b>12 999 руб.</b>
            </div>
            <div className="remove-btn">
              <img src="/img/btn-remove.svg" alt="Remove" />
            </div>
          </div>
        </div>

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

          <button className="greenBtn">
            Оформить заказ <img src="/img/arrow.svg" alt="arrow" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartDrawer;
