import "../styles/pages/battle-royale.css";
import dataJson from "../assets/data/data.json";
import Card from "../components/Card";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { RxReset } from "react-icons/rx";
import { useEffect, useRef, useState } from "react";
import Confetti from "react-confetti";
import { IoIosArrowBack } from "react-icons/io";
import { StyledLink } from "../components/StyledLink";

export default function BattleRoyale() {
    const [data, setData] = useState(dataJson.data);

    const firstCard = useRef();
    const secondCard = useRef();

    useEffect(() => {
        setData(state => state.sort(() => Math.random() - 0.5));
    }, []);

    const currentStep = dataJson.data.length - data.length + 1;
    const totalStep = dataJson.data.length - 1;

    const removeItem = index => {
        firstCard.current.classList.add("fadeLeft");
        secondCard.current.classList.add("fadeRight");

        setTimeout(() => {
            firstCard.current.classList.remove("fadeLeft");
            secondCard.current.classList.remove("fadeRight");

            let tmpData = data.filter((value, i) => index !== i);
            tmpData.sort(() => Math.random() - 0.5);
            setData(tmpData);
        }, 800);
    };

    const resetData = () => {
        let tmpData = dataJson.data;
        tmpData.sort(() => Math.random() - 0.5);
        setData(tmpData);
    };

    return (
        <div className="battle-royal">
            {data.length > 1 ? (
                <>
                    <div className="card-wrapper" ref={firstCard}>
                        <Card data={data[0]} />
                        <button className="card__button" onClick={() => removeItem(0)}>
                            <AiOutlineCloseCircle fontSize="4em" />
                        </button>
                    </div>
                    <div className="card-wrapper" ref={secondCard}>
                        <Card data={data[1]} />
                        <button className="card__button" onClick={() => removeItem(1)}>
                            <AiOutlineCloseCircle fontSize="4em" />
                        </button>
                    </div>

                    <div className="step-count">
                        Round {currentStep} sur {totalStep}
                    </div>
                </>
            ) : (
                <div>
                    <Confetti width={window.innerWidth} height={window.innerHeight} />
                    <span className="winner">Le survivant est :</span>

                    <div className="card-winner">
                        <Card data={data[0]} />
                    </div>

                    <button className="reset-button" onClick={resetData}>
                        <RxReset color="#242424" fontSize="3em" />
                    </button>
                </div>
            )}

            <StyledLink to="/">
                <IoIosArrowBack />
                Accueil
            </StyledLink>
        </div>
    );
}
