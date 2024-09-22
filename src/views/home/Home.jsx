import Navbar from "../../components/navbar/Navbar.jsx";
import Card from "../../components/card/Card.jsx";
import Pagination from "../../components/pagination/Pagination.jsx";
import Footer from "../../components/footer/Footer.jsx";
import Camisa1 from "../../assets/images/camisa1.jpeg";
import Camisa2 from "../../assets/images/camisa2.jpeg";
import Bone1 from "../../assets/images/bone1.png";
import Aside from "../../components/aside/Aside.jsx";
import "./css/Home.css";
import Carousel from "../../components/carousel/Carousel.jsx";
import Slide1 from "../../assets/images/slide1.png";
import Slide2 from "../../assets/images/slide2.png";
import Slide3 from "../../assets/images/slide3.png";

const Home = () => {
    return (
        <div>
            <Navbar />
            <Carousel slide1={Slide1} slide2={Slide2} slide3={Slide3} />
            <div id="content" className="container my-4">
                <div className="row">
                    <div className="col-md-3">
                        <Aside />
                    </div>
                    <div className="col-md-9">
                        <section id="section-cards" className="d-flex flex-wrap justify-content-around">
                            {Array.from({ length: 9 }).map((_, index) => (
                                <Card
                                    key={index}
                                    picture={index % 3 === 0 ? Camisa1 : index % 3 === 1 ? Camisa2 : Bone1}
                                    alt="Produto"
                                    title="Camisa The Choosen Masculina"
                                    price={59.90}
                                    description="Camisa 100% algodão com ótima qualidade."
                                />
                            ))}
                        </section>
                        <Pagination />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Home;
