import ItemSlide from "./slide/ItemSlide.jsx";
import {useEffect, useState} from "react";

const Carousel = (props) => {
    const [uuid, setUuid] = useState()

    const generateRandomNumber = () => {
        const min = 1;  // valor mínimo
        const max = 1000000;  // valor máximo
        const random = Math.floor(Math.random() * (max - min + 1)) + min;
        setUuid(random);
    };

    useEffect(() => {
        generateRandomNumber()
    }, []);

    return (
        <div id={`carouselExampleAutoplaying${uuid}`} className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <ItemSlide slide={props.slide1}/>
                <ItemSlide slide={props.slide2}/>
                <ItemSlide slide={props.slide3}/>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target={`#carouselExampleAutoplaying${uuid}`}
                    data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Anterior</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target={`#carouselExampleAutoplaying${uuid}`}
                    data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Próximo</span>
            </button>
        </div>
    )
}

export default Carousel;