import Input from "../../components/inputs/Input.jsx";
import Button from "../../components/buttons/Button.jsx";
import {useState} from "react";
import {requestLogin} from "../../requests/LoginRequest.js";
import "./css/Login.css";
import Navbar from "../../components/navbar/Navbar.jsx";
import Footer from "../../components/footer/Footer.jsx";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div style={{minWidth: "380px", maxWidth: "1200px", height:"100vh", margin: "0px auto"}}>
            <Navbar/>
            <div id="login-box">
                <h2>Login</h2>
                <div className="input-wrapper">
                    <Input
                        html={"id_input_text_01"}
                        label={"Usuário"}
                        type={"text"}
                        value={username}
                        id={"id_input_text_01"}
                        placeholder={"Digite seu usuário"}
                        action={setUsername}
                    />
                </div>
                <div className="input-wrapper">
                    <Input
                        html={"id_input_password_01"}
                        label={"Senha"}
                        type={"password"}
                        value={password}
                        id={"id_input_password_01"}
                        placeholder={"Digite sua senha"}
                        action={setPassword}
                    />
                </div>
                <Button
                    className={"btn btn-dark"}
                    title={"Entrar"}
                    action={() => {
                        requestLogin(username, password);
                    }}
                />
            </div>
            <Footer/>
        </div>
    );
};

export default Login;
