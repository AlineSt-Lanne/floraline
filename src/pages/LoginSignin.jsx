import "./styles/LoginSignin.css";
import { Link } from "react-router-dom";
import BackgroundImage from "../assets/background-flowers.svg"
import BigLogo from "../assets/big-logo.svg"
import ButtonGetStarted from "../components/LoginSignin/ButtonGetStarted"
import ButtonHaveaAccount from "../components/LoginSignin/ButtonHaveaAccount"

function LoginSignin() {
    return (
        <div className="container-loginsignin" style={{ backgroundImage: `url(${BackgroundImage})` }}>
            <div className="container-logo-loginsignin">
                <img className="logo-loginsignin" src={BigLogo} alt="logo" />
            </div>
            <div className="container-white-loginsignin">
                <h1 className="title-loginsignin">Hi, welcome !</h1>
                <div className="container-buttons-loginsignin">
                    <div className="buttoncontinue-loginsignin">
                        <div className="buttongetstarted-loginsignin">
                            <ButtonGetStarted />
                        </div>
                        <div className="buttonhaveaacount-loginsignin">
                            <Link to="/login">
                                <ButtonHaveaAccount />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginSignin;