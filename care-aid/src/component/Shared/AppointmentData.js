import React from 'react';

const AppointmentData = ({services}) => {
    const {name} = services;
    return (
        <div className="card w-5/6 bg-base-100 border mx-auto">
            <div className="card-body">
                <div className="box__info text-center">
                    <h2 className='text-2xl font-semibold my-4'>{name}</h2>
                    <p className='text-base '>Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the</p>
                    <button className='btn btn-primary mt-6'>Book Now</button>
                </div>

            </div>
        </div>
    );
};

export default AppointmentData;