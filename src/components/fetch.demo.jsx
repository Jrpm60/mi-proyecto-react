import React, { useState } from 'react';

const Infouser = () => {
  const [id, setId] = useState(1);
  const [error, setError] = useState("");
  const [usuario, setUsuario] = useState({});
  const [post, setPost] = useState([]);

  const handleDatos = () => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Usuario no encontrado.');
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
        setUsuario(data);
        setError(""); // Clear any previous errors
      })
      .catch(err => {
        setError(err.message);
        setUsuario({}); // Clear user data on error
        setPost([]); // Clear posts on error
      });
  };

  const handelPost = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`) // Corrected URL
      .then(response => {
        if (!response.ok) {
          throw new Error('Publicaciones no encontradas.');
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
        setPost(data);
        setError(""); // Clear any previous errors
      })
      .catch(err => {
        setError(err.message);
        setPost([]); // Clear posts on error
      });
  };

  return (
    <>
      <h1>Obtener Usuario y Ver Publicaciones</h1>
      <input
        onChange={(e) => setId(e.target.value)}
        type="number"
        name="id"
        id="id"
        placeholder="Ingrese el ID del usuario"
      />
      <input onClick={handleDatos} type="button" value="Obtener Usuario" />

      {error && <div style={{ color: 'red' }}>Error: {error}</div>}

      <div>
        <h3>
          <b>USUARIO:</b>
        </h3>
        <b>Nombre:</b> {usuario.name}<br />
        <b>E-Mail:</b> {usuario.email}<br />
        <b>Telefono:</b> {usuario.phone}<br />
        <b>Pagina WEB:</b> {usuario.website}<br />

        <hr />

        <input onClick={handelPost} type="button" value="Ver Posts" />

        {post.length > 0 && (
          <ul>
            {post.map((p) => (
              <li key={p.id}>
                <b>{p.title}</b>
                <p>{p.body}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default Infouser;