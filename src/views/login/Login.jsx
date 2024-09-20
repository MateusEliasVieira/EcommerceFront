import Input from "../../components/inputs/Input.jsx";
import Button from "../../components/buttons/Button.jsx";
import {useState} from "react";
import {requestLogin} from "../../requests/LoginRequest.js";
import "./css/Login.css"

const Login = () => {
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")
    return (
        <div>
            <Input
                html={"id_input_text_01"}
                label={"Usuário"}
                type={"text"}
                id={"id_input_text_01"}
                placeholder={""}
                action={setUsername}
            />
            <Input
                html={"id_input_password_01"}
                label={"Senha"}
                type={"password"}
                id={"id_input_password_01"}
                placeholder={""}
                action={setPassword}
            />
            <Button
                className={"btn btn-dark"}
                title={"Entrar"}
                action={()=>{
                    requestLogin(username,password)
                }}
            />
        </div>
    )
}

export default Login