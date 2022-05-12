import React from 'react';
import heroImage from '../../Assets/care-aid-01.jpg';
import { BiMap } from 'react-icons/bi';
import { BsClock } from 'react-icons/bs';
import { IoCallOutline } from 'react-icons/io5';

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

        <div className="care__aid__info py-20">
            <div className='grid grid-col-4 grid-flow-col gap-4'>
                <div class="card w-96 bg-base-100 shadow-xl">
                        <div class="card-body mx-auto">
                            <div className="flex">
                                <div className="box__icon text-6xl flex items-center mr-4">
                                    <BsClock></BsClock>
                                </div>
                                <div className="box__info">
                                    <h2 className='text-2xl font-semibold my-4'>Opening Hours</h2>
                                    <p>10 AM to 5PM</p>
                                </div>
                            </div>
                        </div>
                    </div>
                <div class="card w-96 bg-base-100 shadow-xl">
                        <div class="card-body mx-auto">
                            <div className="flex">
                                <div className="box__icon text-6xl flex items-center mr-4">
                                    <BiMap></BiMap>
                                </div>
                                <div className="box__info">
                                    <h2 className='text-2xl font-semibold my-4'>Opening Hours</h2>
                                    <p>10 AM to 5PM</p>
                                </div>
                            </div>
                        </div>
                    </div>
                <div class="card w-96 bg-base-100 shadow-xl">
                        <div class="card-body mx-auto">
                            <div className="flex">
                                <div className="box__icon text-6xl flex items-center mr-4">
                                    <IoCallOutline></IoCallOutline>
                                </div>
                                <div className="box__info">
                                    <h2 className='text-2xl font-semibold my-4'>Opening Hours</h2>
                                    <p>10 AM to 5PM</p>
                                </div>
                            </div>
                        </div>
                    </div>

            </div>
        </div>
    </div>
);
};

export default Home;