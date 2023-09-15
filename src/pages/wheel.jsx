import { useEffect, useRef, useState } from "react";
import "../styles/pages/wheel.css";
import { IoIosArrowBack } from "react-icons/io";
import { StyledLink } from "../components/StyledLink";

export const Wheel = () => {
    const wheel = useRef();
    const textarea = useRef();

    const [optionList, setOptionList] = useState([]);
    const [sections, setSections] = useState([]);
    const [isSpinning, setIsSpinning] = useState(false);

    useEffect(() => {
        const sectionList = [];

        optionList.forEach((option, index) => {
            const start = (360 / optionList.length) * index;
            const end = (360 / optionList.length) * (index + 1);

            const backgroundColor = `conic-gradient(transparent ${start}deg, ${getColor(
                index
            )} ${start}deg ${end}deg, transparent ${end}deg)`;

            const angle = (end + start) / 2;
            const offset = 90;
            const labelRotate = `${angle + offset}deg`;

            sectionList.push(
                <div key={index} className="section" style={{ background: backgroundColor }}>
                    <span className="section-label-wrapper" style={{ rotate: labelRotate }}>
                        <span className="section-label">{option}</span>
                    </span>
                </div>
            );
        });

        setSections(sectionList);
    }, [optionList]);

    function onChange(e) {
        const values = e.target.value;
        const valuesArray = values.split("\n").filter(value => value && value !== "\n");

        setOptionList(valuesArray);
    }

    const defaultColor = "#b71540";
    const colors = ["#f8c291", "#e55039", "#eb2f06"];
    function getColor(index) {
        if (index === 0) {
            return defaultColor;
        }

        const n = colors.length;
        const remainder = index % (2 * n - 2);

        if (remainder < n) {
            return colors[remainder];
        } else {
            return colors[2 * n - 2 - remainder];
        }
    }

    const deg = useRef(0);
    function spin() {
        // Generate a random number of spins (4-6 spins in this case)
        const baseSpinNumber = 4;
        const additionalSpins = Math.floor(Math.random() * 3);
        const spins = baseSpinNumber + additionalSpins;

        // Calculate the total rotation (360 degrees per spin)
        const totalRotation = 360 * spins;

        // Generate a random degree offset (0-359 degrees) for additional randomness
        const offset = Math.floor(Math.random() * 360);

        // Calculate the final rotation angle
        const finalRotation = totalRotation + offset;
        deg.current += finalRotation;

        // Apply the rotation to the wheel
        wheel.current.style.transition = "transform 3s ease-out";
        wheel.current.style.transform = `rotate(${deg.current}deg)`;

        // Disable the spin button while spinning to avoid multiple spins
        setIsSpinning(true);

        // After the spinning animation ends, enable the spin button again
        setTimeout(() => {
            setIsSpinning(false);
        }, 3000);
    }

    return (
        <div className="wheel-page">
            <div className="wheel-wrapper">
                <div ref={wheel} className="wheel" id="wheel">
                    {sections.map(section => section)}
                </div>
                <div className="wheel-indicator"></div>
                <div className="wheel-indicator-head"></div>
            </div>

            <div className="right-panel">
                <textarea
                    className="propositions"
                    ref={textarea}
                    onChange={onChange}
                    disabled={isSpinning}
                    placeholder="Entrez vos propositions séparées par des sauts de ligne"
                ></textarea>
                <button disabled={isSpinning || sections.length === 0} onClick={spin}>
                    SPIN
                </button>
            </div>

            <StyledLink to="/">
                <IoIosArrowBack />
                Accueil
            </StyledLink>
        </div>
    );
};
