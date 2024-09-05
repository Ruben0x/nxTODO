import { render } from '@testing-library/react';
import { ProductList } from './ProductList';
import { Product } from './ProductForm';

const products: Product[] = [
  {
    _id: '66d77a34cb55c52636f2ec5b',
    nombre: 'wena',
    descripcion: 'nuevo prod',
    precio: 1234,
  },
];

describe('List', () => {
  it('should show list of products', () => {
    const { baseElement } = render(<ProductList products={products} />);
    expect(baseElement).toBeTruthy();
  });

  it('should show a product named "wena"', () => {
    const { getByText } = render(<ProductList products={products} />);
    expect(getByText('wena')).toBeTruthy();
  });
});
