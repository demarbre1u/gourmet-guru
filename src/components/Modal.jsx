import Backdrop from "./Backdrop";
import { MdClose } from "react-icons/md";
import "../styles/components/Modal.css";

export default function Modal(props) {
    const { title, isOpen, closeModal, children } = props;

    return isOpen ? (
        <Backdrop onClick={closeModal}>
            <div className="modal-wrapper" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <h2 className="modal-header__title">{title}</h2>
                    <MdClose className="modal-header__button" fontSize="2em" onClick={closeModal} />
                </div>
                <div className="modal-body">{children}</div>
                <div className="modal-footer"></div>
            </div>
        </Backdrop>
    ) : null;
}
