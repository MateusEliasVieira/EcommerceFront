import CartSVG from "../../svg/CartSVG.jsx";
import ModalCart from "../../modalCart/ModalCart.jsx";

const ModalCard = (props) => {

    return (
        <div>
            <button
                type="button"
                style={{width: "100%"}}
                className={props.quantitytotal === 0 ? "btn btn-danger btn-esgotado" : "btn btn-success btn-adicionar"}
                disabled={props.disabled}
                onClick={() => {
                    props.setActive(true)
                }
                }
            >
                {
                    props.quantitytotal === 0 ? "Esgotado" : (
                        <div>
                            Adicionar ao Carrinho <CartSVG width={25} height={25} color={"white"}/>
                        </div>
                    )
                }
            </button>
            <ModalCart
                id={props.id}
                active={props.active}
                setActive={props.setActive}
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
    )
}

export default ModalCard