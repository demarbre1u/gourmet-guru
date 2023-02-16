import { forwardRef } from "react";
import "../styles/components/Backdrop.css";

function Backdrop(props, ref) {
    const { children, onClick } = props;

    return (
        <div ref={ref} className="backdrop" onClick={onClick}>
            {children}
        </div>
    );
}

export default forwardRef(Backdrop);
