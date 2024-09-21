const Button = (props) => {
    return(
        <button type="button" style={{backgroundColor:"#15edc2"}} className={props.className} onClick={props.action}>{props.title}</button>
    )
}
export default Button
