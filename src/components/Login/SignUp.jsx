import { Link } from 'react-router-dom';
import TsParticles2 from '../Background/TsParticles2';
import SocialLogin from './SocialLogin';
import {getAuth, sendEmailVerification } from 'firebase/auth';
import app from '../../firebase.config';
import { useContext, useState } from 'react';
import { AuthContext } from '../providers/AuthProviders';


const auth = getAuth(app);

const SignUp = () => {
    const [error, setError] = useState(null);
    const { createUser } = useContext(AuthContext);



    const handleSignUp = (event) => {
        //get input values
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        if (password.length < 6) {
            setError('Password should be 6 characters or more.');
            return;
        }

        /* Create user with email-password authentication */
        createUser(email, password)
            .then((userCredential) => {
                // Signed up msg
                const user = userCredential.user;
                console.log(user);

                sendEmailVerification(auth.currentUser)
                    .then(() => {
                        alert("Check your email to verify your account")
                    });
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.error(errorMessage);
            });




    }



    return (
        <div className='container mx-auto flex justify-center py-8'>
            <TsParticles2></TsParticles2>
            <div className="card">
                <div className="bg ">
                    <div className="bg-gray-200 ">
                        <div className="py-6 px-5 xs:p-0 mx-auto md:w-full md:max-w-md">
                            <h1 className="font-bold text-center text-2xl mb-5">Create an account</h1>
                            <div className="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
                                <div className="px-5 py-7">
                                    <form onSubmit={handleSignUp}>
                                        <label className="font-semibold text-sm text-gray-600 pb-1 block">Email</label>
                                        <input type="email" name='email' className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" />
                                        <label className="font-semibold text-sm text-gray-600 pb-1 block">Password</label>
                                        <input type="password" name='password' className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" />
                                        <button type="submit" className="transition duration-200 h-14 bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:bg-gradient-to-r from-purple-500 to-pink-500 focus:bg-blue-700 focus:outline-none rounded-lg px-3 py-2 text-white w-full">Sign Up</button>
                                    </form>
                                    <p className=''>{error}</p>
                                </div>
                                <div className="py-5 mx-8">
                                    <div className="grid grid-cols-2 gap-1">
                                        <div className="text-center sm:text-left whitespace-nowrap">
                                            <p className="transition duration-200 hover:text-blue-500 text-gray-600 text-sm font-semibold">Already have an account?</p>
                                        </div>
                                        <div className="text-center sm:text-right whitespace-nowrap">
                                            <Link to="/login" className="transition duration-200 hover:text-blue-500 text-gray-600 text-sm font-semibold">Login</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <SocialLogin></SocialLogin>
                        </div>
                    </div>
                </div>
                <div className="blob"></div>
            </div>
        </div>
    );
};

export default SignUp;