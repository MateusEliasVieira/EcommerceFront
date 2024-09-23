import "./css/Measure.css";
import Quantity from "../quantity/Quantity.jsx";

const Measure = (props) => {

    const handleMeasureSelect = (index) => {
        props.setSelectedIndex(index);
        props.setQuantity(0); // Reseta a quantidade ao selecionar um novo item
        props.setTotal(0); // Reseta o total
    };

    return (
        <div className={"div-measure"}>
            <div className={"div-measure-item"}>
                {
                    props.measure.map((measure, index) => (
                        <p
                            key={index}
                            className={props.selectedIndex === index ? "p-measure select" : "p-measure"}
                            onClick={() => measure.quantity > 0 && handleMeasureSelect(index)}
                        >
                            {measure.measure} ({measure.quantity > 0 ? `${measure.quantity} em estoque` : "Esgotado"})
                        </p>
                    ))
                }
            </div>
            <div className={"div-quantity-price"}>
                {props.selectedIndex !== null && (
                    <div className={"div-quantity"}>
                        <Quantity
                            quantity={props.quantity}
                            setQuantity={props.setQuantity}
                            setTotal={props.setTotal}
                            price={props.price}
                            quantitymeasure={props.measure[props.selectedIndex]}
                        />
                        <p style={{margin: "10px auto 10px 20px", fontSize: "20px"}}>Total:
                            R${props.total.toFixed(2)}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Measure;
