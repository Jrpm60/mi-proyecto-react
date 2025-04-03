import React, { useState } from "react";

const Calculadora = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [resultado, setResultado] = useState(null);
  const [media, setMedia] = useState(0);
  const [calificacion, setCalificacion] = useState("");
  const [nota, setNota] = useState(0);

  // Funcion para sumar
  const sumar = (a, b) => {
    return a + b;
  };

  // Funcion para restar
  const restar = (a, b) => {
    return a - b;
  };

  // Funcion para multiplicar
  const multiplicar = (a, b) => {
    return a * b;
  };

  // Funcion para dividir
  const dividir = (a, b) => {
    return a / b;
  };

  // Funcion - clasificar numero como 'positivo', 'negativo' o 'zero'
  const clasificarResultado = (resultado) => {
    if (resultado < 0) {
      return "Negativo";
    } else if (resultado > 0) {
      return "Positivo";
    } else {
      return "Neutro";
    }
  };

  // Funcion para calcular la media de un Array - avanzado
  const calcularMedia = () => {
    let notas = [1, 10, 20, 25, 16, 12];
    let suma = 0;

    for (let index = 0; index < notas.length; index++) {
      suma += notas[index];
    }
    setMedia(suma / notas.length);
  };

  // Funcion para clasificar una nota - usar switch
  // Si la nota >= 90 => 'A'
  // Si la nota >= 80 => 'B'
  // Si la nota >= 50 => 'C'
  // Si la nota <= 49 => 'Suspenso'
  const clasificarNota = (nota) => {
    switch (true) {
      case nota >= 90:
        return "A";
      case nota >= 80:
        return "B";
      case nota >= 50:
        return "C";
      default:
        return "Suspenso";
    }
  };

  // Manejo de los clicks de botones
  const sumarNumeros = () => {
    setResultado(sumar(num1, num2)); // Usar la funcion para sumar
  };

  const restarNumeros = () => {
    setResultado(restar(num1, num2)); // Usar la funcion para restar
  };

  const multiplicarNumeros = () => {
    setResultado(multiplicar(num1, num2)); // Usar la funcion para restar
  };

  const dividirNumeros = () => {
    setResultado(dividir(num1, num2)); // Usar la funcion para restar
  };

  return (
    <div>
      <h2>Matematicas Basicas</h2>

      <div>
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(Number(e.target.value))}
          placeholder="Introducir el primer numero"
        />
      </div>
      <div>
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(Number(e.target.value))}
          placeholder="Introducir el segundo numero"
        />
      </div>

      <button onClick={sumarNumeros}>+</button>
      <button onClick={restarNumeros}>-</button>
      <button onClick={multiplicarNumeros}>*</button>
      <button onClick={dividirNumeros}>/</button>

      {resultado !== null && <h3>Resultado: {resultado}</h3>}

      {resultado !== null && (
        <h3>Clasificacion Resultado : {clasificarResultado(resultado)}</h3>
      )}

      <button onClick={calcularMedia}>Calcular Media</button>

      {media !== 0 && <h3>Media: {media}</h3>}

      <input
        type="number"
        value={nota}
        onChange={(e) => {
          setNota(Number(e.target.value));
          setCalificacion(clasificarNota(Number(e.target.value))); // Actualizar calificación al cambiar nota
        }}
        placeholder="Introducir tu Nota"
      />

      {nota !== null && <h3>Calificacion: {calificacion}</h3>}
    </div>
  );
};

export default Calculadora;