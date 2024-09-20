const Button = (props) => {
    return(
        <button type="button" className={props.className} onClick={props.action}>{props.title}</button>
    )
}
export default Button
