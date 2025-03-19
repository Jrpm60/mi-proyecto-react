import React, {useEffect, useState} from "react";

const Efecto1 = () => {

    const[contador, setContador] = useState (0);

    console.log('Renderizado 1');

        useEffect(()=> {
            fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => console.log(json))
        },[contador]);

    console.log('Renderizado 2');

    return (

        <>
            <h1>Hola, Efecto !</h1>
            <button onClick={() => setContador(contador+1)}>Pincha</button>
              
        </>
    )
}

export default Efecto1;