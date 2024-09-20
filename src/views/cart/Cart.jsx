import React, { useState } from "react";
import "./css/Cart.css";
import Item from "./Item.jsx";
import Navbar from "../../components/navbar/Navbar.jsx";
import Footer from "../../components/footer/Footer.jsx";

const Cart = () => {

    const [preferenceId, setPreferenceId] = useState("");
    const [frete, setFrete] = useState(2.50);
    const [subtotal, setSubtotal] = useState(0);
    const [items, setItems] = useState([5.50, 4.50]); // Exemplo de itens com preços

    const removeItem = (index) => {
        if (items.length > 1) {
            setItems((prevItems) => prevItems.filter((_, i) => i !== index));
        }
    };

    return (
        <div>
            <Navbar />
            <div className="content-cart">
                <div className="cart">
                    <div className="box-cart">
                        <div>
                            <h2>Carrinho</h2>
                            {items.map((price, index) => (
                                <Item
                                    key={index}
                                    price={price}
                                    setSubtotal={setSubtotal}
                                    removeItem={() => removeItem(index)}
                                    disabled={items.length === 1}
                                />
                            ))}
                        </div>
                        <div className="box-payment">
                            <h2>Pagamento</h2>
                            <div className="line"></div>
                            <div className="box-frete">
                                <input className="form form-control" placeholder="CEP" style={{ marginRight: "10px" }} />
                                <button className="btn btn-dark">Calcular</button>
                            </div>
                            <p className="details-payment">Frete R$ {frete.toFixed(2)}</p>
                            <p className="details-payment">Subtotal R$ {subtotal.toFixed(2)}</p>
                            <div className="line"></div>
                            <p className="details-payment" style={{ marginTop: "20px" }}>
                                Total R$ {(subtotal + frete).toFixed(2)}
                            </p>
                            <button className="btn btn-success" style={{ fontSize: "20px" }} onClick={() => {
                                window.location.href = `https://www.mercadopago.com.br/checkout/v1/redirect?pref_id=${preferenceId}`;
                            }}>Realizar Pagamento
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Cart;
