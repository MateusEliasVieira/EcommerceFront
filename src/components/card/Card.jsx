import cart from "../../views/cart/Cart.jsx";

const Card = (props) => {
    return(
        <div className="card" style={{width: '18rem', margin:'50px 10px'}}>
            <img src={props.picture} className="card-img-top" alt={props.alt} />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <h6>R${props.price}</h6>
                    <p className="card-text">{props.description}</p>
                    <a href={cart} class="btn btn-success">Comprar</a>
                </div>
        </div>
    )
}
export default Card;