import StarCheckSVG from "../svg/StarCheckSVG.jsx";
import CartSVG from "../svg/CartSVG.jsx";
import {product} from "../../urls/Urls.js";

const Card = (props) => {
    return (
        <div className="card" style={{width: '18rem', margin: '50px 10px', backgroundColor: "#f9f9f9"}}>
            {
                props.onsale ?
                    <div style={{
                        width: "80px",
                        height: "30px",
                        borderRadius: "20px",
                        backgroundColor: "#ed134a",
                        textAlign: "center",
                        margin: "5px",
                        color: "white"
                    }}>{props.discount}% OFF</div>
                    :
                    <></>
            }
            <a href={`${product}/id=${props.id}`}>
                <img src={props.picture} className="card-img-top" alt={props.alt}/>
            </a>
            <div className="card-body">
                <h5 className="card-title"><a href={`${product}/id=${props.id}`}
                                              style={{textDecoration: "none", color: "black"}}>{props.title}</a></h5>
                <div style={{margin: "10px auto"}}>
                    <StarCheckSVG width={20} height={25} color={"#ecaa03"}/>
                    <StarCheckSVG width={20} height={25} color={"#ecaa03"}/>
                    <StarCheckSVG width={20} height={25} color={"#ecaa03"}/>
                    <StarCheckSVG width={20} height={25} color={"#ecaa03"}/>
                    <StarCheckSVG width={20} height={25} color={"#ecaa03"}/>
                </div>
                {
                    props.onsale ? <del>R${props.price.toFixed(2)}</del> : <></>
                }
                <h4 style={{color: "#33ad26"}}>R${props.onsale ? props.newprice.toFixed(2) : props.price.toFixed(2)}</h4>
                <p>À vista no pix ou cartão</p>
                <button type="button" className="btn btn-success">
                    Adicionar ao Carrinho <CartSVG width={25} height={25} color={"white"}/>
                </button>
            </div>

        </div>
    )
}
export default Card;