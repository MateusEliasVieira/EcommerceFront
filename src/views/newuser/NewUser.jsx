import {useEffect, useState} from "react";
import Input from "../../components/inputs/Input.jsx";
import Button from "../../components/buttons/Button.jsx";
import Navbar from "../../components/navbar/Navbar.jsx";
import Footer from "../../components/footer/Footer.jsx";
import {requestUserSave} from "../../requests/UserRequest.js";
import "./css/NewUser.css";
import {convertImageToBase64} from "../../utils/HandleImage.js";
import InputPicture from "../../components/inputs/InputPicture.jsx";
import PictureUserDefault from "../../assets/images/user.png"

const NewUser = () => {
    const [isSave, setIsSave] = useState(false);
    const [data, setData] = useState({
        name: "",
        surname: "",
        picture: "",
        dateOfBirth: "",
        phoneAreaCode: "",
        phoneNumber: "",
        email: "",
        username: "",
        password: "",
        cpf: "",
        city: "",
        district: "",
        streetName: "",
        streetNumber: "",
        zipCode: ""
    });

    const handleInputChange = (field, value) => {
        setData((prevState) => ({
            ...prevState,
            [field]: value
        }));
    };

    const handleInputPicture = (e) => {
        convertImageToBase64(e.target.files[0])
            .then((resolve) => {
                setData({...data, picture: resolve})
            })
            .catch((reject) => {
                alert(reject)
            });
    }

    const handleSubmit = async () => {
        const save = await requestUserSave(data);
        setIsSave(save);
    };

    return (
        <div style={{minWidth: "380px", maxWidth: "1200px", margin: "0 auto"}}>
            <Navbar/>
            <div id="box-newuser">

                <img src={data.picture !== "" ? data.picture : PictureUserDefault} width={150} height={150}
                     style={{borderRadius: "50%", display: "block", margin: "10px auto"}} alt={"Profile"}/>

                <h4 style={{color: "#15edc2"}}>
                    {isSave ? "Cadastro realizado com sucesso!" : ""}
                </h4>

                {/* Fieldset para dados pessoais */}
                <fieldset className="form-group">
                    <legend>Dados Pessoais</legend>
                    <div className="row">
                        <div className="col-md-6">
                            <Input
                                html="id_input_text_01"
                                label="Nome"
                                type="text"
                                value={data.name}
                                placeholder=""
                                action={(value) => handleInputChange("name", value)}
                            />
                        </div>
                        <div className="col-md-6">
                            <Input
                                html="id_input_text_02"
                                label="Sobrenome"
                                type="text"
                                value={data.surname}
                                placeholder=""
                                action={(value) => handleInputChange("surname", value)}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <Input
                                html="id_input_date_01"
                                label="Data de Nascimento"
                                type="date"
                                value={data.dateOfBirth}
                                placeholder=""
                                action={(value) => handleInputChange("dateOfBirth", value)}
                            />
                        </div>
                        <div className="col-md-4">
                            <InputPicture
                                html="id_input_text_03"
                                label="Foto (Tamanho máximo de 8MB) .jpeg, .jpg, .png"
                                type="file"
                                placeholder=""
                                action={(e) => handleInputPicture(e)}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <Input
                                html="id_input_text_08"
                                label="CPF"
                                type="text"
                                value={data.cpf}
                                placeholder=""
                                action={(value) => {
                                    handleInputChange("cpf", value)
                                }}
                            />
                        </div>
                        <div className="col-md-3">
                            <Input
                                html="id_input_text_04"
                                label="Código de Área"
                                type="text"
                                value={data.phoneAreaCode}
                                placeholder=""
                                action={(value) => handleInputChange("phoneAreaCode", value)}
                            />
                        </div>
                        <div className="col-md-3">
                            <Input
                                html="id_input_text_05"
                                label="Número de Telefone"
                                type="text"
                                value={data.phoneNumber}
                                placeholder=""
                                action={(value) => handleInputChange("phoneNumber", value)}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <Input
                                html="id_input_email_01"
                                label="E-mail"
                                type="email"
                                value={data.email}
                                placeholder=""
                                action={(value) => handleInputChange("email", value)}
                            />
                        </div>
                        <div className="col-md-6">
                            <Input
                                html="id_input_text_06"
                                label="Nome de Usuário"
                                type="text"
                                value={data.username}
                                placeholder=""
                                action={(value) => handleInputChange("username", value)}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <Input
                                html="id_input_password_01"
                                label="Senha"
                                type="password"
                                placeholder=""
                                value={data.password}
                                action={(value) => handleInputChange("password", value)}
                            />
                        </div>
                    </div>
                </fieldset>

                {/* Fieldset para dados de endereço */}
                <fieldset className="form-group mt-4">
                    <legend>Endereço</legend>
                    <div className="row">
                        <div className="col-md-6">
                            <Input
                                html="id_input_text_09"
                                label="Cidade"
                                type="text"
                                value={data.city}
                                placeholder=""
                                action={(value) => handleInputChange("city", value)}
                            />
                        </div>
                        <div className="col-md-6">
                            <Input
                                html="id_input_text_10"
                                label="Bairro"
                                type="text"
                                value={data.district}
                                placeholder=""
                                action={(value) => handleInputChange("district", value)}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <Input
                                html="id_input_text_12"
                                label="Nome da Rua"
                                type="text"
                                value={data.streetName}
                                placeholder=""
                                action={(value) => handleInputChange("streetName", value)}
                            />
                        </div>
                        <div className="col-md-4">
                            <Input
                                html="id_input_text_13"
                                label="Número da Rua"
                                type="text"
                                value={data.streetNumber}
                                placeholder=""
                                action={(value) => handleInputChange("streetNumber", value)}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <Input
                                html="id_input_text_14"
                                label="CEP"
                                type="text"
                                value={data.zipCode}
                                placeholder=""
                                action={(value) => handleInputChange("zipCode", value)}
                            />
                        </div>
                    </div>
                </fieldset>

                <Button className="btn btn-dark mt-4" title="Enviar" action={handleSubmit}/>
            </div>
            <Footer/>
        </div>
    );
};

export default NewUser;
