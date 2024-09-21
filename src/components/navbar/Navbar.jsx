import CartSVG from "../svg/CartSVG.jsx";
import Item from "./Item.jsx";
import {home, mycart, newuser} from "../../urls/Urls.js";
import {useEffect, useState} from "react";
import {login} from "../../urls/Urls.js";

const Navbar = () => {

    const [loginJson,setLoginJson]=useState(null)

    useEffect(() => {
        const loginLocalStorage = JSON.parse(localStorage.getItem("login"))
        if(loginLocalStorage !== "" && loginLocalStorage !== null && loginLocalStorage !== undefined){
            setLoginJson(loginLocalStorage)
        }
    }, []);

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href={home}><h4
                    style={{color: "#15edc2", background: "#1e1f1f", padding: "10px", borderRadius:"15px 0px 15px 0px"}}>Ipastore</h4></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <Item link={"#"} title={"Camisas"}/>
                        <Item link={"#"} title={"Blusas"}/>
                        <Item link={"#"} title={"Calças"}/>
                        <Item link={"#"} title={"Bonés"}/>
                    </ul>

                    <ul className="navbar-nav ms-auto">
                        {
                            loginJson ? <Item link={"#"} title={"Minha Conta"}/> : <> <Item link={login} title={"Login"}/> <Item link={newuser} title={"Cadastre-se"}/> </>
                        }
                        <li className="nav-item">
                            <a href={mycart}>
                                <CartSVG width={30} height={30} color={"#15edc2"}/>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;


