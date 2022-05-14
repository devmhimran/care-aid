import React from 'react';
import { FaTooth } from 'react-icons/fa';
import { FaTeethOpen } from 'react-icons/fa';
import { GiTooth } from 'react-icons/gi';

const OurService = () => {
    return (
        <div className="our__service__section py-16 lg:py-20">
                <div className="our__service__heading">
                    <h1 className='font-bold text-4xl lg:text-5xl text-center'>Services We Provide</h1>
                </div>
                <div className="our__service__info py-10 lg:py-20">
                    <div className="grid gap-9 lg:grid-cols-3 md:grid-cols-1">
                        <div className="card w-96 bg-base-100 border mx-auto">
                            <div className="card-body">
                                <div className="box__icon text-6xl mx-auto">
                                    <FaTeethOpen></FaTeethOpen>
                                </div>
                                <div className="box__info text-center">
                                    <h2 className='text-2xl font-semibold my-4'>Fluoride Treatment</h2>
                                    <p className='text-base '>Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the</p>
                                </div>

                            </div>
                        </div>
                        <div className="card w-96 bg-base-100 border mx-auto">
                            <div className="card-body">
                                <div className="box__icon text-6xl mx-auto">
                                    <FaTooth></FaTooth>
                                </div>
                                <div className="box__info text-center">
                                    <h2 className='text-2xl font-semibold my-4'>Cavity Filling</h2>
                                    <p className='text-base '>Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the</p>
                                </div>

                            </div>
                        </div>
                        <div className="card w-96 bg-base-100 border  mx-auto">
                            <div className="card-body">
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
    );
};

export default OurService;