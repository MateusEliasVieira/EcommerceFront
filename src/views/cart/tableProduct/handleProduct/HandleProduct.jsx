import { useState } from "react";
import MinusSVG from "../../../../components/svg/MinusSVG.jsx";
import TrashSVG from "../../../../components/svg/TrashSVG.jsx";
import PlusSVG from "../../../../components/svg/PlusSVG.jsx";

const HandleProduct = (props) => {

    const [quantity, setQuantity] = useState(props.quantity);

    const handleRemoveItem = (id, measure) => {
        // Encontra o índice do item a ser removido
        let indexToRemove = props.cartItems.findIndex((item) => item.id === id && item.measure === measure);

        // Remove o item
        if (indexToRemove > -1) {
            const updatedCartItems = props.cartItems.filter((_, index) => index !== indexToRemove);

            // Atualiza o estado do carrinho
            props.setCartItems(updatedCartItems);

            // Atualiza o localStorage com o novo carrinho
            localStorage.setItem('cart', JSON.stringify(updatedCartItems));

            // Atualiza a quantidade total de itens
            const totalQuantity = updatedCartItems.reduce((acc, item) => acc + item.quantity, 0);
            localStorage.setItem('quantity_item_my_cart', totalQuantity);
        }
    };


    const handleUpdateQuantity = (id, measure, newQuantity) => {
        if (newQuantity > 0) {
            const updatedCartItems = props.cartItems.map((item) => {
                if (item.id === id && item.measure === measure) {
                    return { ...item, quantity: newQuantity }; // Atualiza a quantidade do item
                }
                return item; // Retorna o item inalterado
            });

            // Atualiza o estado do carrinho
            props.setCartItems(updatedCartItems);

            // Atualiza o localStorage com o novo carrinho
            localStorage.setItem('cart', JSON.stringify(updatedCartItems));

            // Atualiza a quantidade total de itens
            const totalQuantity = updatedCartItems.reduce((acc, item) => acc + item.quantity, 0);
            localStorage.setItem('quantity_item_my_cart', totalQuantity);
        }
    };


    return (
        <div id={"div-container-delete-quantity"}>
            <div id={"div-container-quantity"} style={{margin: "10px auto"}}>
                <div className={"div-options-svg"} onClick={() => {
                    if (quantity > 1) {
                        setQuantity(quantity - 1);
                        handleUpdateQuantity(props.id, props.measure, quantity - 1); // Atualiza a quantidade no carrinho
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
                        handleUpdateQuantity(props.id, props.measure, quantity + 1); // Atualiza a quantidade no carrinho
                    }
                }}>
                    <PlusSVG />
                </div>
            </div>
            <div id={"div-box-delete"} style={{margin: "10px auto"}}
                 onClick={() => handleRemoveItem(props.id, props.measure)}>
                <TrashSVG />
                <p className={"p-options"}>Remover</p>
            </div>
        </div>
    );
};

export default HandleProduct;
