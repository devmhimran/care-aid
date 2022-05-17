import React from 'react';
import loginImage from '../../Assets/care-aid-10.jpg';
import { AiOutlineGoogle } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='container mx-auto'>
            <div class="hero p-8 lg:p-40 rounded-2xl">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <div class="login__image">
                        <img className='w-9/12 mx-auto' src={loginImage} alt="" />
                    </div>
                    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                        <div class="card-body">
                            <div className="card-title">
                                <h1 className='text-3xl font-extrabold'>Login</h1>
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="Email" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="Password" class="input input-bordered" />
                                <label class="label">
                                    <Link to='/' class="label-text-alt link link-hover">Forgot password?</Link>
                                </label>
                            </div>
                            <div class="form-control mt-6">
                                <button class="btn btn-primary">Login</button>
                            </div>
                            <div class="divider">OR</div>
                            <div class="form-control mt-6">
                                <button class="btn bg-white text-black hover:bg-white hover:shadow-lg shadow-neutral-200"><span className='mr-2 text-2xl'><AiOutlineGoogle></AiOutlineGoogle></span> Google Sign In</button>
                            </div>
                            <div className="creat__account__Link mt-4 text-center">
                                <Link to='/register' class="link link-primary no-underline font-medium">Create Account</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;