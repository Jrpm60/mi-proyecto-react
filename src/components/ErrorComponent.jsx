import React, { useState } from 'react';

const ErrorComponent = () => {
  const [error, setError] = useState(null);
  const [edad, setEdad] = useState(18);

  const handleClick = () => {
    try {
      if(edad<=0 ) {
        throw new Error('Something went wrong! This is a simulated error.');
        }

    } catch (err) {
      console.log(err);
      console.log('Error message:', err.message);  
      console.log('Error name:', err.name); 
      console.log('Error stack:', err.stack); 
      setError(err.message);
    }
  };

  return (
    <div>
      <h1>Simulating an Error in React</h1>

        <input 
            type="number" 
            name="edad" 
            id="edad" 
            value={edad}
            onChange = {(e) => setEdad(e.target.value)}/>
        

      <button onClick={handleClick}>Simulate Error</button>
      <div style={{ color: 'red' }}>Error: {error}</div>
    </div>
  );
};

export default ErrorComponent;



/* ACTIVIDAD:

  Implementar un error al calcular 2 numeros. Por ejemplo:
  let result = 10 / 0;

  if (!isFinite(result)) {
    throw new Error('Cannot divide by zero');
  }

  // Conseguir los 2 numeros del usuario, a través del input type=number

*/