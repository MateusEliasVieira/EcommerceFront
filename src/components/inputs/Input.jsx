const Input = (props) => {
    return(
        <div className="mb-3">
            <label htmlFor={props.html} className="form-label">{props.label}</label>
            <input type={props.type} className="form-control" id={props.id} placeholder={props.placeholder} onChange={(e)=> props.action(e.target.value)}/>
        </div>
    )
}

export default Input;