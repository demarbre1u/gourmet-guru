import { useEffect, useRef, useState } from "react";
import "../styles/pages/wheel.css";

export const Wheel = () => {
    const wheel = useRef();
    const textarea = useRef();

    const [optionList, setOptionList] = useState([]);
    const [sections, setSections] = useState([]);

    useEffect(() => {
        const sectionList = [];

        optionList.forEach((option, index) => {
            const start = (360 / sections.length) * index;
            const end = (360 / sections.length) * (index + 1);

            const backgroundColor = `conic-gradient(transparent ${start}deg, ${getColor(
                index
            )} ${start}deg ${end}deg, transparent ${end}deg)`;

            const angle = (end + start) / 2;
            const offset = 90;
            const labelRotate = `${angle + offset}deg`;

            sectionList.push(
                <div key={index} className="section" style={{ background: backgroundColor }}>
                    <span className="section-label" style={{ rotate: labelRotate }}>
                        {option}
                    </span>
                </div>
            );
        });

        setSections(sectionList);
    }, [optionList]);

    function onChange(e) {
        const values = e.target.value;
        const valuesArray = values.split("\n").filter(value => value && value !== "\n");

        console.log({ valuesArray });

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

    let deg = 0;
    function spin() {
        // Generate a random number of spins (4-6 spins in this case)
        const spins = 4 + Math.floor(Math.random() * 3);

        // Calculate the total rotation (360 degrees per spin)
        const totalRotation = 360 * spins;

        // Generate a random degree offset (0-359 degrees) for additional randomness
        const offset = Math.floor(Math.random() * 360);

        // Calculate the final rotation angle
        const finalRotation = totalRotation + offset;

        deg += finalRotation;

        // Apply the rotation to the wheel
        wheel.current.style.transition = "transform 3s ease-out";
        wheel.current.style.transform = `rotate(${deg}deg)`;

        // Disable the spin button while spinning to avoid multiple spins
        document.querySelector("button").disabled = true;

        // After the spinning animation ends, enable the spin button again
        setTimeout(() => {
            document.querySelector("button").disabled = false;
        }, 3000);
    }

    return (
        <>
            <div className="wheel-wrapper">
                <div ref={wheel} className="wheel" id="wheel">
                    {sections.map(section => section)}
                </div>
                <div className="wheel-indicator"></div>
                <div className="wheel-indicator-head"></div>
            </div>

            <textarea ref={textarea} onChange={onChange}></textarea>

            <button onClick={spin}>SPIN</button>
        </>
    );
};
