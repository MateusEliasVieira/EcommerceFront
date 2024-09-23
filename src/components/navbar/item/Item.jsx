const Item = (props) => {
    return (
        <li className="nav-item">
            <a className="nav-link active" aria-current="page" href={props.link} style={{ fontSize: "20px" }}>
                {props.title}
            </a>
        </li>
    );
};

export default Item