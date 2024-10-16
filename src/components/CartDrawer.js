function CartDrawer({ items, onClose, onRemoveFromCart }) {
  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="mb-30 d-flex justify-between">
          Корзина
          <div className="remove-btn" onClick={onClose}>
            <img src="/img/btn-remove.svg" alt="Remove" />
          </div>
        </h2>

        {items.length > 0 ? (
          [
            <div className="cartItems">
              {items.map((item) => (
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

              <button className="greenBtn">
                Оформить заказ <img src="/img/arrow.svg" alt="arrow" />
              </button>
            </div>,
          ]
        ) : (
          <div className="cartEmpty d-flex align-center justify-center flex-column flex">
            <img className="mb-20" width="120px" height="120px" src="/img/empty-cart.jpg" alt="Empty" />
            <h2>Корзина пустая</h2>
            <p className="opacity-6">Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
            <button onClick={onClose} className="greenBtn">
              Вернуться назад <img src="/img/arrow.svg" alt="Arrow" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default CartDrawer;
