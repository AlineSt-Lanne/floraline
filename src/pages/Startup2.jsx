import "./styles/Startup2.css";
import { Link } from "react-router-dom";
import BackgroundImage from "../assets/background-flowers.svg";
import SmallLogo from "../assets/small-logo.svg"
import InfoBouquet from "../assets/info-bouquet.svg"
import InfoCarnet from "../assets/info-carnet.svg"
import InfoGift from "../assets/info-gift.svg"
import ButtonContinue from "../components/Startup/ButtonContinue"

function Startup2() {
    return (
        <div className="container-startup2" style={{ backgroundImage: `url(${BackgroundImage})` }}>
            <div className="container-logo-startup2">
                <img className="logo-startup2" src={SmallLogo} alt="logo" />
            </div>
            <div className="containerwhite-startup2">
                <h1 className="title-startup2">Allows you to</h1>
                <div className="container-infos-startup2">
                    <div className="infos-startup2">
                        <img className="info-startup2" src={InfoBouquet} alt="bouquet" />
                        <p className="text-startup2">Composing your own bouquet</p>
                    </div>
                    <div className="infos-startup2">
                        <img className="info-startup2" src={InfoCarnet} alt="bouquet" />
                        <p className="text-startup2">Don't miss the important dates</p>
                    </div>
                    <div className="infos-startup2">
                        <img className="info-startup2" src={InfoGift} alt="bouquet" />
                        <p className="text-startup2">Track orders in real time</p>
                    </div>
                </div>
                <div className="buttoncontinue-startup2">
                    <Link to="/loginorsignin">
                        <ButtonContinue />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Startup2;