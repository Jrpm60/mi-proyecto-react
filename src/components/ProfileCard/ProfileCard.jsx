import React from 'react';
import styles from './ProfileCard.module.css'



const ProfileCard = ({imagen, nombre,edad, comentario}) =>{

    //const numeros = [1, 3, 8, 7, 9, 18]

    const handleClick = () => {
        console.log('Hooooooola');
    };

    return ( // solo devuelve 1 elemento por eso lo encapsulamos con <>  </>
        <>
        <h1 className={styles.titulo}>{nombre} Edad {edad} </h1>
    
        <p className={styles.parrafo}>Aqui empieza la aventura....</p>

        {numeros.map((numero, index) => (
            <p key={index}>{numero}</p>
        ))}

        <button onClick={handleClick}>Click ME</button>
       

        </> 
    )
}

export default ProfileCard;