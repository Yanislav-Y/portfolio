import './SectionTitle.css';

export default function SectionTitle(props) {
    const textSize = props.textSize ? props.textSize : 'text-lg';
    let margin = '';
    if (!props.textMargin) {
        margin = 'mb-section';
    }

    return (
        <h2 className={`font-1 text-bold text-center ${textSize} ${margin}`}>{props.children}</h2>
    )
}