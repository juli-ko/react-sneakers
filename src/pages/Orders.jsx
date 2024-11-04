import Card from '../components/Card';
import React from 'react';
import axios from 'axios';
import { AppContext } from '../App';

function Orders() {
  const { addToFavorite, favorites } = React.useContext(AppContext);
  const [orders, setOrders] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    (async (params) => {
      try {
        const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/orders`);
        setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
        setIsLoading(false);
      } catch (error) {
        console.error();
      }
    })();
  }, []);

  const renderOrders = () => {
    return isLoading
      ? [...Array(8)].map((item, index) => <Card key={index} onFavorite={addToFavorite} />)
      : orders.map((item) => (
          <Card
            key={item.id}
            onFavorite={addToFavorite}
            liked={favorites.some((el) => Number(el.id) === Number(item.id))}
            loading={false}
            {...item}
          />
        ));
  };

  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>Мои заказы</h1>
      </div>
      <div className="d-flex flex-wrap">{renderOrders()}</div>
    </div>
  );
}
export default Orders;
