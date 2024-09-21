import Navbar from "../../components/navbar/Navbar.jsx";
import Card from "../../components/card/Card.jsx";
import Pagination from "../../components/pagination/Pagination.jsx";
import Footer from "../../components/footer/Footer.jsx";
import Camisa1 from "../../assets/images/camisa1.jpeg"
import Camisa2 from "../../assets/images/camisa2.jpeg"
import Bone1 from "../../assets/images/bone1.png"
import Aside from "../../components/aside/Aside.jsx";
import "./css/Home.css"
import Carousel from "../../components/carousel/Carousel.jsx";
import Slide1 from "../../assets/images/slide1.png"
import Slide2 from "../../assets/images/slide2.png"
import Slide3 from "../../assets/images/slide3.png"

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Carousel
                slide1={Slide1}
                slide2={Slide2}
                slide3={Slide3}
            />

            <div id={"content"}>
                <div id={"aside-pagination"}>
                    <Aside/>
                    <Pagination/>
                </div>

                <section style={{
                    maxWidth: '60%',
                    minWidth:"360px",
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    flexWrap: 'wrap'
                }}>
                    <Card picture={Camisa1} alt={"Camisa"} title={"Camisa The Choosen Masculina"} price={59.90} description={"Camisa 100% algodão com ótima qualidade."}/>
                    <Card picture={Camisa2} alt={"Camisa"} title={"Camisa The Choosen Masculina"} price={59.90} description={"Camisa 100% algodão com ótima qualidade."}/>
                    <Card picture={Bone1} alt={"Camisa"} title={"Camisa The Choosen Masculina"} price={59.90} description={"Camisa 100% algodão com ótima qualidade."}/>
                    <Card picture={Camisa1} alt={"Camisa"} title={"Camisa The Choosen Masculina"} price={59.90} description={"Camisa 100% algodão com ótima qualidade."}/>
                    <Card picture={Camisa2} alt={"Camisa"} title={"Camisa The Choosen Masculina"} price={59.90} description={"Camisa 100% algodão com ótima qualidade."}/>
                    <Card picture={Bone1} alt={"Camisa"} title={"Camisa The Choosen Masculina"} price={59.90} description={"Camisa 100% algodão com ótima qualidade."}/>
                    <Card picture={Camisa1} alt={"Camisa"} title={"Camisa The Choosen Masculina"} price={59.90} description={"Camisa 100% algodão com ótima qualidade."}/>
                    <Card picture={Camisa2} alt={"Camisa"} title={"Camisa The Choosen Masculina"} price={59.90} description={"Camisa 100% algodão com ótima qualidade."}/>
                    <Card picture={Bone1} alt={"Camisa"} title={"Camisa The Choosen Masculina"} price={59.90} description={"Camisa 100% algodão com ótima qualidade."}/>
                    <Card picture={Camisa1} alt={"Camisa"} title={"Camisa The Choosen Masculina"} price={59.90} description={"Camisa 100% algodão com ótima qualidade."}/>
                    <Card picture={Camisa2} alt={"Camisa"} title={"Camisa The Choosen Masculina"} price={59.90} description={"Camisa 100% algodão com ótima qualidade."}/>
                    <Card picture={Bone1} alt={"Camisa"} title={"Camisa The Choosen Masculina"} price={59.90} description={"Camisa 100% algodão com ótima qualidade."}/>
                    <Card picture={Camisa1} alt={"Camisa"} title={"Camisa The Choosen Masculina"} price={59.90} description={"Camisa 100% algodão com ótima qualidade."}/>
                    <Card picture={Camisa2} alt={"Camisa"} title={"Camisa The Choosen Masculina"} price={59.90} description={"Camisa 100% algodão com ótima qualidade."}/>
                    <Card picture={Bone1} alt={"Camisa"} title={"Camisa The Choosen Masculina"} price={59.90} description={"Camisa 100% algodão com ótima qualidade."}/>
                    <Card picture={Camisa1} alt={"Camisa"} title={"Camisa The Choosen Masculina"} price={59.90} description={"Camisa 100% algodão com ótima qualidade."}/>
                    <Card picture={Camisa2} alt={"Camisa"} title={"Camisa The Choosen Masculina"} price={59.90} description={"Camisa 100% algodão com ótima qualidade."}/>
                    <Card picture={Bone1} alt={"Camisa"} title={"Camisa The Choosen Masculina"} price={59.90} description={"Camisa 100% algodão com ótima qualidade."}/>
                    <Card picture={Camisa2} alt={"Camisa"} title={"Camisa The Choosen Masculina"} price={59.90} description={"Camisa 100% algodão com ótima qualidade."}/>
                    <Card picture={Bone1} alt={"Camisa"} title={"Camisa The Choosen Masculina"} price={59.90} description={"Camisa 100% algodão com ótima qualidade."}/>
                    <Card picture={Bone1} alt={"Camisa"} title={"Camisa The Choosen Masculina"} price={59.90} description={"Camisa 100% algodão com ótima qualidade."}/>

                </section>

            </div>

            <Footer />
        </div>
    )
}

export default Home

