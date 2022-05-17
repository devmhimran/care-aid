import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentData from './AppointmentData';
import BookingModal from './BookingModal';

const AvailableAppointment = ({selected}) => {
    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[]);
    return (
        <div className='container py-16 mx-auto lg:py-20'>
            <p className='text-lg text-center text-primary font-semibold'>Available Services on {format(selected, 'PP')}</p>
            <div className="grid gap-5 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 py-14">
                {
                    services.map(servicesData => <AppointmentData key={servicesData._id} services={servicesData} setTreatment={setTreatment}></AppointmentData>)
                }
            </div> 
            { treatment && <BookingModal key={treatment._id} treatment={treatment} selected={selected}></BookingModal> }
        </div>
    );
};

export default AvailableAppointment;