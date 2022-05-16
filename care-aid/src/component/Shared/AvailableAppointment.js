import { format } from 'date-fns';
import React from 'react';

const AvailableAppointment = ({selected}) => {
    return (
        <div className='  py-16 mx-10 lg:py-20'>
            <p className='text-lg text-center text-primary font-semibold'>Available Services on {format(selected, 'PP')}</p>
        </div>
    );
};

export default AvailableAppointment;