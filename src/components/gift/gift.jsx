import '../../assets/css/App.css';
import firstPresent from "../../assets/images/cadeau-1.jpeg";
import secondPresent from "../../assets/images/cadeau-2.jpeg";
import thirdPresent from "../../assets/images/cadeau-3.jpeg";
import fourthPresent from "../../assets/images/cadeau-4.jpeg";
import fifthPresent from "../../assets/images/cadeau-5.jpeg";
import { Link } from 'react-router-dom';

function Cadeau() {
  return (
    <div className="component-indices">
        <div className="all-cards">
            <div className="card">
                <img className="indice" src={firstPresent} alt="premier indice" />
            </div>
            <div className="card">
                <img className="indice" src={secondPresent} alt="second indice" />
            </div>
            <div className="card">
                <img className="indice" src={thirdPresent} alt="troisième indice" />
            </div>
            <div className="card">
                <img className="indice" src={fourthPresent} alt="quatrième indice" />
            </div>
            <div className="card">
                <img className="indice" src={fifthPresent} alt="cinquième indice" />
            </div>
        </div>
        <div className="button">
            <div className="button-indices"><button><Link to="/cadeau">Ok on a compris, mais vous avez des adresses ?</Link></button></div>
        </div>
    </div>
  );
}

export default Cadeau;