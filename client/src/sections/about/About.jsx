import './About.css';
import Myself from '../../assets/myself.webp';
import WaveDown from '../../assets/wave-down.svg';
import SectionTitle from '../../components/sectionTitle/SectionTitle';
import { Fragment } from 'react';

export default function About() {
    return (
        <Fragment>
            <section className="w-100 py-section bg-2">
                <SectionTitle>Meet The Creator</SectionTitle>
                <div className='flex justify-center align-center gap-lg'>
                    <div className='profile-picture bg-3'>
                        <img src={Myself} alt="" />
                    </div>
                    <p className='profile-p font-2 text-sm'>
                        My name is Yanislav, or Yani. I specialize in web design & development.
                        <br /><br />
                        Whether you're a local animal charity or a large e-commerce store, I will work
                        closely with you to understand your goals and ensure that your website reaches
                        a global audience: It is essential to growing brand in today's digital age. It
                        can showcase your expertise and high-quality products to more people than you
                        can imagine, helping you attract new customers and opportunities that don't come
                        through traditional marketing.
                        <br /><br />
                        It's also crucial to have a great design. I work from scratch instead of using
                        generic templates; it allows me to capture the essence of your brand and ensure
                        you a custom online presence. My key to providing a seamless user experience
                        that promotes engagement, improves conversion rates and increases customer
                        satisfaction is the correct combination of necessary design principles such as
                        human psychology, color theory and intuitive design.
                        <br /><br />
                        Let's set you apart from your competition today!
                    </p>
                </div>
            </section>
            <img src={WaveDown} alt="" className='wave' />
        </Fragment>
    );
}