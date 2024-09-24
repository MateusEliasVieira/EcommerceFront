import {useState} from "react";
import MinusSVG from "../../../../components/svg/MinusSVG.jsx";
import TrashSVG from "../../../../components/svg/TrashSVG.jsx";
import PlusSVG from "../../../../components/svg/PlusSVG.jsx";

const HandleProduct = (props) => {
    const [quantity, setQuantity] = useState(props.quantity);

    // Função para atualizar a quantidade no localStorage
    const updateQuantity = (newQuantity) => {
        let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];

        const itemIndex = cart.findIndex(item => item.id === props.id);

        if (itemIndex >= 0) {
            cart[itemIndex].quantity = newQuantity;
            // Se a quantidade for 0, remover o item do carrinho
            if (newQuantity === 0) {
                cart.splice(itemIndex, 1);
            }
        }

        localStorage.setItem('cart', JSON.stringify(cart));
    };

    // Função para remover o item do carrinho
    const removeItem = () => {
        let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
        cart = cart.filter(item => item.id !== props.id);
        localStorage.setItem('cart', JSON.stringify(cart));
        const quantity_item_my_cart = Number.parseInt(localStorage.getItem("quantity_item_my_cart")) || 0;
        localStorage.setItem("quantity_item_my_cart",((quantity_item_my_cart - 1) >= 0 ? (quantity_item_my_cart - 1) : 0))
        props.onCartUpdate();  // Atualiza o estado do carrinho na tabela
    };

    return (
        <div id={"div-container-delete-quantity"}>
            <div id={"div-container-quantity"} style={{margin:"10px auto"}} >
                <div className={"div-options-svg"} onClick={() => {
                    if (quantity > 1) {
                        setQuantity(quantity - 1);
                        updateQuantity(quantity - 1);
                    }
                }}>
                    <MinusSVG />
                </div>
                <div id={"div-box-quantity"}>
                    <p>{quantity}</p>
                </div>
                <div className={"div-options-svg"} onClick={() => {
                    if (quantity < props.measurequantity) {
                        setQuantity(quantity + 1);
                        updateQuantity(quantity + 1);
                    }
                }}>
                    <PlusSVG />
                </div>
            </div>
            <div id={"div-box-delete"} style={{margin:"10px auto"}} onClick={removeItem}>
                <TrashSVG />
                <p className={"p-options"}>Remover</p>
            </div>
        </div>
    );
};

export default HandleProduct;
