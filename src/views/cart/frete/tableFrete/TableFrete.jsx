
const TableFrete = (props)=>{
    return(
        <table className="table">
            <thead>
            <tr>
                <th scope="col">Frete</th>
                <th scope="col">Entrega</th>
                <th scope="col">Tipo</th>
            </tr>
            </thead>
            <tbody>
                <tr>
                    <td>R${props.freteOption1.toFixed(2)}</td>
                    <td>{props.dateOption1}</td>
                    <td>{props.typeOption1}</td>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                    </div>
                </tr>
                <tr>
                    <td>R${props.freteOption2.toFixed(2)}</td>
                    <td>{props.dateOption2}</td>
                    <td>{props.typeOption2}</td>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                    </div>
                </tr>
            </tbody>
        </table>
    )
}

export default TableFrete