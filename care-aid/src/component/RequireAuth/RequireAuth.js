import { sendEmailVerification } from 'firebase/auth';
import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import toast, { Toaster } from 'react-hot-toast';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../firebase.init';
import Loading from '../Loading/Loading';

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);
    const location = useLocation();
    if(loading){
        return <Loading></Loading>
    }
    
    if(!user){
        return <Navigate to='/login' state={{from: location}} replace></Navigate>
    }
    console.log(user)
    if (!user.emailVerified) {
        return <div className='container text-center emailVerifySection'>
            <div className="card w-50 mx-auto email__verification__card">
                <div className="card-body py-5">
                    <p>Your email is not verified</p>
                    <p>Please verify your email</p>
                    <button className='btn btn-primary' onClick={async () => {
                        await sendEmailVerification();
                        toast.success('Sent Email');
                        console.log('send email')
                    }}>Resend</button>
                </div>
            </div>
            <Toaster position="top-center" reverseOrder={false} />
        </div>;
    }
    return children;
};

export default RequireAuth;