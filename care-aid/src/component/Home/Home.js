import React from 'react';
import heroImage from '../../Assets/care-aid-01.jpg';
import { BiMap } from 'react-icons/bi';
import { BsClock } from 'react-icons/bs';
import { IoCallOutline } from 'react-icons/io5';
import { FaTooth } from 'react-icons/fa';
import { FaTeethOpen } from 'react-icons/fa';
import { GiTooth } from 'react-icons/gi';
import careAid03 from '../../Assets/care-aid-03.jpg';

const Home = () => {
    return (
        <div className='container mx-auto'>
            <div className="hero__section py-24">
                <div class="grid lg:grid-cols-2 md:grid-cols-1">
                    {/* LEFT SECTION */}
                    <div className='hero__section__left '>
                        <div className="hero__section__detail">
                            <h1 className='font-black text-6xl leading-tight'>Virtual healthcare <br></br> for you</h1>
                            <p className='text-2xl leading-10 my-5'>Care Aid provides progressive, and affordable <br></br>
                                healthcare, accessible on mobile and online <br></br>
                                for everyone
                            </p>
                            <button class="btn btn-primary">Consult Today</button>
                        </div>
                    </div>
                    {/* RIGHT SECTION */}
                    <div className='hero__section__right '>
                        <img className='hero__image rounded-2xl w-9/12 md:w-full sm:w-full' src={heroImage} alt="" />
                    </div>
                </div>
            </div>
            <div className="care__aid__info py-20">
                <div className='grid lg:grid-cols-3 md:grid-cols-1'>
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
            <div className="our__service__section py-20">
                <div className="our__service__heading">
                    <h1 className='font-bold text-5xl text-center'>Services We Provide</h1>
                </div>
                <div className="our__service__info py-20">
                    <div className="grid gap-9 lg:grid-cols-3 md:grid-cols-1">
                        <div class="card w-96 bg-base-100 border mx-auto">
                            <div class="card-body">
                                <div className="box__icon text-6xl mx-auto">
                                    <FaTeethOpen></FaTeethOpen>
                                </div>
                                <div className="box__info text-center">
                                    <h2 className='text-2xl font-semibold my-4'>Fluoride Treatment</h2>
                                    <p className='text-base '>Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the</p>
                                </div>

                            </div>
                        </div>
                        <div class="card w-96 bg-base-100 border  mx-auto">
                            <div class="card-body">
                                <div className="box__icon text-6xl mx-auto">
                                    <FaTooth></FaTooth>
                                </div>
                                <div className="box__info text-center">
                                    <h2 className='text-2xl font-semibold my-4'>Cavity Filling</h2>
                                    <p className='text-base '>Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the</p>
                                </div>

                            </div>
                        </div>
                        <div class="card w-96 bg-base-100 border  mx-auto">
                            <div class="card-body">
                                <div className="box__icon text-6xl mx-auto">
                                    <GiTooth></GiTooth>
                                </div>
                                <div className="box__info text-center">
                                    <h2 className='text-2xl font-semibold my-4'>Teeth Whitening</h2>
                                    <p className='text-base '>Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="info__section  py-20">
                <div className="container">
                    <div className="grid gap-12 lg:grid-cols-4 md:grid-cols-1">
                        <div className="info__section__left  col-span-2">
                            <img className='w-4/5 rounded-2xl' src={careAid03} alt="" />
                        </div>
                        <div className="info__section__right col-span-2  flex items-center">
                            <div className="info__section__right_detail">
                                <div className="info__section__right__detail__main">
                                    <h1 className='font-bold text-5xl leading-tight'>Exceptional Dental Care,<br></br>on Your Terms</h1>
                                    <p className='text-base my-8 leading-7'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                                    <button class="btn btn-primary">Get Started</button>
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