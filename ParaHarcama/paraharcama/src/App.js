import './App.css';
import Header from './components/Header';
import { useEffect, useState } from 'react';
import products from './products.json'
import Product from './components/Product';
import './index.css';
import Basket from './components/Basket';

function App() {

  const [money, setMoney] = useState(1000000) //state tanımlandı
  const [basket, setBasket] = useState([])
  const [total, setTotal] = useState(0)

  useEffect(() => {
    setTotal(
      basket.reduce((acc, item) => {
        return acc + (item.amount * (products.find(product => product.id === item.id).price))
      }, 0),
    )

  }, [basket])

  return (
    <>
      <Header total={total} money={money} />
      <div className='container products'>
        {products.map(product => (
          <Product key={product.id} total={total} money={money} basket={basket} setBasket={setBasket} product={product} />
        ))}</div>
      {total > 0 && (
        <Basket setBasket={setBasket} total={total} products={products} basket={basket} />
      )}
    </>
  );
}

export default App;
