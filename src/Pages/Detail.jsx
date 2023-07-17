import { RiBarChart2Fill} from "react-icons/ri";

const Detail = () => {
  return (
    <div className="container mt-2 md:mx-[18%] py-[200px] md:max-w-[1000px]">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mx-5 my-4 md:mx-0 md:my-0 ">
     
      <div>
        <img src="./imgBe/camisaBe.jpg" alt="Producto" className="w-full rounded-lg shadow-lg"/>
      </div>
      
      <div>
        <h2 className="text-3xl font-semibold mb-4 uppercase">Nombre del Producto</h2>
        <p className="text-gray-600 mb-4">Descripción del producto</p>
        <p className="text-2xl font-bold text-gray-500 mb-4">$99.99</p>
        
        <div className="flex items-center mb-4">
        <RiBarChart2Fill className=" text-gray-500 text-2xl "/> 
          <p className="text-gray-600 ml-2">Disponible en diferentes tallas y colores</p>
        </div>
        <button className="bg-blue-500 hover:bg-black/70 text-white font-bold py-2 px-4 rounded">
          Comprar
        </button>
      </div>
    </div>
  </div>
  
  )
}

export default Detail