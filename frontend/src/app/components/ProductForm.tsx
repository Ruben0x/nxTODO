import React, { useEffect, useState } from 'react';
import { createProduct, getProducts } from '../helpers/fetch';
import { ProductList } from './ProductList';

interface FormData {
  nombre: string;
  descripcion: string;
  precio: number;
}

export interface Product {
  _id: string;
  nombre: string;
  descripcion: string;
  precio: number;
}

export const ProductForm: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const lista = await getProducts();
        setProducts(lista);
      } catch (error) {
        console.error(error);

        alert('Nombre no puede estar vacio');
      }
    };
    fetchProducts();
  }, [products]);

  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    descripcion: '',
    precio: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === 'precio' ? Number(value) : value,
    }));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createProduct(formData);
    console.log('Form data submitted:', formData);
  };

  return (
    <div className=" justify-center items-center">
      <form
        onSubmit={onSubmit}
        className="bg-white shado w-md rounded px-8 pt-6 pb-8 mb-4 "
      >
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Nombre:
          </label>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Descripcion:
          </label>
          <input
            type="text"
            name="descripcion"
            value={formData.descripcion}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Precio:
          </label>
          <input
            type="number"
            name="precio"
            value={formData.precio}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Crear
          </button>
        </div>
      </form>
      <ProductList products={products} />
    </div>
  );
};
