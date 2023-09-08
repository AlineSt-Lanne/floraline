import "./styles/Startup1.css";
import { Link } from "react-router-dom";
import BackgroundImage from "../assets/background-flowers.svg"
import BigLogo from "../assets/big-logo.svg"
import ButtonContinue from "../components/Startup/ButtonContinue"

function Startup1() {
    return (
        <div className="container-startup1" style={{ backgroundImage: `url(${BackgroundImage})` }}>
            <div className="container-logo-startup1">
                <img className="logo-startup1" src={BigLogo} alt="logo" />
            </div>
            <div className="buttoncontinue-startup1">
                <Link to="/presentation">
                    <ButtonContinue />
                </Link>
            </div>
        </div>
    );
}

export default Startup1;