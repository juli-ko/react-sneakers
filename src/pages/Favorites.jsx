import Card from '../components/Card';
import { AppContext } from '../App';
import React from 'react';

function Favorites({ onAddToCart, addToFavorite }) {
  const { favorites } = React.useContext(AppContext);

  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>Мои любимчики</h1>
      </div>
      <div className="d-flex flex-wrap">
        {favorites.map((item, index) => (
          <Card key={index} onPlus={onAddToCart} onFavorite={addToFavorite} liked={true} {...item} />
        ))}
      </div>
    </div>
  );
}
export default Favorites;
