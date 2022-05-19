import { format } from 'date-fns';
import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import appointmentImage from '../../Assets/care-aid-09.jpg';
import './shared.css';

const AppointmentDate = ({selected, setSelected}) => {
    
    return (
        <div className="appointment__date  py-16 mx-5 lg:mx-10 lg:py-20">
            <div className="grid gap-5 lg:grid-cols-2 md:grid-cols-1">
                <div className="appointment__date__left flex md:justify-center items-center">
                    <div className="card shadow-2xl bg-base-100">
                        <div className="card-body">
                        <div className="appointment__date__main">
                        <DayPicker className='lg:w-full'
                            mode="single"
                            selected={selected}
                            onSelect={setSelected}
                        ></DayPicker>
                    </div>
                        </div>
                    </div>
                </div>
                <div className="appointment__date__right flex">
                    <img className='rounded-2xl lg:w-full md:w-full' src={appointmentImage} alt="" />
                </div>
            </div>
        </div>
    );
};
export default AppointmentDate;