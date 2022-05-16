import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentData from './AppointmentData';

const AvailableAppointment = ({selected}) => {
    const [services, setServices] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[]);
    return (
        <div className='container py-16 mx-10 lg:py-20'>
            <p className='text-lg text-center text-primary font-semibold'>Available Services on {format(selected, 'PP')}</p>
            <div className="grid gap-5 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 py-14">
                {
                    services.map(servicesData => <AppointmentData key={servicesData._id} services={servicesData}></AppointmentData>)
                }
            </div> 
        </div>
    );
};

export default AvailableAppointment;