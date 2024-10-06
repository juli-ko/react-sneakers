import React from 'react';
import Card from './components/Card';
import Header from './components/Header';
import CartDrawer from './components/CartDrawer';

function App() {
  const [isCartOpened, setCartOpened] = React.useState(false);
  const [cartItems, setCartItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    fetch('https://66ec80ec2b6cf2b89c5ea299.mockapi.io/sneakers/items')
      .then((res) => res.json())
      .then((json) => {
        setItems(json);
      });
  }, []);

  const onAddToCart = (obj) => {
    setCartItems((prev) => [...prev, obj]);
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="wrapper clear">
      {isCartOpened && <CartDrawer items={cartItems} onClose={() => setCartOpened(false)} />}
      <Header onClickCart={() => setCartOpened(true)} />

      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>{searchValue ? `Поиск по запросу: ${searchValue}` : 'Все кроссовки'}</h1>
          <div className="search-block">
            <img src="/img/search-icon.svg" alt="search" />
            {searchValue && (
              <img className="clear" src="/img/btn-remove.svg" alt="Clear" onClick={() => setSearchValue('')} />
            )}
            <input placeholder="Поиск..." type="text" onChange={onChangeSearchInput} value={searchValue} />
          </div>
        </div>
        <div className="d-flex flex-wrap">
          {items
            .filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
            .map((item, index) => (
              <Card
                key={index}
                imageUrl={item.imageUrl}
                title={item.title}
                price={item.price}
                onPlus={onAddToCart}
                onFavorite={() => console.log('Нажали like')}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
