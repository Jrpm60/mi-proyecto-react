import './App.css';
import {Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Contactar from "./pages/Contactar";
import Usuarios_din from "./pages/Usuarios_din";
import Usuarios from "./pages/Usuarios";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./utils/ProtectedRoute";
import BuscadorResultadoPage from "./pages/BuscadorResultadoPage";
import BuscadorLibrosRes from "./pages/BuscadorLibrosRes";



function App() {
 
  return (
    <>
    <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactar" element={<Contactar />} />
        <Route path="/Usuarios_din/:id" element={<Usuarios_din />} />
        <Route path="/Usuarios" element={<Usuarios />} />

        <Route
          path="/dashboard"
          element={<ProtectedRoute element={<Dashboard />} />}/>

        <Route path="/buscar" element={<BuscadorLibrosRes />} />



      </Routes>
  
    </>
  );
}

export default App;

