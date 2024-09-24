import Navbar from "../../components/navbar/Navbar.jsx";
import Footer from "../../components/footer/Footer.jsx";
import TableProductCart from "./tableProduct/TableProductCart.jsx";
import {useEffect, useState} from "react";
import Etapa1 from "../../assets/images/etapa1.png"
import "./css/Cart.css"

const Cart = () => {
    const [cart, setCart] = useState([])

    useEffect(() => {
        let cart = JSON.parse(localStorage.getItem("cart"))
        setCart(cart)
    }, []);

    return (
        <div id={"div-container-cart"}>
            <Navbar/>
            <div id={"div-description-cart"}>
                <h1>Carrinho</h1>
                <img width={300} src={Etapa1} alt={"Etapa 1"}/>
            </div>
            <TableProductCart
                cart={cart}
            />
            <Footer/>
        </div>
    )
}

export default Cart