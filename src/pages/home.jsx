import "../styles/pages/home.css";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();

    return (
        <div className="hompage">
            <h1 className="home__title">Gourmet Guru</h1>
            <p className="home__subtitle">Une app pour aider à choisir ce qu'on mange</p>

            <div className="option-list">
                <div className="option" onClick={() => navigate("/battle-royal")}>
                    <h2 className="option__title">Battle Royal</h2>
                    <p className="option__description">Il ne peut en rester qu'un</p>
                </div>

                <div className="option">
                    <h2 className="option__title">À venir</h2>
                    <p className="option__description">Cette option n'est pas encore disponible</p>
                </div>
            </div>
        </div>
    );
}
