import './assets/css/App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="global">
      <div className="texte-cadeau">
        <h3 className="citation">"Mieux vaut tard que jamais"</h3>
        <div className="texte">Cette phrase correspond très bien à ce cadeau d'anniversaire... 2023 ! On est en 2024 mais vous allez évidemment pouvoir en profiter comme il se doit... En attendant le cadeau 2024 qui n'arrivera pas en 2025 !</div>
        <div className="texte">Mais trève de plaisanterie, place à la découverte. Cliquez sur le bouton ci-dessous pour obtenir quelques indices !</div>
      </div>
      <div className="button">
        <div className="button-indices"><button><Link to="/indices">Bon allez, faites péter les indices !</Link></button></div>
      </div>
    </div>
  );
}

export default App;
