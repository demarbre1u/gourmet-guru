import "../styles/pages/home.css";
import { useNavigate } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { MdMenuBook } from "react-icons/md";
import Modal from "../components/Modal";
import { useState } from "react";
import dataJson from "../assets/data/data.json";
import MenuItem from "../components/MenuItem";

export default function Home() {
    const navigate = useNavigate();

    const [open, setOpen] = useState(false);

    return (
        <div className="hompage">
            <h1 className="home__title">Gourmet Guru</h1>
            <p className="home__subtitle">
                Une web app pour aider à décider ce qu'on
                <br />
                mange quand Hugo refuse de collaborer
            </p>

            <div className="option-list">
                <div className="option" onClick={() => navigate("/battle-royale")}>
                    <h2 className="option__title">Battle Royale</h2>
                    <p className="option__description">Il ne peut en rester qu'un</p>
                </div>
            </div>

            <div className="navigation-links">
                <div className="menu-link" onClick={() => setOpen(true)}>
                    <MdMenuBook fontSize="2em" />
                </div>
                <div
                    className="github-link"
                    onClick={() => window.open("https://github.com/demarbre1u", "_blank", "noreferrer")}
                >
                    <FaGithub fontSize="2em" />
                </div>
            </div>

            <Modal title="Menu" isOpen={open} closeModal={() => setOpen(false)}>
                <div className="menu-list">
                    {dataJson.data.map(item => (
                        <MenuItem key={item.name} name={item.name} img={item.img} url={item.url} />
                    ))}
                </div>
            </Modal>
        </div>
    );
}
