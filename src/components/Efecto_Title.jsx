import React, { useState, useEffect } from 'react';

function Efecto_Title() {
  const [title, setTitle] = useState("React App");

  // TO DO Cambiar el titulo del documento cuando haya un cambio al estado 'title' (pista: document.title=)

  useEffect(() => {
    document.title = title; 
  }, [title]);

  return (
    <>
      <h1>Cambiar el titulo de la página!</h1>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Introducir un nuevo titulo..."
      />
    </>
  );
}

export default Efecto_Title;