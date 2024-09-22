import Input from "../../components/inputs/Input.jsx";
import Button from "../../components/buttons/Button.jsx";
import { useState } from "react";
import { requestLogin } from "../../requests/LoginRequest.js";
import "./css/Login.css";
import Navbar from "../../components/navbar/Navbar.jsx";
import Footer from "../../components/footer/Footer.jsx";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="min-vh-100 d-flex flex-column">
            <Navbar />
            <div className="container flex-grow-1 mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div id="login-box" className="card p-4">
                            <h2 className="text-center">Login</h2>
                            <div className="mb-3">
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
                            <div className="mb-3">
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
                                className={"btn btn-dark w-100"}
                                title={"Entrar"}
                                action={() => {
                                    requestLogin(username, password);
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Login;
