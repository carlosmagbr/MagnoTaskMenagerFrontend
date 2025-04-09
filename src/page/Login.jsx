import CustomButton from "../components/CustomButton";
import "./Login.scss";

const Login = () => {
    return (
        <div className="login-container">
            <div className="title">
                <h1>Magno's</h1>
                <p>TaskMenager</p>
            </div>
            <div className="button-container">
                <CustomButton> Entrar </CustomButton>
            </div>
        </div>
    );
};

export default Login;
