import logo from './logo.svg';
import './App.css';
import Bienvenido from './components/Bienvenido/Bienvenido';

function App() {
    const imagenTarjeta = "😊";
    const nombreDeTarjeta = "Maria";
    const edadDeTarjeta = 48 ;
    const comentarioDeTarjeta = 48 ;



  return (
    <div className="App">
      <header className="App-header">

        <ProfileCard imagen={imagenTarjeta} nombre={nombreDeTarjeta} edad={edadDeTarjeta} comentario={comentarioDeTarjeta}/>

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
