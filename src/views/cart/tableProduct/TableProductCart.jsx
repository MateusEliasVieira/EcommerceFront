import HandleProduct from "./handleProduct/HandleProduct.jsx";
import "./css/TableProduct.css"
import Frete from "../frete/Frete.jsx";
import Buy from "../buy/Buy.jsx";
import Flag from "../../../assets/images/bandeiras.jpeg"

const TableProductCart = (props) => {
    return (
        <div>

            <table className="table" style={{minWidth: "360px", width: "80%", margin: "50px auto", overflowX:"auto"}}>
                <thead>
                <tr>
                    <th scope="col" className={"th-table-cart"}>Produto</th>
                    <th scope="col" className={"th-table-cart"}>Descrição</th>
                    <th scope="col" className={"th-table-cart"}>Quantidade</th>
                    <th scope="col" className={"th-table-cart"}>Valor</th>
                </tr>
                </thead>
                <tbody>
                {
                    props.data.map((item) => (
                        <tr>
                            <td className={"td-table-cart"}>
                                <img width={200} height={200} src={item.picture} alt={"Produto"}/>
                            </td>
                            <td className={"td-table-cart"}>{item.title}</td>
                            <td className={"td-table-cart"}>
                                <HandleProduct/>
                            </td>
                            <td className={"td-table-cart price"}>R${(item.price * item.quantity).toFixed(2)}</td>
                        </tr>
                    ))

                }
                </tbody>
            </table>
            <div id={"div-frete-buy"}>
                <Frete/>
                <img width={320} src={Flag}/>
                <Buy total={135.0}/>
            </div>
        </div>
    )
}

export default TableProductCart