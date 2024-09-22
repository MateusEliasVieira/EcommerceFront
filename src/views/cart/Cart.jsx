import Navbar from "../../components/navbar/Navbar.jsx";
import Footer from "../../components/footer/Footer.jsx";
import TableProductCart from "./tableProduct/TableProductCart.jsx";
import {useState} from "react";
import Camisa1 from "../../assets/images/camisa1.jpeg"
import Camisa2 from "../../assets/images/camisa2.jpeg"
import Etapa1 from "../../assets/images/etapa1.png"
import "./css/Cart.css"

const Cart = () => {
    const [data, setData] = useState([
        {
            picture: Camisa1,
            title:"Camisa masculina preta",
            price:59.90,
            quantity:1
        },
        {
            picture: Camisa2,
            title:"Camisa masculina bege clara",
            price:59.90,
            quantity:1
        }
    ])
    return (
        <div id={"div-container-cart"}>
            <Navbar/>
            <div id={"div-description-cart"}>
                <h1>Carrinho</h1>
                <img width={300} src={Etapa1} alt={"Etapa 1"}/>
            </div>
            <TableProductCart
                data={data}
            />
            <Footer/>
        </div>
    )
}

export default Cart