import './Footer.css';
import SectionTitle from '../../components/sectionTitle/SectionTitle.jsx';

export default function Footer() {
    return (
        <footer className='footer w-100 bg-2 py-lg flex flex-column justify-center align-center gap-sm text-center'>
            <SectionTitle textSize='text-md' textMargin='0'>Ready To Get Started?</SectionTitle>
            <p className='font-2 text-sm'>Whether you need a portfolio website, are growing a personal
                brand or starting an e-commerce store, you can hire me <a className='regular-a pointer' href="https://www.yanislavyankov.me">here.</a>
            </p>
            <div className='flex gap-sm py-sm'>
                <a href="https://www.twitter.com/yanislav_dev" target='_blank'>
                    <i className="fa-brands fa-twitter text-lg footer-icon pointer"></i>
                </a>
                <a href="mailto:dev@yanislavyankov.com">
                    <i className="fa-solid fa-envelope text-lg footer-icon pointer"></i>
                </a>
            </div>
            <span className='font-2 text-sm'>
                &copy; 2023 -&nbsp;
                <a href="" className='clean-a text-secondary'>Privacy</a> |&nbsp;
                <a href="" className='clean-a text-secondary'>Sitemap</a>
            </span>
        </footer>
    );
}