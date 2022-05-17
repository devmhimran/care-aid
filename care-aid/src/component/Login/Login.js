import React from 'react';
import loginImage from '../../Assets/care-aid-10.jpg';
import { Link } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    return (
        <div className='container mx-auto'>
            <div className="hero p-8 lg:p-40 rounded-2xl">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="login__image">
                        <img className='w-9/12 mx-auto' src={loginImage} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                        <div className="card-body">
                            <div className="card-title">
                                <h1 className='text-3xl font-extrabold'>Sign in</h1>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="Email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="Password" className="input input-bordered" />
                                <label className="label">
                                    <Link to='/' className="label-text-alt link link-hover">Forgot password?</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Sign in</button>
                            </div>
                            <div className="divider">OR</div>
                            <SocialLogin></SocialLogin>
                            <div className="creat__account__Link mt-4 text-center">
                                <Link to='/register' className="link link-primary no-underline font-medium">Create Account</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;