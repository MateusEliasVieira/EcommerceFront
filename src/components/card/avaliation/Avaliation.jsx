import StarCheckSVG from "../../svg/StarCheckSVG.jsx";
import {useEffect, useState} from "react";
import StarSVG from "../../svg/StarSVG.jsx";

const Avaliation = (props) => {

    const [starblank, setStarblank] = useState(0);
    const [starcolor, setStarcolor] = useState(0);

    const handleAvaliation = () => {
        let sum = 0;
        let quantityAvaliation = props.avaliation.length || 0;
        props.avaliation.forEach((av) => {
            sum += av.avaliation;
        });
        let average = sum / quantityAvaliation;
        let star_color = Math.round(average);  // Estrelas preenchidas
        let star_blank = 5 - star_color;       // Estrelas em branco
        setStarblank(star_blank);
        setStarcolor(star_color);
    };

    useEffect(() => {
        handleAvaliation();
    }, []);

    return (
        <div style={{margin: "10px auto"}}>
            {/* Renderizar estrelas preenchidas */}
            {Array.from({ length: starcolor }, (_, i) => (
                <StarCheckSVG key={i} width={20} height={25} color={"#ecaa03"} />
            ))}

            {/* Renderizar estrelas vazias */}
            {Array.from({ length: starblank }, (_, i) => (
                <StarSVG key={i} width={20} height={25} color={"#ecaa03"} />
            ))}
        </div>
    );
};

export default Avaliation;
