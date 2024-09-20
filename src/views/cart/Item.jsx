import React, { useState, useEffect } from "react";
import Logo from "../../assets/images/logo.jpg";
import "./css/Item.css";

const Item = ({ price, setSubtotal, removeItem, disabled }) => {
    const [quantity, setQuantity] = useState(1);
    const [total, setTotal] = useState(price * quantity);

    useEffect(() => {
        setTotal(price * quantity);
    }, [price, quantity]);

    useEffect(() => {
        setSubtotal((prevSubtotal) => prevSubtotal + total);
        // Cleanup function to subtract the previous total when quantity changes
        return () => {
            setSubtotal((prevSubtotal) => prevSubtotal - total);
        };
    }, [total]);

    const handleQuantityChange = (change) => {
        setQuantity((prevQuantity) => {
            const newQuantity = prevQuantity + change;
            if (newQuantity > 0) {
                return newQuantity;
            }
            return prevQuantity;
        });
    };

    return (
        <div className="item">
            <div className="item-content">
                <img src={Logo} width={100} height={100} alt="Logo" />
                <div className="data-buy">
                    <p>Pulseira Miçanga Feminina</p>
                    <div className="box-details">
                        <p className="text-quantity">Quantidade {quantity}</p>
                        <div className="btn-quantity" onClick={() => handleQuantityChange(1)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                 className="bi bi-plus" viewBox="0 0 16 16">
                                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                            </svg>
                        </div>
                        <div className="btn-quantity" onClick={() => handleQuantityChange(-1)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                 className="bi bi-dash" viewBox="0 0 16 16">
                                <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8" />
                            </svg>
                        </div>
                    </div>
                    <p>Valor unitário R${total.toFixed(2)}</p>
                </div>
                <button
                    className="btn btn-link btn-remove"
                    onClick={removeItem}
                    disabled={disabled}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#000000" className="bi bi-trash3-fill" viewBox="0 0 16 16">
                        <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
                    </svg>

                </button>
            </div>
        </div>
    );
};

export default Item;
