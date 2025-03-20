import React from "react";
import { useSearchParams } from "react-router-dom";

function BuscadorResultadoPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q"); // Leer el querystring

    const coches = ['BMW', 'FERRARI', 'TOYOTA', 'BMW X1'];

    const cochesFiltrados = coches.filter(coche=> coche.includes(query));

    return (
        <>
        <h1>Buscador</h1>   
        <ul>
        {cochesFiltrados.length > 0 ? (
          cochesFiltrados.map((coche, index) => <li key={index}>{coche}</li>)
        ) : (
          <p>No se encontraron resultados.</p>
        )}
      </ul>

        </>
    )

}

export default BuscadorResultadoPage;