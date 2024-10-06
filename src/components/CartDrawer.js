function CartDrawer(props) {
  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="mb-30 d-flex justify-between">
          Корзина
          <div className="remove-btn" onClick={props.onClose}>
            <img src="/img/btn-remove.svg" alt="Remove" />
          </div>
        </h2>

        <div className="cartItems">
          {props.items.map((item, index) => (
            <div className="cartItem d-flex align-center">
              <div className="cartItemImg" style={{ backgroundImage: `url(${item.imageUrl})` }}></div>
              <div className="mr-20 flex">
                <p className="mb-5">{item.title}</p>
                <b>{item.price} руб.</b>
              </div>
              <div className="remove-btn">
                <img src="/img/btn-remove.svg" alt="Remove" />
              </div>
            </div>
          ))}
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
