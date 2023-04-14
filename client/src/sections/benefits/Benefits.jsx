import './Benefits.css';
import WaveUp from '../../assets/wave-up.svg';
import WaveDown from '../../assets/wave-down.svg';
import FinancialData from '../../assets/financial-data.svg';
import SectionTitle from '../../components/sectionTitle/SectionTitle';
import { Fragment } from 'react';

export default function Benefits() {
    return (
        <Fragment>
            <img className='wave' src={WaveUp} alt="" />
            <section className="benefits w-100 border-box py-section bg-2">
                <SectionTitle>How I Help Brands Soar</SectionTitle>
                <div className='flex justify-center align-center gap-lg'>
                    <ul className='benefits-list border-box'>
                        <li className='relative'>
                            <h3 className='font-1 text-bold text-md relative'>Conversion Rates</h3>
                            <p className='font-2 text-sm'>
                                I study your brand to ensure I tailor your website
                                to your specific target audience. I tell a story
                                through your page that funnels users towards
                                your product.
                            </p>
                        </li>
                        <li className='relative'>
                            <h3 className='font-1 text-bold text-md relative'>Proactive Approach</h3>
                            <p className='font-2 text-sm'>
                                I take initiative. I don't wait for you to identify
                                problems or opportunities: I deliver high-quality
                                solutions to stay ahead with current trends.
                            </p>
                        </li>
                        <li className='relative'>
                            <h3 className='font-1 text-bold text-md relative'>Timely And Reliable</h3>
                            <p className='font-2 text-sm'>
                                Speed is the core of my values. I do not allow
                                month-long development processes where 95% of that
                                time is wasted. Late nights? No problem, coffee is
                                my friend.
                            </p>
                        </li>
                    </ul>
                    <img className='financial-data' src={FinancialData} alt="airplane" />
                </div>
            </section>
            <img className='wave' src={WaveDown} alt="" />
        </Fragment>
    );
}