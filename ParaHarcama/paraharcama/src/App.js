import './App.css';
import Header from './components/Header';
import { useEffect, useState } from 'react';
import products from './products.json'
import Product from './components/Product';

function App() {
  const [money, setMoney] = useState(100);
  return (
    <div >
      <Header money={money} />
      {products.map(product =>
        <Product product={product} />
      )}
    </div>
  );
}

export default App;
