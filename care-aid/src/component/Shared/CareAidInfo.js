import React from 'react';
import { BiMap } from 'react-icons/bi';
import { BsClock } from 'react-icons/bs';
import { IoCallOutline } from 'react-icons/io5';

const CareAidInfo = () => {
    return (
        <div className="care__aid__info py-16 lg:py-20">
                <div className='grid gap-8 lg:grid-cols-3 md:grid-cols-1'>
                    <div className="card w-96 bg-base-100 shadow-xl mx-auto">
                        <div className="card-body mx-auto">
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
                    <div className="card w-96 bg-base-100 shadow-xl  mx-auto">
                        <div className="card-body mx-auto">
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
                    <div className="card w-96 bg-base-100 shadow-xl  mx-auto">
                        <div className="card-body mx-auto">
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
    );
};

export default CareAidInfo;