import TruckSVG from "../../../components/svg/TruckSVG.jsx";
import "./css/Frete.css"
import TableFrete from "./tableFrete/TableFrete.jsx";
import Correios from "../../../assets/images/correios.png"
const Frete = () => {
    return (
        <div>
            <div>
                <TruckSVG width={30} height={30} color={"#15edc2"}/>
                <p>Preencha o campo CEP para calcular o valor do frete e o prazo de entrega</p>
                <div id={"div-calc-frete"}>
                    <input className={"form form-control"}/>
                    <button className={"btn btn-dark"}>Calcular</button>
                </div>
            </div>
            <TableFrete
                freteOption1={20}
                dateOption1={"10 dias úteis"}
                typeOption1={"SEDEX"}
                freteOption2={15}
                dateOption2={"20 dias úteis"}
                typeOption2={"PAC"}
            />
        </div>
    )
}

export default Frete