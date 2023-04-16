import './Contact.css';
import Message from '../../assets/message.svg';
import SectionTitle from '../../components/sectionTitle/SectionTitle';
import { CustomButtonFill } from '../../components/customButtons/CustomButtons.jsx';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
    const formRef = useRef();

    function submitForm(e) {
        e.preventDefault();

        emailjs.sendForm('service_a4lezqj', 'template_r3r0t58', formRef.current, 'MFGeaEusgc70CZlAI')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <section className="w-100 py-bottom-section">
            <SectionTitle>Get In Touch</SectionTitle>
            <div className="form-container flex justify-center align-center media-lg-flex-column">
                <img src={Message} alt="" />
                <form ref={formRef} onSubmit={e => {
                    submitForm(e);
                }}
                    className='email-form px-left-lg relative flex flex-column gap-sm'
                >
                    <div className='input-div flex gap-sm'>
                        <div className='flex flex-column align-start'>
                            <label htmlFor="fromName" className='font-2 text-sm'>Name <span className='text-danger'><sup>*</sup></span></label>
                            <input className='rounded form-input font-1 text-sm border-2 p-xsm' type="text" id='fromName'
                                name='fromName' tabIndex={1} required
                            />
                        </div>
                        <div className='flex flex-column align-start'>
                            <label htmlFor="fromEmail" className='font-2 text-sm'>Email <span className='text-danger'><sup>*</sup></span></label>
                            <input className='rounded form-input font-1 text-sm border-2 p-xsm' type="email" id='fromEmail'
                                name='fromEmail' tabIndex={2} required
                            />
                        </div>
                    </div>
                    <div className='flex flex-column align-start'>
                        <label htmlFor="message" className='font-2 text-sm'>Message <span className='text-danger'><sup>*</sup></span></label>
                        <textarea className='rounded w-100 form-input font-1 text-sm border-2 p-xsm border-box' name="message" id="message"
                            cols="30" rows="10" tabIndex={3} required
                        ></textarea>
                    </div>
                    <div className='flex gap-sm media-lg-align-center media-lg-flex-column'>
                        <CustomButtonFill textSize='text-md' type='submit' tabIndex={4}>submit</CustomButtonFill>
                        <p className='font-2 text-sm'><span className='text-danger'><sup>*</sup></span> Required</p>
                    </div>
                </form>
            </div>
        </section>
    );
}