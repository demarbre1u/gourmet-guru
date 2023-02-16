import "../styles/components/Backdrop.css";

export default function Backdrop(props) {
    const { children, onClick } = props;

    return (
        <div className="backdrop" onClick={onClick}>
            {children}
        </div>
    );
}
