import Navbar from "../../components/navbar/Navbar.jsx";
import Card from "../../components/card/Card.jsx";
import Pagination from "../../components/pagination/Pagination.jsx";
import Footer from "../../components/footer/Footer.jsx";
import Aside from "../../components/aside/Aside.jsx";
import "./css/Home.css";
import Carousel from "../../components/carousel/Carousel.jsx";
import Slide1 from "../../assets/images/slide1.png";
import Slide2 from "../../assets/images/slide2.png";
import Slide3 from "../../assets/images/slide3.png";
import {useEffect, useState} from "react";
import {listProducts} from "../../requests/ProductRequest.js";

const Home = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        listProducts(setData)
    }, []);

    return (
        <div>
            <Navbar/>
            <Carousel slide1={Slide1} slide2={Slide2} slide3={Slide3}/>
            <div id="content" className="container my-4">
                <div className="row">
                    <div className="col-md-3">
                        <Aside/>
                    </div>
                    <div className="col-md-9">
                        <section id="section-cards" className="d-flex flex-wrap justify-content-around">
                            {data.map((product, index) => (
                                <Card
                                    key={index}
                                    id={product.idProduct}
                                    onsale={product.onSale}
                                    discount={product.discount}
                                    newprice={product.newPrice}
                                    picture1={product.picture1}
                                    picture2={product.picture2}
                                    picture3={product.picture3}
                                    alt="Produto"
                                    title={product.title}
                                    price={product.price}
                                    category={product.category}
                                    description={product.description}
                                    quantitytotal={product.quantityTotal}
                                    measure={product.measure}
                                    avaliation={product.avaliation}
                                    comment={product.comment}
                                />
                            ))}
                        </section>
                        <Pagination/>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Home;
