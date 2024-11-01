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
        const itemsData = await axios.get(`${process.env.REACT_APP_API_URL}/items`);
        const cartItemsData = await axios.get(`${process.env.REACT_APP_API_URL}/cart`);
        const favoritesData = await axios.get(`${process.env.REACT_APP_API_URL}/favorites`);

        setFavorite(favoritesData.data);
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
        axios.delete(`${process.env.REACT_APP_API_URL}/cart/${obj.id}`);
        setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)));
      } else {
        setCartItems((prev) => [...prev, obj]);
        axios.post(`${process.env.REACT_APP_API_URL}/cart`, obj);
      }
    } catch (error) {
      alert('Не удалось добавить в корзину');
    }
  };
  const onRemoveFromCart = (id) => {
    axios.delete(`${process.env.REACT_APP_API_URL}/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(id)));
  };

  const addToFavorite = async (obj) => {
    try {
      if (favorites.find((item) => item.id === obj.id)) {
        axios.delete(`${process.env.REACT_APP_API_URL}/favorites/${obj.id}`);
        setFavorite((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)));
      } else {
        const { data } = await axios.post(`${process.env.REACT_APP_API_URL}/favorites`, obj);
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
    <AppContext.Provider
      value={{ items, cartItems, favorites, isAddedToCart, addToFavorite, setCartOpened, setCartItems }}
    >
      <div className="wrapper clear">
        {isCartOpened && <CartDrawer onRemoveFromCart={onRemoveFromCart} />}
        <Header onClickCart={() => setCartOpened(true)} />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                searchValue={searchValue}
                onAddToCart={onAddToCart}
                onChangeSearchInput={onChangeSearchInput}
                setSearchValue={setSearchValue}
                isLoading={isLoading}
              />
            }
          />
          <Route path="/favorites" element={<Favorites onAddToCart={onAddToCart} />} />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
