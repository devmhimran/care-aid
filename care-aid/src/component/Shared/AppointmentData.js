import React, { useState } from 'react';

const AppointmentData = ({ services,setTreatment }) => {
    const { name, slots } = services;
    return (
        <div className="card w-5/6 bg-base-100 border mx-auto">
            <div className="card-body">
                <div className="box__info text-center">
                    <h2 className='text-2xl font-semibold my-4'>{name}</h2>
                    <p className='text-base '>{
                        slots.length > 0 ? <span>{slots[0]}</span> : <span className='text-red-500'>Try Another Day</span>
                    }</p>
                    <p className='text-base '>
                        {slots.length} { slots.length > 1 ? 'spaces' : 'space' } available
                    </p>
                    <label htmlFor="booking-modal"  disabled={slots.length === 0} className='btn btn-primary mt-6' onClick={()=> setTreatment(services)}>open modal</label>
                </div>

            </div>
        </div>
    );
};

export default AppointmentData;