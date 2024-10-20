import React from 'react';
import Card from '../components/Card';
import { AppContext } from '../App';

function Home({
  items,
  favorites,
  searchValue,
  cartItems,
  setSearchValue,
  onAddToCart,
  onChangeSearchInput,
  addToFavorite,
  isLoading,
}) {
  const { isAddedToCart } = React.useContext(AppContext);

  const renderItems = () => {
    return isLoading
      ? [...Array(8)].map((item, index) => <Card key={index} onPlus={onAddToCart} onFavorite={addToFavorite} />)
      : items
          .filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
          .map((item) => (
            <Card
              key={item.id}
              onPlus={onAddToCart}
              onFavorite={addToFavorite}
              addedToCart={isAddedToCart(item.id)}
              liked={favorites.some((el) => Number(el.id) === Number(item.id))}
              loading={false}
              {...item}
            />
          ));
  };

  return (
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
      <div className="d-flex flex-wrap">{renderItems()}</div>
    </div>
  );
}
export default Home;
