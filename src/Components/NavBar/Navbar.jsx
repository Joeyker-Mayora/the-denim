import { NavLink } from "react-router-dom";
import { 
  RiAlignJustify, 
  RiCloseFill, 
  RiDiscussFill, 
  RiSearchLine,
  RiWhatsappFill
} from "react-icons/ri";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="fixed top-0 left-0 w-full p-3 z-10 bg-white shadow-lg">
      
      <div className="flex items-center justify-between max-w-screen-xl mx-auto">
        <NavLink to="/">
          <img 
            className="w-[150px] rounded-md"
            src="img/I.jpeg" 
            alt="Logo" 
          />
        </NavLink>

        <div className="relative hidden md:block w-1/2">
          <input 
            className="font-semibold border-b outline-none border-gray-300 text-black bg-white rounded-md py-[10px] px-6 w-full"
            type="text" 
            placeholder="¿Qué estás buscando?"
          />
          <RiSearchLine className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-2xl cursor-pointer hover:text-gray-600 transition-colors duration-300" />
        </div>

        
        <div className="hidden md:flex space-x-6 items-center text-gray-600 text-2xl">
          <button 
            className="hover:text-gray-800 transition-colors duration-300"
            aria-label="Chat">
            <RiDiscussFill />
          </button>

          <button 
            className="text-green-500 text-3xl sm:text-4xl hover:text-gray-700 transition-colors duration-300"
            onClick={() => window.open('https://wa.me/+5491127029297', '_blank')} 
            aria-label="Contactar por WhatsApp"
          >
            <RiWhatsappFill />
          </button>
        </div>

        
        <div className="md:hidden text-gray-700 text-4xl" onClick={toggleMenu}>
          <RiAlignJustify className={isMenuOpen ? "hidden" : "block"} />
        </div>
      </div>

      <hr className="border-gray-200" />

     
      <div className="hidden md:block">
        <div className="flex mt-3 mx-auto items-center justify-center space-x-8 text-gray-600 uppercase font-semibold text-sm">
          {['Beisbol', 'Futbol Americano', 'Baloncesto', 'Futbol'].map((item, idx) => (
            <div key={idx} className="nav hover:text-gray-800 transition-colors duration-300">
              <NavLink to="#">
                <p>{item}</p>
              </NavLink>
            </div>
          ))}
        </div>
      </div>

      
      <div className={isMenuOpen ? "md:hidden fixed top-0 right-0 w-full h-screen bg-black/70" : ""}>
        <div className={isMenuOpen ? "md:hidden fixed top-0 right-0 w-[75%] sm:w-[60%] h-screen bg-black/50 p-7 ease-in duration-500" : "fixed right-[-100%] top-0 ease-in duration-500"}>
          
          <button onClick={toggleMenu} className="ml-[80%] rounded-full p-2 text-black cursor-pointer bg-white text-2xl">
            <RiCloseFill />
          </button>

         
          <div className="py-5">
            <input 
              className="font-semibold ml-2 border-white text-black bg-white rounded-md py-[7px] w-[220px] px-6"
              type="text" 
              placeholder="¿Qué estás buscando?"
            />
          </div>

          
          <div className="py-10 grid grid-cols-1 gap-5 text-white uppercase">
            {['Buzos', 'Remeras', 'Jeans', 'Camperas', 'Accesorios'].map((item, idx) => (
              <div key={idx} className="border-b-2 border-white/70">
                <NavLink to="#">
                  <p>{item}</p>
                </NavLink>
              </div>
            ))}
          </div>

          
          <div className="flex py-[190px] space-x-5 justify-center">
            <button className="text-white text-4xl hover:text-gray-400 transition-colors duration-300">
              <RiDiscussFill />
            </button>

            <button 
              className="text-green-500 text-4xl hover:text-gray-400 transition-colors duration-300"
              onClick={() => window.open('https://wa.me/+5491127029297', '_blank')}
              aria-label="Contactar por WhatsApp"
            >
              <RiWhatsappFill />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

