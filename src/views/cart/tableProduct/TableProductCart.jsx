import React, { useState, useEffect } from 'react';
import HandleProduct from './handleProduct/HandleProduct.jsx';
import './css/TableProduct.css';
import Frete from '../frete/Frete.jsx';
import Buy from '../buy/Buy.jsx';
import Flag from '../../../assets/images/bandeiras.jpeg';

const TableProductCart = () => {

    const [cartItems, setCartItems] = useState([]);

    // Carrega o carrinho do localStorage
    useEffect(() => {
        const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
        setCartItems(cart);
    }, []);

    // Função para recalcular o total
    const calcTotal = () => {
        return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    };

    // Função para atualizar o estado quando o carrinho for modificado
    const handleCartUpdate = () => {
        const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
        setCartItems(cart);
    };

    return (
        <div>
            <table className="table" style={{ minWidth: '360px', width: '80%', margin: '50px auto', overflowX: 'auto' }}>
                <thead>
                <tr>
                    <th scope="col" className="th-table-cart">Produto</th>
                    <th scope="col" className="th-table-cart">Descrição</th>
                    <th scope="col" className="th-table-cart">Tamanho</th>
                    <th scope="col" className="th-table-cart">Quantidade</th>
                    <th scope="col" className="th-table-cart">Valor</th>
                </tr>
                </thead>
                <tbody>
                {cartItems.map((item) => (
                    <tr key={item.id}>
                        <td className="td-table-cart">
                            <img width={200} height={200} src={item.picture} alt="Produto" />
                        </td>
                        <td className="td-table-cart">{item.description}</td>
                        <td className="td-table-cart"><strong>{item.measure}</strong></td>
                        <td className="td-table-cart">
                            <HandleProduct
                                id={item.id}
                                measure={item.measure}
                                quantity={item.quantity}
                                price={item.price}
                                measurequantity={item.measurequantity}
                                onCartUpdate={handleCartUpdate}
                                setCartItems={setCartItems}
                                cartItems={cartItems}
                            />
                        </td>
                        <td className="td-table-cart price">R${(item.price * item.quantity).toFixed(2)}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            <div id="div-frete-buy">
                <Frete />
                <img width={320} src={Flag} alt="Bandeiras" />
                <Buy total={calcTotal()} />
            </div>
        </div>
    );
};

export default TableProductCart;
