import Card from '../components/Card';

function Favorites({ favorites }) {
  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>Мои любимчики</h1>
      </div>
      <div className="d-flex flex-wrap">
        {/* {items
          .map((item, index) => (
            <Card
              key={index}
              imageUrl={item.imageUrl}
              title={item.title}
              price={item.price}
              onPlus={onAddToCart}
              onFavorite={addToFavorite}
            />
          ))} */}
      </div>
    </div>
  );
}
export default Favorites;
