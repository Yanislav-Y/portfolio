import './Hero.css';
import websitePlaceholder from '../../assets/website-placeholder.png';

export default function Hero() {
    return (
        <section className="hero w-100 border-box flex flex-column align-center gap-md py-lg">
            <h1 className='text-xxlg font-1 text-center text-bold'>
                I Make Unique Websites<br />That <span className='text-accent'>Grow</span> Your Brand
            </h1>
            <div className='buttons flex gap-md'>
                <button className="font-1 btn bg-3 text-lg text-bold">contact</button>
                <button className="font-1 btn text-lg text-bold">see more</button>
            </div>
            <div className="flex flex-column gap-sm">
                <div className="text-warning text-md text-center w-100">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                </div>
                <p className="testimonial-p font-2 text-center">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium, earum fugit amet elit!
                    <span>- Samantha</span>
                </p>
            </div>
            <img width={1000} height={687} src={websitePlaceholder} alt="landing page of shoes e-commerce website" />
        </section>
    );
};