
import { useState } from 'react';
import ProductList from './components/ProductList';
import './index.css'
function App() {
  const [products] = useState([
    { 
      id: 1, 
      name: 'Spicy Garlic Pickles', 
      price: 22.99, 
      description: 'Spicy garlic dill pickles in water and vinagrette.', 
      category: 'Spicy', 
      image: '/pickless.jpg' 
    },
    { 
      id: 2, 
      name: 'Spicy Habanero Pickles', 
      price: 39.99, 
      description: 'Spicy dill pickles with habanero and EVOO', 
      category: 'Spicy', 
      image: '/pickless.jpg' 
    },
    { 
      id: 3, 
      name: 'Jalapeno Pickles', 
      price: 25.00, 
      description: 'Dill pickles in Jalapeno and vinnegar', 
      category: 'Mild', 
      image: '/pickless.jpg' 
    },
    { 
      id: 4, 
      name: 'Peperoncino Pickles', 
      price: 44.00, 
      description: 'Dill pickled with pepperoncino and EVOO', 
      category: 'Mild', 
      image: '/pickless.jpg' 
    },
    { 
      id: 5, 
      name: 'Herbs and EVOO Pickles', 
      price: 29.99, 
      description: 'Dill in herbs and EVOO', 
      category: 'Regular', 
      image: '/pickless.jpg' 
    },
    { 
      id: 6, 
      name: 'Red Pepper Pickles', 
      price: 45.00, 
      description: 'Dill in red pepper and garlic.', 
      category: 'Mild', 
      image: '/pickless.jpg' 
    }
  ]);

  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...new Set(products.map(p => p.category))];

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="container">
      <header className="header">
        <h1>
          <img className='the-gift' src="/picklee.png" width="40px" />  
          Pickle Spice Store 
          <img className='the-gift' src="/picklee.png" width="40px" />
        </h1>
        <p>Welcome to the best Pickle store in the nation.</p>
      </header>

      <div className="filter-buttons">
        {categories.map(category => (
          <button
            key={category}
            className={selectedCategory === category ? 'active' : ''}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <main className='product-showcase'>
        <ProductList products={filteredProducts} />
      </main>

      <footer className="footer">
        <p>&copy; 2025 PICKLE SPICE TEAM  <img className='the-gift' src="/picklee.png" width="40px" /> </p>
      </footer>
    </div>
  );
}

export default App;