import './CustomButtons.css';
import ScrollTo from '../../utilities/ScrollTo';

function handleClick(target) {
    if (target) ScrollTo(target);
}

export function CustomButtonOutline(props) {
    return (
        <button className={`btn font-1 bg-1 border-2 pointer ${props.textSize}`}
            data-target={props.target} onClick={e => {
                handleClick(e.currentTarget.dataset.target);
            }}>
            {props.children}
        </button>
    );
}

export function CustomButtonFill(props) {
    return (
        <button className={`btn font-1 bg-3 border-3 pointer ${props.textSize}`}
            tabIndex={props.tabIndex} data-target={props.target} onClick={e => {
                handleClick(e.currentTarget.dataset.target);
            }}>
            {props.children}
        </button>
    );
}