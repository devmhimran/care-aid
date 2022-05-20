import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import registerImage from '../../Assets/care-aid-11.jpg';
import { AiOutlineGoogle } from 'react-icons/ai';
import { useForm } from 'react-hook-form';
import { async } from '@firebase/util';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { updateProfile } from 'firebase/auth';

const Register = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [errorMessage, setErrorMessage] = useState('');
    const [createUserWithEmailAndPassword, user, loading, error,] = useCreateUserWithEmailAndPassword(auth);
    const [sendEmailVerification, sending, emailError] = useSendEmailVerification(auth);
    const [updateProfile, updating, userUpdateError] = useUpdateProfile(auth);
    const location = useLocation();
    const navigate = useNavigate();
    let userError ;

    const onSubmit = async (data) => {
        const name = data.name;
        const email = data.email;
        const password = data.password;
        const confirmPassword = data.confirmPassword;
        
       
        if (password !== confirmPassword) {
            setErrorMessage('Password not matched');
        }
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: data.name });
        await sendEmailVerification();    
    };
    if (error) {
        userError = error?.message;
    }
    let from = location.state?.from?.pathname || "/";
    if(user){
        navigate(from, {replace:true});
    }
    return (
        <div className='container mx-auto'>
            <div className="hero p-8 lg:p-40 rounded-2xl">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="register__image">
                        <img className='w-9/12 mx-auto' src={registerImage} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                        <div className="card-body">
                            <div className="card-title">
                                <h1 className='text-3xl font-extrabold'>Sign up</h1>
                            </div>

                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name='name' placeholder="Name" className="input input-bordered"
                                        {...register("name", {
                                            required: {
                                                value: true,
                                                message: "Name Required"
                                            },
                                            pattern: {
                                                value: /^[A-Za-z]+$/i,
                                                message: "Enter valid name"
                                            }

                                        })} />
                                    {errors.name?.type === 'required' && <span className='text-sm text-red-500 mt-2'>{errors.name.message}</span>}
                                    {errors.name?.type === 'pattern' && <span className='text-sm text-red-500 mt-2'>{errors.name.message}</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input name='email' type="email" placeholder="Email" className="input input-bordered" {
                                        ...register("email",
                                            {
                                                required: {
                                                    value: true,
                                                    message: "Email Required"
                                                },
                                                pattern: {
                                                    value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                                                    message: "Enter valid email"
                                                }
                                            })} />
                                    {errors.email?.type === 'required' && <span className='text-sm text-red-500 mt-2'>{errors.email.message}</span>}
                                    {errors.email?.type === 'pattern' && <span className='text-sm text-red-500 mt-2'>{errors.email.message}</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Image</span>
                                    </label>
                                    <input type="file" className="block w-full text-sm text-purple-700
                                    file:mr-4 file:py-2 file:px-4
                                    file:rounded-full file:border-0
                                    file:text-sm file:font-semibold
                                    file:bg-purple-100 file:text-violet-700
                                    hover:file:bg-purple-200" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input name='password' type="password" placeholder="Password" className="input input-bordered"  {...register("password",
                                        {
                                            required: {
                                                value: true,
                                                message: 'Password required'
                                            },
                                            minLength: {
                                                value: 6,
                                                message: 'Must be 6 characters' // JS only: <p>error message</p> TS only support string
                                            }

                                        })} />
                                    {errors.password?.type === 'required' && <span className='text-sm text-red-500 mt-2'>{errors.password.message}</span>}
                                    {errors.password?.type === 'minLength' && <span className='text-sm text-red-500 mt-2'>{errors.password.message}</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Confirm Password</span>
                                    </label>
                                    <input name='confirmPassword' type="password" placeholder="Password" className="input input-bordered"  {...register("confirmPassword",
                                        {
                                            required: {
                                                value: true,
                                                message: 'Confirm password required'
                                            },
                                            minLength: {
                                                value: 6,
                                                message: 'Must be 6 characters' // JS only: <p>error message</p> TS only support string
                                            }

                                        })} />
                                    {errors.confirmPassword?.type === 'required' && <span className='text-sm text-red-500 mt-2'>{errors.confirmPassword.message}</span>}
                                    {errors.confirmPassword?.type === 'minLength' && <span className='text-sm text-red-500 mt-2'>{errors.confirmPassword.message}</span>}
                                    <span className='text-sm text-red-500 mt-2'>{errorMessage}</span>
                                    <span className='mt-2 text-red-500'>{userError}</span>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Sign up</button>
                                </div>
                            </form>

                            <div className="divider">OR</div>
                            <div className="form-control mt-6">
                                <button className="btn bg-white text-black hover:bg-white hover:shadow-lg shadow-neutral-200"><span className='mr-2 text-2xl'><AiOutlineGoogle></AiOutlineGoogle></span> Google Sign In</button>
                            </div>
                            <div className="creat__account__Link mt-4 text-center">
                                <p>Already have account?</p> <Link to='/login' className="link link-primary no-underline font-medium">Sign in</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;