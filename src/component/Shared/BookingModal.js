import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import toast from 'react-hot-toast';

const BookingModal = ({ treatment, selected, setTreatment,refetch }) => {
  const { _id, name, slots,available } = treatment;
  const [user] = useAuthState(auth);
  const handleBookingForm = (e) => {
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
        if (data.success) {
          toast.custom((t) => (
            <div
              className={`${t.visible ? 'animate-enter' : 'animate-leave'
                } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
            >
              <div className="flex-1 w-0 p-4">
                <div className="flex items-start">
                  <div>
                    📅
                  </div>
                  <div className="ml-3 flex-1">
                    <p className="text-sm font-medium text-gray-900">
                      Congratulations {name} Appointment Set
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                      At {slot}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex border-l border-gray-200">
                <button
                  onClick={() => toast.dismiss(t.id)}
                  className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  Close
                </button>
              </div>
            </div>
          ))
        } else {
          toast.custom((t) => (
            <div
              className={`${t.visible ? 'animate-enter' : 'animate-leave'
                } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
            >
              <div className="flex-1 w-0 p-4">
                <div className="flex items-start">
                  <div>
                    📅
                  </div>
                  <div className="ml-3 flex-1">
                    <p className="text-sm font-medium text-gray-900">
                      {name} Already Appointment Set
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                      At {data.booking.slot}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex border-l border-gray-200">
                <button
                  onClick={() => toast.dismiss(t.id)}
                  className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  Close
                </button>
              </div>
            </div>
          ))
        }
        refetch();
        setTreatment(null);
      })
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
                  available.map(data => <option key={data.toString()} value={data}>{data}</option>)
                }
              </select>
              <input name='name' type="text" value={user.displayName} placeholder="Enter Name" className="input input-bordered w-full my-4" disabled />
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