
const ItemColor = (props)=>{

    return(
        <div className="form-check">
            <label>
                <input type="checkbox" className="form-check-input" name="color" value={props.value} />
                {props.color}
            </label>
        </div>
    )
}

export default ItemColor