import "./css/ModalCart.css";
import Carousel from "../carousel/Carousel.jsx";
import CartSVG from "../svg/CartSVG.jsx";
import Measure from "./measure/Measure.jsx";
import {useState} from "react";
import ModalMessage from "../modalMessage/ModalMessage.jsx";

const ModalCart = (props) => {

    const [selectedIndex, setSelectedIndex] = useState(null);
    const [quantity, setQuantity] = useState(0);
    const [total, setTotal] = useState(0);
    const [showModalMessage, setShowModalMessage] = useState(false);
    const [message, setMessage] = useState("");

    const incrementQuantityItemCart = (newQuantity) => {
        let quantity_item_my_cart = localStorage.getItem("quantity_item_my_cart") !== null
            ? Number.parseInt(localStorage.getItem("quantity_item_my_cart"))
            : 0;

        localStorage.setItem("quantity_item_my_cart", (quantity_item_my_cart + newQuantity));
    }

    const addToCart = () => {
        if (selectedIndex !== null && quantity > 0) {
            // Recupera o carrinho do localStorage (ou cria um carrinho vazio se não existir)
            let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];

            // Criar objeto do item a ser adicionado
            const newItem = {
                id: props.id,
                description: props.description,
                measure: props.measure[selectedIndex].measure,
                quantity: quantity,
                price: props.onsale ? props.newprice : props.price,
                picture: props.picture1,
                measurequantity: props.measure[selectedIndex].quantity
            };

            // Verifica se o item já existe no carrinho (com base no id e na medida)
            const existingItemIndex = cart.findIndex(item => item.id === props.id && item.measure === newItem.measure);

            if (existingItemIndex >= 0) {
                // Atualiza a quantidade do item existente
                cart[existingItemIndex].quantity += quantity;
            } else {
                // Adiciona o novo item ao carrinho
                cart.push(newItem);
            }

            // Atualiza o localStorage
            localStorage.setItem('cart', JSON.stringify(cart));

            // Mostra mensagem de sucesso
            setMessage("Item adicionado ao carrinho.");
            setShowModalMessage(true);

            incrementQuantityItemCart(quantity)
        } else {
            setMessage("Por favor, selecione um tamanho e uma quantidade válida.");
            setShowModalMessage(true);
        }
    };



    return (
        <div className={`div-modal-cart ${props.active ? 'active' : ''}`}>
            <div className="modal-content">
                <button className="btn btn-link" onClick={() => props.setActive(false)}>X</button>
                <div className={"div-details"}>
                    <div>
                        <h2>{props.title}</h2>
                        <Carousel slide1={props.picture1} slide2={props.picture2} slide3={props.picture3}/>
                    </div>
                    <div>
                        {
                            props.onsale ? <del>R${props.price.toFixed(2)}</del> : <></>
                        }
                        <h4 style={{color: "#33ad26"}}>R${props.onsale ? props.newprice.toFixed(2) : props.price.toFixed(2)}</h4>
                        <p>{props.description}</p>

                        <Measure
                            measure={props.measure}
                            price={props.price}
                            selectedIndex={selectedIndex}
                            setSelectedIndex={setSelectedIndex}
                            quantity={quantity}
                            setQuantity={setQuantity}
                            total={total}
                            setTotal={setTotal}
                        />

                        <button type="button" style={{margin: "20px auto", width: "100%"}}
                                className={props.quantitytotal === 0 ? "btn btn-danger" : "btn btn-success"}
                                disabled={props.quantitytotal === 0 ? "disabled" : ""} onClick={() => {
                            addToCart()
                        }}>
                            {
                                props.quantitytotal === 0 ? "Esgotado" :
                                    <div>Adicionar ao Carrinho <CartSVG width={25} height={25} color={"white"}/></div>
                            }
                        </button>

                        <ModalMessage showModalMessage={showModalMessage} setShowModalMessage={setShowModalMessage}
                                      message={message}/>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalCart;
