import './SectionTitle.css';

export default function SectionTitle(props) {
    return (
        <h2 className='font-1 text-bold text-lg text-center'>{props.children}</h2>
    )
}