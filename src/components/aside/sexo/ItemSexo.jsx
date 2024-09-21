const ItemSexo = (props)=> {
    return(
        <div className="form-check">
            <label>
                <input type="radio" className="form-check-input" name="gender" value={props.value}/>
                {props.sexo}
            </label>
        </div>
    )
}

export default ItemSexo