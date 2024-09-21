import ItemSlide from "./slide/ItemSlide.jsx";
import slide1 from "../../assets/images/slide1.png"
import slide2 from "../../assets/images/slide2.png"
import slide3 from "../../assets/images/slide3.png"

const Carousel = (props)=>{
    return(
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <ItemSlide slide={slide1}/>
                <ItemSlide slide={slide2}/>
                <ItemSlide slide={slide3}/>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Anterior</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Próximo</span>
            </button>
        </div>
    )
}

export default Carousel;