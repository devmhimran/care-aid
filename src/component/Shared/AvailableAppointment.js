import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentData from './AppointmentData';
import BookingModal from './BookingModal';
import toast, { Toaster } from 'react-hot-toast';
import { useQuery } from 'react-query';
import Loading from '../Loading/Loading';

const AvailableAppointment = ({ selected }) => {
    // `http://localhost:5000/available?date=${dateFormate}`
    const [treatment, setTreatment] = useState(null);
    const dateFormate = format(selected, 'PP');
    const { isLoading, data: services, refetch } = useQuery(['available', dateFormate], () =>
     fetch(`http://localhost:5000/available?date=${dateFormate}`).then(res =>
       res.json()
     )
   )
    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div className='container py-16 mx-auto lg:py-20'>
            <p className='text-lg text-center text-primary font-semibold'>Available Services on {format(selected, 'PP')}</p>
            <div className="grid gap-5 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 py-14">
                {
                    services?.map(servicesData => <AppointmentData key={servicesData._id} services={servicesData} setTreatment={setTreatment}></AppointmentData>)
                }
            </div>
            {treatment && <BookingModal key={treatment._id} treatment={treatment} selected={selected} setTreatment={setTreatment} refetch={refetch}></BookingModal>}
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
        </div>
    );
};

export default AvailableAppointment;