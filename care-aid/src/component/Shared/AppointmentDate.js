import { format } from 'date-fns';
import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import appointmentImage from '../../Assets/care-aid-09.jpg';
import './shared.css';

const AppointmentDate = () => {
    const [selected, setSelected] = useState(new Date());
    let footer = <p>Please pick a day.</p>;
    if (selected) {
        footer = <p>You picked {format(selected, 'PP')}.</p>;
    }
    return (
        <div className="appointment__date  py-16 mx-10 lg:py-20">
            <div className="grid gap-5 lg:grid-cols-2 md:grid-cols-1">
                <div className="appointment__date__left flex items-center">
                    <div className="appointment__date__main">
                        <DayPicker className='w-full'
                            mode="single"
                            selected={selected}
                            onSelect={setSelected}
                            footer={footer}
                        ></DayPicker>
                    </div>
                </div>
                <div className="appointment__date__right">
                    <img className='rounded-2xl ' src={appointmentImage} alt="" />
                </div>
            </div>
        </div>
    );
};
export default AppointmentDate;