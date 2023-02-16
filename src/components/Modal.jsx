import Backdrop from "./Backdrop";
import { MdClose } from "react-icons/md";
import "../styles/components/Modal.css";
import { useRef } from "react";

export default function Modal(props) {
    const { title, isOpen, closeModal, children } = props;

    const modalRef = useRef();
    const backdropRef = useRef();

    const closeModalDelay = 300;
    const closeBackdropDelay = 300;
    const onCloseModal = () => {
        modalRef.current.classList.add("modal-wrapper--closed");

        setTimeout(() => {
            backdropRef.current.classList.add("backdrop--closed");

            setTimeout(() => {
                closeModal();
            }, closeBackdropDelay);
        }, closeModalDelay);
    };

    return isOpen ? (
        <Backdrop ref={backdropRef} onClick={onCloseModal}>
            <div ref={modalRef} className="modal-wrapper" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <h2 className="modal-header__title">{title}</h2>
                    <MdClose className="modal-header__button" fontSize="2em" onClick={onCloseModal} />
                </div>
                <div className="modal-body">{children}</div>
                <div className="modal-footer"></div>
            </div>
        </Backdrop>
    ) : null;
}
