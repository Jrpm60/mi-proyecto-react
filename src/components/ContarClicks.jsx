import React, { useState } from 'react';

const ContarClicks = () => {

    const [contar, setContar] = useState(0);
    const[mensaje, setMensaje] = useState("");

    const handleSuma = () => {
        if (contar === 9) {
            setMensaje("Has llegado al limite")
        }
        console.log('click')
        setContar(prevContar => prevContar + 1);
    };

    const handleResta = () => {
        console.log('click')
        setContar(prevContar => prevContar - 1);
    };

    const handleReseteo = () => {
        console.log('click')
        setContar(0);
    };





    return (
        <div>
            <div>Resultado {contar} clicks</div>
            <div> {mensaje}</div>
            <button onClick={handleSuma}>Haz clic Para SUMAR</button>
            <button onClick={handleResta}>Haz clic Para RESTAR</button><br/>
            <button onClick={handleReseteo}>Resetear</button>

        </div>
    );
};

export default ContarClicks;