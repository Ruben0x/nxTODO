import axios from 'axios';

const url = 'http://localhost:3000/api/products';

interface Product {
  nombre: string;
  descripcion: string;
  precio: number;
}
export const getProducts = async () => {
  try {
    const resp = await axios(url);

    return resp.data;
  } catch (error) {
    console.error('Error al obtener productos: ', error);
    return [];
  }
};

export const deleteProduct = async (id: string) => {
  try {
    await axios.delete(`${url}/${id}`);

    console.log('Eliminado con éxito');
  } catch (error) {
    console.error(error);
  }
};

export const createProduct = async (product: Product) => {
  try {
    const resp = await axios.post(url, product);
    console.log('Producto creado con éxito');
    return resp.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      alert(error.response?.data.message);
      console.error(
        'Error en la solicitud:',
        error.response?.data || error.message
      );
    } else {
      console.error('Error inesperado:', error);
    }
  }
};
