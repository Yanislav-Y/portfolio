import './Navbar.css';
import { CustomButtonFill } from '../customButtons/CustomButtons.jsx';
import ScrollTo from '../../utilities/ScrollTo.js';
import { useEffect, useRef } from 'react';

function handleClick(target) {
    ScrollTo(target.dataset.target);
}

export default function Navbar() {
    function setBodyMargin() {
        const headerHeight = headerRef.current.getBoundingClientRect().height;
        document.body.style.marginTop = `${headerHeight}px`;
    }

    const headerRef = useRef();

    useEffect(() => {
        setBodyMargin();

        window.addEventListener('resize', () => {
            setBodyMargin();
        });

        return () => {
            window.removeEventListener('resize', () => {
                setBodyMargin();
            });
        }
    }, []);

    return (
        <header className='header w-100 border-box bg-2 flex justify-between align-center' ref={headerRef}>
            <a href="https://www.yanislavyankov.me" className='header-logo pointer'>
                <span className="font-1 text-md text-bold">yanislav</span>
            </a>
            <nav>
                <ul className='flex justify-between align-center gap-md'>
                    <li data-target='benefits' className='font-2 text-sm pointer nav-text'
                        onClick={(e) => {
                            handleClick(e.currentTarget);
                        }}
                    >benefits</li>
                    <li data-target='projects' className='font-2 text-sm pointer nav-text'
                        onClick={(e) => {
                            handleClick(e.currentTarget);
                        }}
                    >projects</li>
                    <li data-target='about' className='font-2 text-sm pointer nav-text'
                        onClick={(e) => {
                            handleClick(e.currentTarget);
                        }}
                    >about</li>
                    <li><CustomButtonFill textSize='text-md' target='contact'>contact</CustomButtonFill></li>
                </ul>
            </nav>
        </header>
    );
}