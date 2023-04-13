import './Hero.css';
import websitePlaceholder from '../../assets/website-placeholder.png';
import { CustomButtonFill, CustomButtonOutline } from '../../components/customButtons/CustomButtons';

export default function Hero() {
    return (
        <section className="hero w-100 border-box flex flex-column justify-center align-center gap-lg py-section">
            <h1 className='font-1 text-bold'>I Make Unique Websites<br />That Grow Your Brand</h1>
            <div className='flex gap-md'>
                <CustomButtonFill textSize='text-lg'>contact</CustomButtonFill>
                <CustomButtonOutline textSize='text-lg'>see more</CustomButtonOutline>
            </div>
            <div className='testimonial text-center'>
                <div className='star-div text-warning text-md'>
                    <i className="fa-solid fa-star star-icon"></i>
                    <i className="fa-solid fa-star star-icon"></i>
                    <i className="fa-solid fa-star star-icon"></i>
                    <i className="fa-solid fa-star star-icon"></i>
                    <i className="fa-solid fa-star star-icon"></i>
                </div>
                <p className="testimonial-p font-2 text-sm">
                    Yanislav over-delivered and increased my conversions my way more than I expected.
                    Amazing work! <span className='text-primary'>- Samantha</span>
                </p>
            </div>
            <img className='floating-img' width={1000} height={687} src={websitePlaceholder} alt="" />
        </section>
    );
}