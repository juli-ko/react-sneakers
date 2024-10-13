import Card from '../components/Card';

function Home({ items, favorites, searchValue, setSearchValue, onAddToCart, onChangeSearchInput, addToFavorite }) {
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
      <div className="d-flex flex-wrap">
        {items
          .filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
          .map((item, index) => (
            <Card key={index} onPlus={onAddToCart} onFavorite={addToFavorite} {...item} />
          ))}
      </div>
    </div>
  );
}
export default Home;
