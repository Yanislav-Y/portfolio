import './Hero.css';
import { useEffect, useRef } from 'react';
import GhostwriterHero from '../../assets/twitter-ghostwriter-mockup.webp';
import { CustomButtonFill, CustomButtonOutline } from '../../components/customButtons/CustomButtons';
import scrollTo from '../../utilities/ScrollTo';

export default function Hero() {
    const contactRef = useRef();
    const exploreRef = useRef();

    useEffect(() => {
        const heroButtons = document.querySelectorAll('.hero button');

        heroButtons.forEach(button => {
            button.addEventListener('click', () => {
                scrollTo(button.dataset.target);
            })
        })
    }, []);

    return (
        <section className="hero w-100 border-box flex flex-column justify-center align-center gap-lg py-top-section">
            <h1 className='font-1 text-bold text-center'>I Make Unique Websites<br />That Grow Your Brand</h1>
            <div className='flex gap-md'>
                <CustomButtonFill textSize='text-lg' target='contact'>contact</CustomButtonFill>
                <CustomButtonOutline textSize='text-lg' target='benefits'>explore</CustomButtonOutline>
            </div>
            {/* <div className='testimonial text-center'>
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
            </div> */}
            <img className='floating-img' width='auto' height='auto' src={GhostwriterHero} alt="" />
        </section>
    );
}