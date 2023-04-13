import './CustomButtons.css';

export function CustomButtonOutline(props) {
    return (
        <button className={`btn bg-1 border-2 pointer ${props.textSize}`}>
            {props.children}
        </button>
    );
}

export function CustomButtonFill(props) {
    return (
        <button className={`btn bg-3 border-3 pointer ${props.textSize}`}>
            {props.children}
        </button>
    );
}