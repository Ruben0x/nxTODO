import React, { useState } from 'react';
import { createProduct } from '../helpers/fetch';

interface FormData {
  nombre: string;
  descripcion: string;
  precio: number;
}

export const ProductForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    descripcion: '',
    precio: 1,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    createProduct(formData);
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>Nombre: </label>
        <input
          type="text"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
        />
        <hr />
        <label>Descripcion: </label>
        <input
          type="text"
          name="descripcion"
          value={formData.descripcion}
          onChange={handleChange}
        />
        <hr />
        <label>Precio: </label>
        <input
          type="number"
          name="precio"
          value={formData.precio}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Crear</button>
    </form>
  );
};
