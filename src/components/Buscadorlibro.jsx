import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

{/*

 Buscador con URL - Incluir en el App.js:
 <Route path="/buscar" element={<BuscadorResultadoPage />} />

  encodeURIComponent = caracteres especiales &, =, ?, #, /, ... se cambia a una representacion de URL. Por ejemplo:
  & → %26
  ? → %3F
  = → %3D
  # → %23
  / → %2F
  / → %2F
*/}

function Buscadorlibro() {
  const [querya, setQuerya] = useState("");
  const [queryt, setQueryt] = useState("");

  const navigate = useNavigate();

  const handleBuscar = () => {
    if (querya.trim() || queryt.trim() ) {
      navigate(`/buscar?titulo=${encodeURIComponent(queryt)}&autor=${encodeURIComponent(querya)}`);
    }
  };

  return (
    <div>
      <h1>Buscar Libros</h1>
      <input
        type="text"
        value={queryt}
        onChange={(e) => setQueryt(e.target.value)}
        placeholder="Escribir titulo aqui"
      /><br/>

      <input
        type="text"
        value={querya}
        onChange={(e) => setQuerya(e.target.value)}
        placeholder="Escribir Autor aqui"
      /><br/>

      <button onClick={handleBuscar}>Buscar</button>




    </div>
  );
}

export default Buscadorlibro;