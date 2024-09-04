
function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between align-center p-40	">
        <div className="headerLeft d-flex align-center">
          <img width={40} height={40} src="/img/logo.png" alt="logo" />
          <div>
            <h3 className="text-uppercase">React sneakers</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30">
            <img width={18} height={18} src="/img/cart.svg" alt="cart" />
            <span>1205 руб.</span></li>
          <li>
            <img width={18} height={18} src="/img/user.svg" alt="user" />
          </li>
        </ul>
      </header>
      <div className="content p-40">
        <h1>Все кроссовки</h1>
        <div className="card">
          <img src="" alt="" />
          <p></p>
          <div>
            <div>
              <span>Цена:</span>
              <b>12 999 руб.</b>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;

