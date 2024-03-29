import React from 'react';
import loginImage from '../../Assets/care-aid-10.jpg';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import { useForm } from "react-hook-form";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';


const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [signInWithEmailAndPassword,user, loading ,error] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const location = useLocation();
    let userError;
    const onSubmit = (data) => {
        const email = data.email;
        const password = data.password;
        signInWithEmailAndPassword(email, password);
        
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
                    <div className="login__image">
                        <img className='w-9/12 mx-auto' src={loginImage} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                        <div className="card-body">
                            <div className="card-title">
                                <h1 className='text-3xl font-extrabold'>Sign in</h1>
                            </div>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input name='email' type="text" placeholder="Email" className="input input-bordered"
                                        {...register("email", {
                                            pattern: {
                                                value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                                                message: "Provide a valid email"
                                            },
                                            required: {
                                                value: true,
                                                message: "Email required"
                                            }
                                        })

                                        } />
                                    {errors.email?.type === 'required' && <span className='text-sm text-red-500 mt-2'>{errors.email.message}</span>}
                                    {errors.email?.type === 'pattern' && <span className='text-sm text-red-500 mt-2'>{errors.email.message}</span>}
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
                                    <label className="label">
                                        <Link to='/register' className="label-text-alt link link-hover">Forgot password?</Link>
                                    </label>
                                    <span className='mt-2 text-red-500'>{userError}</span>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Sign in</button>
                                </div>
                            </form>
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