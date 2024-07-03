import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const MyAppointment = () => {
    const [appointments, setAppointments] = useState([]);
    const [user] = useAuthState(auth);
    useEffect(() => {
        fetch(`http://localhost:5000/bookings?patientEmail=${user.email}`)
            .then(res => res.json())
            .then(data => setAppointments(data))
    }, [user])
    console.log(user.email)
    return (
        <div>
            <h1 className='text-2xl font-bold mb-5'>Total Appointment - {appointments.length}</h1>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Slot</th>
                            <th>Booking Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            appointments.map((data, index) =>
                                <tr>
                                    <th>{index + 1}</th>
                                    <td className='capitalize'>{data.patientName}</td>
                                    <td className='capitalize'>{data.date}</td>
                                    <td className='capitalize'>{data.slot}</td>
                                    <td className='capitalize'>{data.treatment}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointment;