const Item = (props) => {
    return(
        <li className="nav-item">
            <a className="nav-link active" aria-current="page" href={props.link}>{props.title}</a>
        </li>
    )
}

export default Item