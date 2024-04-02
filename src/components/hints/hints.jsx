import '../../assets/css/App.css';
import firstHint from "../../assets/images/indice-1.jpeg";
import secondHint from "../../assets/images/indice-2.jpeg";
import thirdHint from "../../assets/images/indice-5.jpeg";
import fourthHint from "../../assets/images/indice-6.jpeg";
import fifthHint from "../../assets/images/indice-8.jpeg";
import { Link } from 'react-router-dom';

function Indices() {
  return (
    <div className="component-indices">
        <div className="all-cards">
            <div className="card">
                <img className="indice" src={firstHint} alt="premier indice" />
            </div>
            <div className="card">
                <img className="indice" src={secondHint} alt="second indice" />
            </div>
            <div className="card">
                <img className="indice" src={thirdHint} alt="troisième indice" />
            </div>
            <div className="card">
                <img className="indice" src={fourthHint} alt="quatrième indice" />
            </div>
            <div className="card">
                <img className="indice" src={fifthHint} alt="cinquième indice" />
            </div>
        </div>
        <div className="button">
            <div className="button-indices"><button><Link to="/cadeau">Nan vraiment on ne sait toujours pas</Link></button></div>
        </div>
    </div>
  );
}

export default Indices;
