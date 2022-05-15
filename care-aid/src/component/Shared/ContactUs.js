import React from 'react';
import contactUs from '../../Assets/care-aid-09.jpg';

const ContactUs = () => {
    return (
        <div style={
            {
                background: `linear-gradient(0deg, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 1.2)), url(${contactUs})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center',
                backgroundSize: 'cover'
            }
        } className='contact__us rounded-2xl py-16 lg:py-20 px-4'>
            <div className="container">
                <div className="contact__us__heading">
                    <h1 className='font-bold text-4xl lg:text-5xl text-center mb-5'>Stay connected with us</h1>
                </div>
                <form className='mx-auto'>
                    <div className="contact__input w-full lg:w-6/12 mx-auto py-4">
                        <input type="text" placeholder="Email Address" class="input input-bordered input-primary w-full bg-transparent" />
                    </div>
                    <div className="contact__input w-full lg:w-6/12 mx-auto py-4">
                        <input type="text" placeholder="Name" class="input input-bordered input-primary w-full bg-transparent" />
                    </div>
                    <div className="contact__input w-full lg:w-6/12 mx-auto py-4">
                        <textarea class="textarea w-full textarea-primary py-5 bg-transparent" placeholder="Message"></textarea>
                    </div>
                    <div className="contact__input w-full lg:w-6/12 mx-auto py-4 text-center">
                        <button className="btn btn-primary btn-wide">Send</button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default ContactUs;