import React from 'react';
import heroImage from '../../Assets/care-aid-01.jpg';
import SharedButton from './SharedButton';

const Hero = () => {
    return (
        <div className="hero__section py-16 mx-4 lg:py-24">
                <div className="grid lg:grid-cols-2 md:grid-cols-1">
                    {/* LEFT SECTION */}
                    <div className='hero__section__left flex items-center'>
                        <div className="hero__section__detail">
                            <h1 className='font-black text-5xl lg:text-6xl leading-tight '>Virtual healthcare <br></br> for you</h1>
                            <p className='text-lg lg:text-2xl lg:leading-10 my-5'>Care Aid provides progressive, and affordable <br></br>
                                healthcare, accessible on mobile and online <br></br>
                                for everyone
                            </p>
                            <SharedButton>Get Started</SharedButton>
                        </div>
                    </div>
                    {/* RIGHT SECTION */}
                    <div className='hero__section__right mt-5 lg:m-0'>
                        <img className='hero__image rounded-2xl w-9/12 w-full lg:w-full md:w-full ' src={heroImage} alt="" />
                    </div>
                </div>
            </div>
    );
};

export default Hero;