import { NavLink } from "react-router-dom";

import { 
  RiAlignJustify, 
  RiCloseFill, 
  RiDiscussFill, 
  RiSearchLine ,
  RiWhatsappFill

} from "react-icons/ri";

import { useState} from "react";

const Navbar = () => {

  const [justify, setJustify] = useState(false)

  const nav = () => {
    setJustify(!justify)
  }

  return (
    <div className=" fixed top-0 left-0 w-full p-2 z-10 bg-white ">
      <div className=" py-3 flex items-center md:ml-[9%]"> 
        <NavLink to="/">
           <img 
          className="w-[150px] rounded-md ml-3 "
          src="img/I.jpeg" 
          alt="/" 
        />
        </NavLink>
       

        <div className=" relative hidden md:block ml-[10%]">
          <input 
          className=" font-semibold border-b outline-none border-gray-400 text-black bg-white rounded-md py-[7px] w-[500px] px-6 "
          type="text" 
          placeholder="¿Qué estas buscando?"
          />
          <span className="absolute right-3 transform translate-x-full ">
            <RiSearchLine className="absolute right-3 top-3 text-gray-500 cursor-pointer rounded-full hover:scale-105 ease-in duration-300 hover:text-gray-600 text-2xl"/>
          </span>
         
        </div>
        

        <div className="  hidden md:block text-gray-400 text-4xl ml-[25%] hover:text-gray-700 hover:scale-105 ease-in duration-300 ">
          <button>
            <RiDiscussFill/>
            
          </button>
        </div>
        
        <div className="  hidden md:block text-green-500 text-4xl hover:text-gray-700 hover:scale-105 ease-in duration-300 ">
          <button>
            <RiWhatsappFill/>
            
          </button>
        </div>

        <div onClick={nav} className=" text-black/70 text-4xl ml-[40%] md:hidden">
          <button>
            <RiAlignJustify className={justify ? "hidden" : "block"}/>
          </button>
          
        </div>

        
       
      </div>  
        <hr />
        <div className=" hidden md:block">
      <div className=" flex mt-3 mx-auto items-center justify-between max-w-[600px] uppercase font-semibold text-gray-600 ">
        

        <div className="nav">
          <NavLink to="" >
            <p>Beisbol</p>
          </NavLink>
        </div>  

        <div className="nav">
          <NavLink to="" >
            <p>Futbol Americano</p>
          </NavLink>
        </div>  

        <div className="nav">
          <NavLink to="" >
            <p>Baloncesto</p>
          </NavLink>
        </div>  

        <div className="nav">
          <NavLink to="" >
            <p>Futbol</p>
          </NavLink>
        </div>  

        </div>
      </div>
      <div className={justify ? " md:hidden fixed top-0 right-0 w-full h-screen bg-black/70" : ""}>
        <div className={justify  ? " md:hidden fixed top-0 right-0 w-[75%] sm:w-[60%] h-screen bg-black/50 p-7 ease-in duration-500" : "fixed right-[-100%] top-0 ease-in duration-500"}>

          <button onClick={nav} className=" ml-[80%] rounded-full p-2 text-black cursor-pointer bg-white text-2xl">
            <RiCloseFill/> 
          </button>

          <div className=" py-5 ">
            <input 
              className=" font-semibold ml-2 border-white text-black bg-white rounded-md py-[7px] w-[220px] px-6 "
              type="text" 
              placeholder="¿Qué estas buscando?"
            />
          </div>

          <div className=" py-10 grid grid-cols-1 gap-5 text-white uppercase">
            <div className="  border-b-2 border-white/70">
              <NavLink to="" >
                <p>Buzos</p>
              </NavLink>
            </div>  

            <div className="  border-b-2 border-white/70">
              <NavLink to="" >
                <p>Remeras</p>
              </NavLink>
            </div>  

            <div className="  border-b-2 border-white/70">
              <NavLink to="" >
                <p>Jeans</p>
              </NavLink>
            </div>  

            <div className="  border-b-2 border-white/70">
              <NavLink to="" >
                <p>Camperas</p>
              </NavLink>
            </div>  

            <div className="  border-b-2 border-white/70">
              <NavLink to="" >
                <p>Accesorios</p>
                
              </NavLink>
            </div>  

          </div>

          
        
          <div className=" flex py-[190px]">
              <button className=" text-white text-4xl ">
                <RiDiscussFill/>
              </button>
              
              <button className=" ml-2  text-green-500 text-4xl hover:text-gray-700 hover:scale-105 ease-in duration-300 ">
              <RiWhatsappFill/>
              </button>
            
          
          </div>

        </div>
      </div>

    </div>
  )
}

export default Navbar