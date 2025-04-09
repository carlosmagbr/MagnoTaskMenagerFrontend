import { useNavigate } from "react-router-dom";

import CustomButton from "../components/CustomButton";
import "./Login.scss";

const Login = () => {
    const navigate = useNavigate()

    const handleSignInClick = () =>{
        navigate('/')
    }

    return (
        <div className="login-container">
            <div className="title">
                <h1>Magno's</h1>
                <p>TaskMenager</p>
            </div>
            <div className="button-container">
                <CustomButton onClick={handleSignInClick}> Entrar </CustomButton>
            </div>
        </div>
    );
};

export default Login;
