import "./css/HandleProduct.css"
import MinusSVG from "../../../../components/svg/MinusSVG.jsx";
import PlusSVG from "../../../../components/svg/PlusSVG.jsx";
import TrashSVG from "../../../../components/svg/TrashSVG.jsx";

const HandleProduct = (props) => {
    return (
        <div id={"div-container-delete-quantity"}>
            <div>
                <div id={"div-container-quantity"}>
                    <div className={"div-options-svg"}>
                        <MinusSVG/>
                    </div>
                    <div id={"div-box-quantity"}>
                        <p>1</p>
                    </div>
                    <div className={"div-options-svg"}>
                        <PlusSVG/>
                    </div>
                </div>
            </div>
            <div id={"div-box-delete"}>
                <div>
                    <TrashSVG/>
                </div>
                <p className={"p-options"}>Remover</p>
            </div>
        </div>
    )
}

export default HandleProduct