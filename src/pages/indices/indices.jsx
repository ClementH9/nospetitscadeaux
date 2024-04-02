import '../../assets/css/App.css';
import Hints from "../../components/hints/hints"

function Indices() {
  return (
    <div className="page-indices">
        <div className="background-citation">
            <h3 className="citation">"Vous voulez des indices ? Vous allez avoir des indices"</h3>
            <div className="texte">Clément Hénot - 2024 - Villeneuve d'Ascq</div>
        </div>
        <div className="all-cards">
            <Hints />
        </div>
    </div>
  );
}

export default Indices;
