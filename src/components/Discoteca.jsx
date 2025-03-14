import React, { useState } from 'react';

const Discoteca = () => {

    const [input, setInput]= useState(0);
    const [mensaje,setMensaje]=useState("");

    const handleVerificar = () => {


    const handleVerificarEdad = () => {
        if (input >= 18) {
            setMensaje("Acceso PROHIBIDO");
        } else {
            setMensaje("Acceso PROHIBIDO");
        }
    };


    return (
        <>
            <input type="number" onChange={handleVerificar} />
            <button onClick={VerificarEdad}>Comprobar</button>
            <div>${mensaje}</div>
     
        </>
    );
};

export default Discoteca;