import React from 'react';
import {Link} from "react-router-dom";
import logo from "../assets/logo192.png"; // Import logo
import logo1 from "../assets/BS.PNG"; // Import logo
import logo2 from "../assets/80.PNG"; // Import logo
import { useParams } from 'react-router-dom';


    const usuarios = [
        { id: 1, nombre: 'Juan Pérez', edad: 28 },
        { id: 2, nombre: 'Ana García', edad: 34 },
        { id: 3, nombre: 'Carlos López', edad: 22 },
      ];
      
      function Usuarios_din() {
        const {id} = useParams ();
        // TO DO: Obtener el parámetro 'id' de la URL
      
        
        // Buscar el usuario correspondiente al id
        const usuario = usuarios.find(u => u.id === parseInt(id));
      
        if (!usuario) {
          return <h2>Usuario no encontrado</h2>;
        }
      
        return (
          <div>
            <h2>Detalles del Usuario</h2>                  
              
            <p>{usuario.id}</p>
            <p>{usuario.nombre}</p>
            <p>{usuario.edad}</p>
              
          </div>
        );
      }
      
      export default Usuarios_din;

/* 
        <img src={logo} alt="Logo" />
        <img src={logo1} alt="Logo1" />
        <img src={logo2} alt="Logo2" />
 
} */

