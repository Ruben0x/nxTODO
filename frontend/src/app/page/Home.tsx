import React from 'react';
import { ProductList } from '../components/ProductList';
import { ProductForm } from '../components/ProductForm';

export const Home = () => {
  return (
    <div>
      <ProductForm />
      <ProductList />
    </div>
  );
};
