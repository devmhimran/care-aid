import React from 'react';

const Login = () => {
    return (
        <div className='container mx-auto'>
            <div class="hero p-40 bg-base-200 rounded-2xl">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <div class="text-center ml-14 lg:text-left">
                        <h1 class="text-5xl font-bold">Login now!</h1>
                        <p class="py-6 mr-8">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        
                        <div class="card-body">
                        <div className="card-title">
                            <h1>Login</h1>
                        </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" class="input input-bordered" />
                                <label class="label">
                                    <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div class="form-control mt-6">
                                <button class="btn btn-primary">Login</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;