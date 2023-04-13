import './Navbar.css';
import { CustomButtonFill } from '../customButtons/CustomButtons.jsx';

export default function Navbar() {
    return (
        <header className='header w-100 border-box bg-2 flex justify-between align-center'>
            <span className="font-1 text-md text-bold default">yanislav</span>
            <nav>
                <ul className='flex justify-between align-center gap-md'>
                    <li className='font-2 text-sm pointer nav-text'>benefits</li>
                    <li className='font-2 text-sm pointer nav-text'>projects</li>
                    <li className='font-2 text-sm pointer nav-text'>about</li>
                    <li><CustomButtonFill textSize='text-md'>contact</CustomButtonFill></li>
                </ul>
            </nav>
        </header>
    );
}