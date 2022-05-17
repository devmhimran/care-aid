import React from 'react';
import { Link } from 'react-router-dom';
import registerImage from '../../Assets/care-aid-10.jpg';
import { AiOutlineGoogle } from 'react-icons/ai';

const Register = () => {
    return (
        <div className='container mx-auto'>
            <div class="hero p-8 lg:p-40 rounded-2xl">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <div class="register__image">
                        <img className='w-9/12 mx-auto' src={registerImage} alt="" />
                    </div>
                    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                        <div class="card-body">
                            <div className="card-title">
                                <h1 className='text-3xl font-extrabold'>register</h1>
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Email" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Image</span>
                                </label>
                                <input type="file" class="block w-full text-sm text-purple-700
                                    file:mr-4 file:py-2 file:px-4
                                    file:rounded-full file:border-0
                                    file:text-sm file:font-semibold
                                    file:bg-purple-100 file:text-violet-700
                                    hover:file:bg-purple-200" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="Password" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Confirm Password</span>
                                </label>
                                <input type="text" placeholder="Password" class="input input-bordered" />
                            </div>
                            <div class="form-control mt-6">
                                <button class="btn btn-primary">Sign up</button>
                            </div>
                            <div class="divider">OR</div>
                            <div class="form-control mt-6">
                                <button class="btn bg-white text-black hover:bg-white hover:shadow-lg shadow-neutral-200"><span className='mr-2 text-2xl'><AiOutlineGoogle></AiOutlineGoogle></span> Google Sign In</button>
                            </div>
                            <div className="creat__account__Link mt-4 text-center">
                                <p>Already have account?</p> <Link to='/login' class="link link-primary no-underline font-medium">Sign in</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;