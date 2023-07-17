import { NavLink,Link } from "react-router-dom";

const Products = () => {

    const products =[
        {name: "Zapatillas de Futbol ", id:"1", image:"imgF/zapatillasF.jpg", precio:"50000 ", descripcion:"", 
      categoria:"Futbol" },
        {name: "Paracaidas", id:"2",image:"imgF/paracaidas.jpg", precio:"4500 ", descripcion:"", categoria:"Futbol" },
        {name: "Camiseta de Baloncesto", id:"3", image:"imgB/camisaB.jpg", precio:"15000 ", descripcion:"", 
      categoria:"Baloncesto" },
        {name: "Bate de Beisbol", id:"4", image:"imgBe/bate.jpg", precio:"7900 ", descripcion:"", categoria:"Beisbol" },
        {name: "Camiseta de Beisbol", id:"5", image:"imgBe/camisaBe.jpg", precio:"11400 ", descripcion:"", 
      categoria:"Beisbol" },
        {name: "Gorra", id:"6", image:"imgBe/gorra.jpg", precio:"9900 ", descripcion:"", categoria:"Beisbol" },
        {name: "Aro", id:"7", image:"imgB/aro.jpg", precio:"3400 ", descripcion:"Incluye 4 tornillos para la instalacion",
        categoria:"Baloncesto"},
        {name: "Balon de Futbol", id:"8", image:"imgF/balonF.jpg", precio:"7992 ", descripcion:"", categoria:"Futbol" },
        {name: "Camiseta de Futbol", id:"9", image:"imgF/camisaF.jpg", precio:"28000 ", descripcion:"", 
      categoria:"Futbol" },
        {name: "Zapatillas de Baloncesto", id:"10", image:"imgB/zapatos.jpg", precio:" 72000", descripcion:"", 
      categoria:"Baloncesto" },
        {name: "Casco de Futbol", id:"11", image:"imgFA/casco.jpg", precio:"100000 ", descripcion:"", 
      categoria:"Futbol Americano" },
        {name: "Pelota de Beisbol", id:"12", image:"imgBE/pelota.jpeg", precio:"2000 ", descripcion:"", 
      categoria:"Beisbol" },
        {name: "Camiseta de Futbol Americano", id:"13", image:"imgFA/jersey.jpg", precio:"18000 ", descripcion:"", 
      categoria:"Futbol Americano" },
        {name: "Ovoide", id:"14", image:"imgFA/ovoide.jpg", precio:" 10500 ", descripcion:"", 
      categoria:"Futbol Americano" },
        {name: "Balon de Baloncesto", id:"15", image:"imgB/balon.jpg", precio:"7000 ", descripcion:"Cuero 100%", 
        categoria:"Baloncesto" },
        {name: "Hombrera de Futbol", id:"16", image:"imgFA/protector.jpg", precio:"90900 ", descripcion:"", 
      categoria:"Futbol Americano" },
        {name: "Zapatillas de Futbol", id:"17", image:"imgFA/zapatillasFA.jpg", precio:"45000 ", descripcion:"", 
      categoria:"Futbol Americano" },
        {name: "Tabla de jugadas", id:"18", image:"imgB/tabla.jpg", precio:"4000 ", descripcion:"", categoria:"Baloncesto" },
        {name: "Guante de Beisbol", id:"19", image:"imgBe/guante.jpg", precio:"25000 ", descripcion:"", 
      categoria:"Beisbol" },
        {name: "Arqueria de Futbol", id:"20", image:"imgF/porteria.jpg", precio:" 14250 ", descripcion:"", 
      categoria:"Futbol" },
      
      ];
  
   return (
    <div className="  grid md:grid-cols-4  gap-8 py-[14%]  md:max-w-[1200px] mx-auto">
      {products.map((product) => (
        <div
          key={product.id}
          className=" hover:shadow-xl hover:shadow-black/50 rounded-lg flex flex-col items-center justify-center  mx-5 my-4 md:mx-0 md:my-0 bg-black/10"
        >
        
            <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover rounded-tl-lg rounded-tr-lg cursor-pointer"
          />
        
          
          
          <div className=" bg-gray-400 w-full py-1"></div>
          <h3 className="text-lg uppercase text-gray-800 mb-2 py-2">{product.name}</h3>
          <p className="text-gray-800 text-lg font-bold">${product.precio}</p>
          <NavLink to="detalle" className=" mb-2 bg-gray-400 text-white py-2 px-4 rounded-md mt-4 hover:bg-black/70 hover:text-white">
            ver
          </NavLink>
        </div>
      ))}
    </div>
  );




    
}

export default Products