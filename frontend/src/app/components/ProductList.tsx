import { useEffect, useState } from 'react';
import { deleteProduct, getProducts } from '../helpers/fetch';

interface Product {
  _id: string;
  nombre: string;
  descripcion: string;
  precio: number;
}
export const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const lista = await getProducts();
        setProducts(lista);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProducts();
  }, []);

  const handleDelete = (id: string) => {
    try {
      deleteProduct(id);
      setProducts((prev) => prev.filter((prod) => prod._id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className="max-w-[720px] mx-auto">
        <div className="relative flex flex-col w-full h-full overflow-scroll text-gray-700 bg-white shadow-md rounded-lg bg-clip-border">
          <table className="w-full text-left table-auto min-w-max">
            <thead>
              <tr className="border-b border-slate-300 bg-slate-50">
                <th className="p-4 text-sm font-normal leading-none text-slate-500">
                  Nombre
                </th>
                <th className="p-4 text-sm font-normal leading-none text-slate-500">
                  Descripción
                </th>
                <th className="p-4 text-sm font-normal leading-none text-slate-500">
                  Precio
                </th>

                <th className="p-4 text-sm font-normal leading-none text-slate-500"></th>
              </tr>
            </thead>
            <tbody>
              {products.map((p) => (
                <tr key={p._id} className="hover:bg-slate-50">
                  <td className="p-4 border-b border-slate-200 py-5">
                    <p className="block font-semibold text-sm text-slate-800">
                      {p.nombre}
                    </p>
                  </td>
                  <td className="p-4 border-b border-slate-200 py-5">
                    <p className="text-sm text-slate-500">{p.descripcion}</p>
                  </td>
                  <td className="p-4 border-b border-slate-200 py-5">
                    <p className="text-sm text-slate-500">{p.precio}</p>
                  </td>

                  <td className="p-4 border-b border-slate-200 py-5">
                    <button
                      onClick={() => handleDelete(p._id)}
                      type="button"
                      className="text-slate-500 hover:text-slate-700"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
