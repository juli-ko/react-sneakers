import React from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header';
import CartDrawer from './components/CartDrawer';
import Home from './pages/Home';
import Favorites from './pages/Favorites';

export const AppContext = React.createContext({});

function App() {
  const [isCartOpened, setCartOpened] = React.useState(false);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorite] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchDataForRender() {
      try {
        const itemsData = await axios.get('https://66ec80ec2b6cf2b89c5ea299.mockapi.io/sneakers/items');
        const cartItemsData = await axios.get('https://66ec80ec2b6cf2b89c5ea299.mockapi.io/sneakers/cart');
        // const favoritesData = await axios.get('https://66ec80ec2b6cf2b89c5ea299.mockapi.io/sneakers/favorites')
        //  setFavorite(favoritesData)

        setCartItems(cartItemsData.data);
        setItems(itemsData.data);
        setIsLoading(false);
      } catch (error) {
        alert('Ошибка при запросе данных ;(');
        console.error(error);
      }
    }

    fetchDataForRender();
  }, []);

  const onAddToCart = (obj) => {
    try {
      if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
        axios.delete(`https://66ec80ec2b6cf2b89c5ea299.mockapi.io/sneakers/cart/${obj.id}`);
        setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)));
      } else {
        setCartItems((prev) => [...prev, obj]);
        axios.post('https://66ec80ec2b6cf2b89c5ea299.mockapi.io/sneakers/cart', obj);
      }
    } catch (error) {
      alert('Не удалось добавить в корзину');
    }
  };

  const onRemoveFromCart = (id) => {
    axios.delete(`https://66ec80ec2b6cf2b89c5ea299.mockapi.io/sneakers/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const addToFavorite = async (obj) => {
    try {
      if (favorites.find((item) => item.id === obj.id)) {
        axios.delete(`https://66ec80ec2b6cf2b89c5ea299.mockapi.io/sneakers/favorites/${obj.id}`);
        setFavorite((prev) => prev.filter((item) => item.id !== obj.id));
      } else {
        const { data } = await axios.post('https://66ec80ec2b6cf2b89c5ea299.mockapi.io/sneakers/favorites', obj);
        setFavorite((prev) => [...prev, data]);
      }
    } catch (err) {
      alert('Не удалось добавить в фавориты');
    }
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const isAddedToCart = (id) => {
    return cartItems.some((el) => Number(el.id) === Number(id));
  };

  return (
    <AppContext.Provider value={{ items, cartItems, favorites, isAddedToCart }}>
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
                cartItems={cartItems}
                onChangeSearchInput={onChangeSearchInput}
                addToFavorite={addToFavorite}
                setSearchValue={setSearchValue}
                isLoading={isLoading}
              />
            }
          />
          <Route path="/favorites" element={<Favorites onAddToCart={onAddToCart} addToFavorite={addToFavorite} />} />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
