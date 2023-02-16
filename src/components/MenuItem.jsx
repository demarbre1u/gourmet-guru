import { MdMenuBook } from "react-icons/md";

import "../styles/components/MenuItem.css";

export default function MenuItem(props) {
    const { name, img, url } = props;

    const openLink = () => {
        window.open(url, "_blank", "noreferrer");
    };

    return (
        <div className="menu-item-wrapper">
            <div
                className="menu-item"
                style={{ backgroundImage: `url(./img/restaurants/${img})` }}
                onClick={openLink}
            ></div>
            <p className="menu-item__text">{name}</p>

            <div className="menu-item__icon">
                <MdMenuBook fontSize="2.5em" />
            </div>
        </div>
    );
}
