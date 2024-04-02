import '../../assets/css/App.css';
import Gifts from "../../components/gift/gift"

function Gift() {
  return (
    <div className="page-indices">
        <div className="background-citation">
            <h3 className="citation">"On va voir comment ça se goupille"</h3>
            <div className="texte">Patrick Hénot - de 1961 à 2024 - Villeneuve d'Ascq</div>
        </div>
        <div className="all-cards">
            <Gifts />
        </div>
    </div>
  );
}

export default Gift;
