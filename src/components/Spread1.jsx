import React, { useState, useEffect } from 'react';

const Spread1 = () => {
  const[resultado, setResultado] = useState ([1,2,3,4,5]);
  const[nuevo, setNuevo] = useState([0]);

const agregarElemento = () => {
  
  setResultado(resultado => [...resultado, Number(nuevo)])
}

 
return (

    <>
      <h1>Spread1</h1> 

      <input type="number" id="nuevo" name="nuevo" onChange={ (e) => setNuevo(e.target.value)} />
        <div>{nuevo}</div>

      <button onClick={agregarElemento}>Agregar</button>

      {resultado.map(r=> (
        <p>{r}</p>

      ))}  
   
    </>
  );
};

export default Spread1;