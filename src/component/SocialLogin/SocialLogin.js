import React from 'react';
import { AiOutlineGoogle } from 'react-icons/ai';
import auth from '../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const handleGoogleSignIn = ()=>{
        signInWithGoogle();
    }
    return (
        <div className="form-control mt-6">
            <button onClick={handleGoogleSignIn} className="btn bg-white text-black hover:bg-white hover:shadow-lg shadow-neutral-200"><span className='mr-2 text-2xl'><AiOutlineGoogle></AiOutlineGoogle></span> Google Sign In</button>
        </div>
    );
};

export default SocialLogin;