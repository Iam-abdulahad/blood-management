import React, { useContext, useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import SocialLogin from './SocialLogin';
// import { getAuth } from 'firebase/auth';
// import app from '../../firebase.config';
import { AuthContext } from '../providers/AuthProviders';

// const auth = getAuth(app);

const Login = () => {

    const [error, setError] = useState(null);
    const { signIn } = useContext(AuthContext);

    const handleLogin = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        if (password.length < 6) {
            setError('Password should be 6 characters or more.');
            return;
        }

        //Sign in with Email and Password

        signIn(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.error(errorMessage);
                setError(errorMessage);
            });

    }


    return (
        <div className='container mx-auto flex justify-center py-8 '>
            <div className="card">
                <div className="bg ">
                    <div className="bg-gray-200 ">
                        <div className="py-6 px-5 xs:p-0 mx-auto md:w-full md:max-w-md">
                            <h1 className="font-bold text-center text-2xl mb-5">Login</h1>
                            <div className="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
                                <div className="px-5 py-7">
                                    <form onSubmit={handleLogin}>
                                        <label className="font-semibold text-sm text-gray-600 pb-1 block">Email</label>
                                        <input type="email" name='email' className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" />
                                        <label className="font-semibold text-sm text-gray-600 pb-1 block">Password</label>
                                        <input type="password" name='password' className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" />
                                        <button type="submit" className="transition duration-200 h-14 bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:bg-gradient-to-r from-purple-500 to-pink-500 focus:bg-blue-700 focus:outline-none rounded-lg px-3 py-2 text-white w-full">Sign in</button>
                                    </form>
                                    <p className=''>{error}</p>
                                    <Link className="transition duration-200 hover:text-blue-500 text-gray-600 text-sm font-semibold">Forgot password?</Link>
                                </div>

                                <div className="py-2 mx-5">
                                    <div className="grid grid-cols-2 gap-1">
                                        <div className="text-center sm:text-left whitespace-nowrap">
                                            <p className="transition duration-200 text-gray-600 text-sm font-semibold">Don't have an account?</p>
                                        </div>
                                        <div className="text-center sm:text-right whitespace-nowrap">
                                            <Link to="/sign_up" className="transition duration-200 hover:text-blue-500 text-gray-600 text-sm font-semibold">Create account</Link>
                                        </div>
                                    </div>
                                </div>
                                <SocialLogin></SocialLogin>
                            </div>

                        </div>

                    </div>



                </div>
                <div className="blob"></div>
            </div>
        </div>

    );
};

export default Login;