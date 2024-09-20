import Navbar from "../../components/navbar/Navbar.jsx";
import Card from "../../components/card/Card.jsx";
import Pagination from "../../components/pagination/Pagination.jsx";
import Footer from "../../components/footer/Footer.jsx";
import Banner from "../../assets/images/Banner.png";
import Camisa1 from "../../assets/images/camisa1.jpeg"
import Camisa2 from "../../assets/images/camisa2.jpeg"
import Bone1 from "../../assets/images/bone1.png"

const Home = () => {
    return (
        <div style={{minWidth: "380px", maxWidth: "1200px", margin: "0px auto"}}>
            <Navbar/>
            <img src={Banner} width={"100%"} height={"600px"} alt="..." />

            <div style={{
                margin: "20px auto",
                width: '100%',
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

            </div>

            <Pagination/>

            <Footer />
        </div>
    )
}

export default Home

