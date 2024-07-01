import './App.css';
import React from 'react';
import AddProduct from './components/AddProduct';
import ProductFilter from './components/ProductFilter';
import ProductList from './components/ProductList';
import { FilterProvider } from './contexts/FilterContext';

function App() {
  return (
    <FilterProvider>
      <ProductFilter />
      <AddProduct />
      <ProductList />
    </FilterProvider>
  );
}

export default App;
