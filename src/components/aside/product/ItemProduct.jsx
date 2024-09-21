const ItemProduct = (props)=>{

    return(
        <div className="form-check">
            <label>
                <input type="checkbox" className="form-check-input" name="product" value={props.value} />
                {props.product}
            </label>
        </div>
    )
}

export default ItemProduct