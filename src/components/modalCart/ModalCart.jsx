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

    const incrementQuantityItemCart = () => {
        let quantity_item_my_cart = localStorage.getItem("quantity_item_my_cart") !== null
            ? Number.parseInt(localStorage.getItem("quantity_item_my_cart"))
            : 0;

        localStorage.setItem("quantity_item_my_cart", (quantity_item_my_cart + 1));
    }


    const addToCart = () => {
        // Verifique se o tamanho foi selecionado e se a quantidade é maior que zero
        if (selectedIndex !== null && quantity > 0) {
            const itemKey = `item_id_${props.id}_measure_${props.measure[selectedIndex].measure}`;
            console.log(itemKey);

            localStorage.setItem(itemKey, JSON.stringify({
                id: props.id,
                measure: props.measure[selectedIndex].measure,
                quantity: quantity,
                total: total
            }));
            console.log(`Item adicionado ao carrinho: ${itemKey}`);
            incrementQuantityItemCart()
            setShowModalMessage(true)
        } else {
            // Exibir um alerta ou notificação se nenhum tamanho for selecionado ou quantidade for zero
            console.error("Por favor, selecione um tamanho e uma quantidade válida.");
            alert("Por favor, selecione um tamanho e uma quantidade válida.");
        }
    }

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
                                      message={"Item adicionado ao carrinho com sucesso!"}/>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalCart;
