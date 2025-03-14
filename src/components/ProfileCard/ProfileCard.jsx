import React from 'react';
import styles from './ProfileCard.module.css'

const ProfileCard = ({imagen, nombre, edad, comentario}) =>{


    return ( 
        <>
        <div className={styles.card} >
        <h1 className={styles.card}> {nombre}  {edad}  {comentario}</h1>
        <img src={imagen} alt="" />
    
        </div>

        </> 
    )
}

export default ProfileCard;