import React, { useState, useEffect } from 'react';

function CambiarFondo() {
  const [bgColor, setBgColor] = useState('#ffffff'); // Default white

  // Cuando se cambia el valor de bgColor, el efecto secundario
  // es que se cambia el background color del documento entero
  // por ejemplo: document.body.style.backgroundColor = ...

  useEffect(() => {
    document.body.style.backgroundColor = bgColor;
  }, [bgColor]); 

  return (
    
    <div
      style={{
        backgroundColor: bgColor, 
        padding: '20px',
        textAlign: 'center',
      }}
    >
      <h1>El fondo de este componente cambia!</h1>
      <button onClick={() => setBgColor('#39ff14')}>Cambiar color</button>
      <button onClick={() => setBgColor('#008f39')}>Restaurar color</button>
    </div>
  );
}

export default CambiarFondo;