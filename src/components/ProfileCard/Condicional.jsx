import React, { useState } from 'react';
import {Link} from "react-router-dom";

// conditional rendering 

const Condicional = () => {

    const x = true;
    const y = true;
    const usuario = {nombre:"Jon" , edad:30};

    
    return (
        <>
            <h1>Nueva Pagina</h1> 

            {(x || y ) ?
                    <p> X o Y Is TRUE </p> : <p> FALSO </p>}

            {x && <p>Shortcut TRUE</p>}

            <button disabled={!x}>Click me</button>

            {usuario?.nombre ? 

                (<p>Bienvenido {usuario.nombre}<p/>):

                (<p>{usuario.nombre} Not logged In </p>)
            }
                
        </>
    );
}
    
export default Condicional;