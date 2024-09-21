const ItemSize = (props)=>{

    return(
        <div className="form-check">
            <label>
                <input type="checkbox" className="form-check-input" name="size" value={props.value} />
                {props.size}
            </label>
        </div>
    )
}

export default ItemSize