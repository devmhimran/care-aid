import React from 'react';
import heroImage from '../../Assets/care-aid-01.jpg'

const Home = () => {
    return (
        <div className='container mx-auto'>
            <div className="hero__section py-24">
                <div class="grid grid-col-4 grid-flow-col gap-4">
                    <div className='hero__section__left flex items-center col-span-3'>
                        <div className="hero__section__detail">
                            <h1 className='font-black text-6xl leading-tight'>Virtual healthcare <br></br> for you</h1>
                            <p className='text-2xl leading-10 my-5'>Care Aid provides progressive, and affordable <br></br>
                                healthcare, accessible on mobile and online <br></br>
                                for everyone
                            </p>
                            <button class="btn btn-primary">Consult Today</button>
                        </div>
                    </div>
                    <div className='hero__section__right '>
                        <img className='hero__image rounded-2xl w-9/12 ml-auto' src={heroImage} alt="" />
                    </div>
                </div>
            </div>
            <div className="care__aid__info">
                <div className='grid grid-col-4 grid-flow-col gap-4'>
                    <div class="card w-96 bg-base-100 shadow-xl">
                        <div class="card-body">
                            <h2 class="card-title">Card title!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div class="card-actions justify-end">
                                <button class="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;