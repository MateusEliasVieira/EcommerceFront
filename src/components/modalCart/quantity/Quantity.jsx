import MinusSVG from "../../svg/MinusSVG.jsx";
import PlusSVG from "../../svg/PlusSVG.jsx";
import "./css/Quantity.css";

const Quantity = (props) => {
    const handleDecrease = () => {
        if (props.quantity > 0) {
            const newQuantity = props.quantity - 1;
            props.setQuantity(newQuantity);
            props.setTotal(newQuantity * props.price);
        }
    };

    const handleIncrease = () => {
        const newQuantity = props.quantity + 1;
        if (newQuantity <= props.quantitymeasure.quantity) {
            props.setQuantity(newQuantity);
            props.setTotal(newQuantity * props.price);
        }
    };

    return (
        <div>
            <div id={"div-container-quantity"}>
                <div className={"div-options-svg"} onClick={handleDecrease}>
                    <MinusSVG/>
                </div>
                <div id={"div-box-quantity"}>
                    <p>{props.quantity}</p>
                </div>
                <div className={"div-options-svg"} onClick={handleIncrease}>
                    <PlusSVG/>
                </div>
            </div>
        </div>
    );
}

export default Quantity;
