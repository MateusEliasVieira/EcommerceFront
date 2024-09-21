const ItemSlide = (props) => {
    return(
        <div className="carousel-item active">
            <img src={props.slide} className="d-block w-100" alt={"Slide"}/>
        </div>
    )
}

export default ItemSlide