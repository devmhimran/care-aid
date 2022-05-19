import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import toast, { Toaster } from 'react-hot-toast';

const BookingModal = ({ treatment, selected,setTreatment }) => {
    const { _id, name, slots } = treatment;
    const [user] = useAuthState(auth);
    const handleBookingForm = (e)=>{
        e.preventDefault();
        const date = e.target.date.value;
        const slot = e.target.slot.value;
        const email = e.target.email.value;
        const phone = e.target.phone.value;

        const booking = {
            treatmentId: _id,
            treatment: name,
            date: format(selected, 'PP'),
            slot,
            patientName: user.displayName,
            patientEmail: user.email,
            phone: phone
        }

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setTreatment(null);
        })
        console.log(date, slot, name, email, phone);
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle bg-red-500 border-red-500 absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <div className="booking__data mt-5">
                        <form onSubmit={handleBookingForm}>
                            <input type="text" name='date' value={format(selected, 'PP')} className="input input-bordered w-full my-4" disabled />
                            <select name='slot' className="select select-bordered w-full my-4">
                                {
                                    slots.map(data => <option key={data.toString()} value={data}>{data}</option>)
                                }
                            </select>
                            <input name='name' type="text" value={user.displayName}  placeholder="Enter Name" className="input input-bordered w-full my-4" disabled />
                            <input name='email' type="text" value={user.email} placeholder="Enter Email" className="input input-bordered w-full my-4" disabled />
                            <input name='phone' type="text" placeholder="Enter Phone" className="input input-bordered w-full my-4" />
                            <button className="btn btn-primary w-full my-4">Make Appointment</button>
                            
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;