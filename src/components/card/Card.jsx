import {product} from "../../urls/Urls.js";
import {useEffect, useState} from "react";
import Avaliation from "./avaliation/Avaliation.jsx";
import "./css/Card.css"
import ModalCard from "./modalcard/ModalCard.jsx";

const Card = (props) => {
    const[disabled,setDisabled]=useState("")
    const [active, setActive] = useState(false)

    useEffect(() => {
        setDisabled(props.quantitytotal === 0 ? "disabled" : "")
    }, []);

    return (
        <div className={disabled === "disabled" ? "card disabled-div" : "card"}>
            {
                props.onsale ?
                    <div className="onsale-badge">
                        {props.discount}% OFF
                    </div>
                    : null
            }
            <a href={`${product}/id=${props.id}`}>
                <img src={props.picture1} className="card-img-top" alt={props.alt}/>
            </a>
            <div className="card-body">
                <h5 className="card-title">
                    <a href={`${product}/id=${props.id}`}>{props.title}</a>
                </h5>
                <Avaliation avaliation={props.avaliation}/>
                {
                    props.onsale ? <del>R${props.price.toFixed(2)}</del> : null
                }
                <h4 className="price">R${props.onsale ? props.newprice.toFixed(2) : props.price.toFixed(2)}</h4>
                <p>À vista no pix ou cartão</p>
                <ModalCard
                    disabled={disabled}
                    quantitytotal={props.quantitytotal}
                    active={active}
                    setActive={setActive}
                    id={props.id}
                    picture1={props.picture1}
                    picture2={props.picture2}
                    picture3={props.picture3}
                    title={props.title}
                    price={props.price}
                    onsale={props.onsale}
                    newprice={props.newprice}
                    description={props.description}
                    measure={props.measure}
                />
            </div>
        </div>
    )
}

export default Card;