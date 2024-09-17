import Card from './components/Card';
import Header from './components/Header';
import CartDrawer from './components/CartDrawer';

function App() {
  return (
    <div className="wrapper clear">
      <CartDrawer />
      <Header />

      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block">
            <img src="/img/search-icon.svg" alt="search" />
            <input placeholder="Поиск..." type="text" />
          </div>
        </div>
        <div className="d-flex">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
