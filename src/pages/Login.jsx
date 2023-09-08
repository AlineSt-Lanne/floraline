import "./styles/Login.css";
import BackgroundImage from "../assets/background-flowers.svg"
import ButtonReturn from "../assets/btn-return.svg"
import IconGoogle from "../assets/icon_google.svg"
import IconFacebook from "../assets/icon_facebook.svg"
import IconApple from "../assets/icon_apple.svg"
import ButtonLogin from "../components/LoginSignin/ButtonLogin"

function Login() {
    return (
        <div className="container-login" style={{ backgroundImage: `url(${BackgroundImage})` }}>
            <div className="header-login">
                <button className="logo-login" type="button">
                    <img className="logo-login" src={ButtonReturn} alt="" />
                </button>
            </div>
            <div className="containerwhite-login">
                <h1 className="title-login">Nice to see you again !</h1>
                <h3 className="title2-login">Sign in to continue</h3>
                <div className="formulaire-login">
                    <form className="formulaire-input-login">
                        <div className="title-input-login">Email *</div>
                        <input
                            className="inputlogin"
                            type="text"
                            name="email"
                            id="email"
                            placeholder="example@domain.com" />
                        <div className="title-input-login">Password *</div>
                        <input
                            className="inputlogin"
                            type="text"
                            name="password"
                            id="password"
                            placeholder="Your password" />
                    </form>
                </div>
                <div className="lien-forgotpassword-login">
                    <div className="login-texte-question">Forgot your password ?</div>
                    <div className="login-texte-panic">Don't panic</div>
                </div>
                <div className="buttonlogin-login">
                        <ButtonLogin />
                </div>
                <div className="login-separation">
                    <div className="separation-trait1"></div>
                    <div className="separation-text">or</div>
                    <div className="separation-trait2"></div>
                </div>
                <div className="createaccount-socialnetworks">
                    <div className="socialnetworks-text">Social Media Login</div>
                    <div className="socialnetworks-icons">
                        <img className="logo-google-login" src={IconGoogle} alt="logo-google" />
                        <img className="logo-facebook-login" src={IconFacebook} alt="logo-facebook" />
                        <img className="logo-apple-login" src={IconApple} alt="logo-apple" />
                    </div>
                </div>
                <div className="lien-createaccount-login">
                    <div className="login-texte-question2">New here ?</div>
                    <div className="login-texte-panic">Create your account</div>
                </div>
            </div>
        </div>
    );
}

export default Login;