import React, { useState } from 'react';
import styles from './Login.module.css'; // Import the CSS module

const Login = () => {
  // Qué más variables de estado hace falta ...?

  const [loggedIn, setLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [usuario, setUsuario] = useState('');
  const [pasword, setPasword]= useState('');
  const [intentos, setIntentos] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();        
    
    if (usuario === 'pp' && pasword === '11') {
        setLoggedIn(true);
        setErrorMessage('');
      } 
      else {
        setLoggedIn(false);
        setErrorMessage('Credenciales incorrectas');
        setIntentos(prevIntentos => prevIntentos + 1);

      }


    };

  return (
    
    <div className={styles.loginForm}>

      {loggedIn ?

        <p>Has iniciado sesion correctamente</p> 
        :
        <div>
            <h3>Inicio de Sesion</h3>

            <form className={styles.loginForm} onSubmit={handleSubmit}>

            <input 
                placeholder='Usuario'
                type="text" 
                name="usuario" 
                id="usuario" 
                onChange = {(e) => setUsuario(e.target.value)}
                className={styles.inputField}
                required/>

            <input 
                placeholder='Contraseña'
                type="password" 
                name="pasword" 
                id="pasword" 
                onChange = {(e) => setPasword(e.target.value)}
                className={styles.inputField}
                required/>

            <button type="submit" className={styles.button}>Login</button>

            {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
        
          </form>
        </div>
      }
  
    </div>
  );

};

export default Login;