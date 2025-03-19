import React, { useState } from 'react';

const AdivinaFruta = () => {

    const [contar, setContar] = useState(0);
    const[mensaje, setMensaje] = useState("");
    const[secreto, setSecreto] = useState("");
    const [adivinar, setAdivinar] = useState ("Platano");

    const handleSuma = () => {
    
        if (contar <= 4) {
            if (secreto === adivinar) {
                setMensaje("Enhorabuena has adivinado")
            } else {
                setMensaje("No has adivinado")
                setContar(prevContar => prevContar + 1);
            }
            
        }else{
            setMensaje("Has llegado al limite")
        }
        
    };

    

    const handleReseteo = () => {
        setMensaje("");
        setSecreto("");
        setContar(0);
    };


    return (
        <div>
            <div>
                <h1>🍎 🍌 🍓 🍊 Adivina la Fruta</h1>
            </div>
            
            <div> {mensaje}</div>
            <input
                onChange={(e) => setSecreto(e.target.value)}
                value = {secreto}
                type="text"
                name="opcion"
                id="opcion"
                placeholder="Teclea tu opcion"/>
            <button onClick={handleSuma}>Prueba suerte....</button> 
            <button onClick={handleReseteo}>Resetear</button>           
            <div>Intentos {contar} de 5 </div>

            
            

        </div>
    );
};

export default AdivinaFruta;