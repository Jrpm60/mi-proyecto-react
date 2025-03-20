import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css"; // Import CSS module


const Navbar = () => {
  return (
    <nav className={styles.navbar}>    

      <ul className={styles.navLinks}>

        <li><Link to="/">Home</Link></li>
        <li><Link to="/AdivinaFruta">Adivina la Fruta</Link></li>
        <li><Link to="/contactar">Contactar</Link></li>
        <li><Link to="/usuarios">Usuarios</Link></li>
        <li><Link to="/dashBoard">DashBoard</Link></li>
        <li><Link to="/admin">Administrador</Link></li>
        
      </ul>
    </nav>
  );
};

export default Navbar;