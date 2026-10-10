import { useState } from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import './App.css';

const products = [
  { id: 1, name: 'Clavier', price: 89, emoji: '⌨️' },
  { id: 2, name: 'Souris', price: 45, emoji: '🖱️' },
  { id: 3, name: 'Casque', price: 120, emoji: '🎧' },
];

export default function App() {
  const [search, setSearch] = useState('');
  const [cart, setCart] = useState([]);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.trim().toLowerCase()),
  );

  function handleAdd(product) {
    setCart((previousCart) => [...previousCart, product]);
  }

  const total = cart.reduce((sum, product) => sum + product.price, 0);

  return (
    <div className="app">
      <Header search={search} onSearchChange={setSearch} />

      <main>
        <ProductList products={filteredProducts} onAdd={handleAdd} />
      </main>

      <Footer />
    </div>
  );
}
