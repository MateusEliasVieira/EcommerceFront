import Navbar from "../../components/navbar/Navbar.jsx";
import Footer from "../../components/footer/Footer.jsx";
import TableProductCart from "./tableProduct/TableProductCart.jsx";
import {useEffect, useState} from "react";
import Camisa1 from "../../assets/images/camisa1.jpeg"
import Camisa2 from "../../assets/images/camisa2.jpeg"
import Etapa1 from "../../assets/images/etapa1.png"
import "./css/Cart.css"

const Cart = () => {
    const [quantityItemMyCart, setQuantityItemMyCart] = useState(0)
    const [cart, setCart] = useState([])

    useEffect(() => {
        let quantity_item_my_cart = Number.parseInt(localStorage.getItem("quantity_item_my_cart"))
        setQuantityItemMyCart(quantity_item_my_cart)
        let cart = JSON.parse(localStorage.getItem("cart"))
        setCart(cart)
        console.log(cart)
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