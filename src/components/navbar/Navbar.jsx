import CartSVG from "../svg/CartSVG.jsx";
import Item from "./Item.jsx";
import {mycart} from "../../urls/Urls.js";

const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><h1
                    style={{color: "#15edc2", background: "#111212", padding: "5px"}}>Café e Deus</h1></a>
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
                        <Item link={"#"} title={"Login"}/>
                        <Item link={"#"} title={"Cadastre-se"}/>
                        <li className="nav-item">
                            <a href={mycart}>
                                <CartSVG width={25} height={25} color={"#15edc2"}/>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;


