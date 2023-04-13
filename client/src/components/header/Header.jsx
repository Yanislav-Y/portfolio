import './Header.css';

export default function Header() {
    return (
        <header className='header flex justify-between align-center bg-1 w-100 border-box'>
            <span className='text-md font-1 text-bold'>yanislav</span>
            <div className='flex align-center gap-md'>
                <nav className='text-sm font-2'>
                    <ul className='flex align-center gap-sm'>
                        <li className='cursor-p'>benefits</li>
                        <li className='cursor-p'>projects</li>
                        <li className='cursor-p'>about</li>
                    </ul>
                </nav>
                <button className="btn bg-3 text-md text-bold font-1">contact</button>
            </div>
        </header>
    )
}