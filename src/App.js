import React from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header';
import CartDrawer from './components/CartDrawer';
import Home from './pages/Home';
import Favorites from './pages/Favorites';

function App() {
  const [isCartOpened, setCartOpened] = React.useState(false);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorite] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    axios.get('https://66ec80ec2b6cf2b89c5ea299.mockapi.io/sneakers/items').then((res) => setItems(res.data));
    axios.get('https://66ec80ec2b6cf2b89c5ea299.mockapi.io/sneakers/cart').then((res) => setCartItems(res.data));
  }, []);

  const onAddToCart = (obj) => {
    setCartItems((prev) => [...prev, obj]);
    axios.post('https://66ec80ec2b6cf2b89c5ea299.mockapi.io/sneakers/cart', obj);
  };

  const onRemoveFromCart = (id) => {
    axios.delete(`https://66ec80ec2b6cf2b89c5ea299.mockapi.io/sneakers/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const addToFavorite = (obj) => {
    setFavorite((prev) => [...prev, obj]);
    // axios.post('https://66ec80ec2b6cf2b89c5ea299.mockapi.io/sneakers/favorites', obj)
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="wrapper clear">
      {isCartOpened && (
        <CartDrawer items={cartItems} onClose={() => setCartOpened(false)} onRemoveFromCart={onRemoveFromCart} />
      )}
      <Header onClickCart={() => setCartOpened(true)} onClickFav={() => console.log('open fav')} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              items={items}
              favorites={favorites}
              searchValue={searchValue}
              onAddToCart={onAddToCart}
              onChangeSearchInput={onChangeSearchInput}
              addToFavorite={addToFavorite}
              setSearchValue={setSearchValue}
            />
          }
        />
        <Route path="/favorites" element={<Favorites favorites={favorites} />} />
      </Routes>
    </div>
  );
}

export default App;
