import React, { useState } from 'react';
import AppointmentDate from '../Shared/AppointmentDate';
import AvailableAppointment from '../Shared/AvailableAppointment';

const Appointment = () => {
    const [selected, setSelected] = useState(new Date());
    return (
        <div className='container mx-auto'>
            <AppointmentDate selected={selected} setSelected={setSelected}></AppointmentDate>
            <AvailableAppointment selected={selected} ></AvailableAppointment>
        </div>
    );
};

export default Appointment;