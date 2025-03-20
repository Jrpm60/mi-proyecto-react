import React, { useState, useEffect } from 'react';

const Ejemplo1 = () => {
  const[usuario, setUsuario] = useState ({});

 useEffect(() => { 
    fetch('https://jsonplaceholder.typicode.com/users/2')
      .then(response => response.json())
      .then(json => setUsuario(json)); 

      
  },[]); 
  
  return (

    <>

      <h1>Hola Practica 1</h1>
      <p><b>Id :</b> {usuario.id}</p>
      <p><b>Nombre:</b> {usuario.name}</p>
  
   
    </>
  );
};

export default Ejemplo1;