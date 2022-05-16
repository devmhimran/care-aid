import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment, selected }) => {
    const { name, slots } = treatment;
    const handleBookingForm = (e)=>{
        e.preventDefault();
        const date = e.target.date.value;
        const slot = e.target.slot.value;
        const name = e.target.slot.value;
        const email = e.target.email.value;
        const phone = e.target.phone.value;

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
                            <input name='name' type="text" placeholder="Enter Name" className="input input-bordered w-full my-4" />
                            <input name='email' type="text" placeholder="Enter Email" className="input input-bordered w-full my-4" />
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