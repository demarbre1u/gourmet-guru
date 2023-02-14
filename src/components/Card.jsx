import "../styles/components/Card.css";

import { MdMenuBook } from "react-icons/md";

export default function Card(props) {
    const { data } = props;
    const { name, img, url } = data;

    const openLink = () => {
        window.open(url, "_blank", "noreferrer");
    };

    return (
        <div className="card" style={{ backgroundImage: `url(/img/restaurants/${img})` }} onClick={openLink}>
            <span className="card__title">{name}</span>

            <div className="card__menu">
                <MdMenuBook fontSize="3em" />
                <p>Voir le menu</p>
            </div>
        </div>
    );
}
