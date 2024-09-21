import React, { useState } from "react";
import "./css/Cart.css";
import Item from "./Item.jsx";
import Navbar from "../../components/navbar/Navbar.jsx";
import Footer from "../../components/footer/Footer.jsx";
import FlagPayment from "../../assets/images/bandeiras.jpeg";
import Camisa1 from "../../assets/images/camisa1.jpeg"

const Cart = () => {
    const [preferenceId, setPreferenceId] = useState("");
    const [frete, setFrete] = useState(2.50);
    const [cep, setCep] = useState("");
    const [subtotal, setSubtotal] = useState(0);
    const [items, setItems] = useState([5.50, 4.50]);

    const removeItem = (index) => {
        if (items.length > 1) {
            setItems((prevItems) => prevItems.filter((_, i) => i !== index));
        }
    };

    return (
        <div className="d-flex flex-column min-vh-100">
            <Navbar />
            <div className="container my-4 flex-grow-1" style={{display:"flex", flexDirection:"row", flexWrap:"wrap", alignItems:"center", justifyContent:"center"}}>
                <div className="row" style={{backgroundColor:"#f9f9f9",padding:"50px",borderRadius:"20px",boxShadow:"0px 0px 20px #e3e3e3",display:"flex", flexDirection:"row", flexWrap:"wrap", alignItems:"start", justifyContent:"center"}}>
                    <div className="col-md-4">
                        <h2>Seus Produtos</h2>
                        <div id="item">
                            {items.map((price, index) => (
                                <Item
                                    key={index}
                                    product={"Camisa Masculina"}
                                    picture={Camisa1}
                                    price={59.90}
                                    setSubtotal={setSubtotal}
                                    removeItem={() => removeItem(index)}
                                    disabled={items.length === 1}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="box-payment p-3 bg-light rounded shadow">
                            <h2>Pagamento</h2>
                            <div className="line mb-3"></div>
                            <p className="details-payment">Frete R$ {frete.toFixed(2)}</p>
                            <p className="details-payment">Subtotal R$ {subtotal.toFixed(2)}</p>
                            <div className="d-flex align-items-center mb-3">
                                <input
                                    className="form-control me-2"
                                    placeholder="CEP"
                                    onChange={(e) => {
                                        setCep(applyCEPMask(e.target.value));
                                    }}
                                />
                                <button className="btn btn-dark">Calcular</button>
                            </div>
                            <div className="line mb-3"></div>
                            <p className="details-payment" style={{ marginTop: "20px" }}>
                                Total R$ {(subtotal + frete).toFixed(2)}
                            </p>
                            <button
                                className="btn btn-success w-100"
                                style={{ fontSize: "20px" }}
                                onClick={() => {
                                    window.location.href = `https://www.mercadopago.com.br/checkout/v1/redirect?pref_id=${preferenceId}`;
                                }}
                            >
                                Realizar Pagamento
                            </button>
                            <img
                                className="img-fluid mt-3"
                                src={FlagPayment}
                                alt="Bandeiras de pagamento aceitas pelo mercado pago."
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Cart;
