import React from "react";
import { useSearchParams } from "react-router-dom";

function BuscadorLibrosRes() {
  const [searchParams] = useSearchParams();
  const queryt = searchParams.get("titulo"); // Leer el querystring
  const querya = searchParams.get("autor"); // Leer el querystring

  const libros = [
    { titulo: "El código limpio", autor: "Robert C. Martin" },
    { titulo: "Introducción a la programación", autor: "John Smith" },
    { titulo: "JavaScript para principiantes", autor: "Jane Doe" },
    { titulo: "Patrones de diseño", autor: "Erich Gamma" }
  ];

    const librosFiltrados = libros.filter(libro=> libro.titulo.includes(queryt) 
      || libro.autor.includes(querya));

    console.log(librosFiltrados);

    return (
        <>
        <h1>Buscador</h1>   
        <ul>
        {librosFiltrados.length > 0 ? (
          librosFiltrados.map((libro, index) => <li key={index}>{libro.titulo} / {libro.autor}</li>)
        ) : (
          <p>No se encontraron resultados.</p>
        )}
      </ul>

        </>
    )

}

export default BuscadorLibrosRes;