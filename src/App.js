
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Navbar from "./Components/NavBar/Navbar";
import Products from "./Components/Products/Products";
import Detail from "./Pages/Detail";



function App() {
  return (
   <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Products/>} />
      <Route path="Detalle" element={<Detail/>} />
    </Routes>
   
   
   </BrowserRouter>
  );
}

export default App;
