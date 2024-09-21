import React, { useState, useEffect } from "react";
import "./css/Item.css";
import PlusSVG from "../../components/svg/PlusSVG.jsx";
import MinusSVG from "../../components/svg/MinusSVG.jsx";
import TrashSVG from "../../components/svg/TrashSVG.jsx";

const Item = (props) => {
    const [quantity, setQuantity] = useState(1);
    const [total, setTotal] = useState(props.price);

    useEffect(() => {
        setTotal(props.price * quantity);
    }, [props.price, quantity]);

    useEffect(() => {
        props.setSubtotal((prevSubtotal) => prevSubtotal + total);
        return () => {
            props.setSubtotal((prevSubtotal) => prevSubtotal - total);
        };
    }, [total, props]);

    const handleQuantityChange = (change) => {
        setQuantity((prevQuantity) => {
            const newQuantity = prevQuantity + change;
            if (newQuantity > 0) {
                return newQuantity;
            }
            return prevQuantity;
        });
    };

    const handleRemoveItem = () => {
        props.removeItem();
    };

    return (
        <div className="item">
            <div className="item-content">
                <img src={props.picture} width={100} height={100} alt="Produto" />
                <div className="data-buy">
                    <p>{props.product}</p>
                    <div className="box-details">
                        <p className="text-quantity">Quantidade {quantity}</p>
                        <div className="btn-quantity" onClick={() => handleQuantityChange(1)}>
                            <PlusSVG />
                        </div>
                        <div className="btn-quantity" onClick={() => handleQuantityChange(-1)}>
                            <MinusSVG />
                        </div>
                    </div>
                    <p>Valor unitário R$ {total.toFixed(2)}</p>
                </div>
                <button
                    className="btn btn-link btn-remove"
                    onClick={handleRemoveItem}
                    disabled={props.disabled}
                >
                    <TrashSVG />
                </button>
            </div>
        </div>
    );
};

export default Item;
