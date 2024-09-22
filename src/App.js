import React from 'react';
import Card from './components/Card';
import Header from './components/Header';
import CartDrawer from './components/CartDrawer';

function App() {
  const [isCartOpened, setCartOpened] = React.useState(false);
  const [cartItems, setCartItems] = React.useState([]);
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    fetch('https://66ec80ec2b6cf2b89c5ea299.mockapi.io/sneakers/items')
      .then((res) => res.json())
      .then((json) => {
        setItems(json);
      });
  }, []);

  return (
    <div className="wrapper clear">
      {isCartOpened && <CartDrawer items={cartItems} onClose={() => setCartOpened(false)} />}
      <Header onClickCart={() => setCartOpened(true)} />

      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block">
            <img src="/img/search-icon.svg" alt="search" />
            <input placeholder="Поиск..." type="text" />
          </div>
        </div>
        <div className="d-flex flex-wrap">
          {items.map((item) => (
            <Card image={item.imageUrl} title={item.title} price={item.price} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
