import { useState } from "react";
import { NavLink } from "react-router-dom";
import useProducts from "../../Hooks/useProducts";


const Products = () => {
  const { products } = useProducts();  // Obtén los productos desde el hook
  const [search, setSearch] = useState("");  // Estado para manejar la búsqueda

  // Filtrar productos basados en la búsqueda
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase()) ||
    product.categoria.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      {/* Barra de búsqueda */}
      <div className="max-w-sm mx-auto my-6">
        <input
          type="text"
          placeholder="Buscar productos..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>

      {/* Productos filtrados */}
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8 py-10 md:max-w-[1200px] mx-auto pt-20 md:pt-[100px]">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="flex flex-col items-center justify-between bg-white shadow-lg hover:shadow-2xl rounded-xl transition-all duration-300 ease-in-out transform hover:scale-105 mx-4 my-4"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded-t-xl"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 truncate">{product.name}</h3>
              <p className="text-xl font-bold text-gray-700 mt-2">${product.precio}</p>
              <NavLink
                to={`/detalle/${product.id}`}
                className="block text-center bg-green-500 text-white py-2 px-4 mt-4 rounded-lg hover:bg-green-600 transition-all duration-300"
              >
                Ver Detalle
              </NavLink>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
