import React, { useState } from 'react';
import './BecomeDonor.css';
import TsParticles2 from '../Background/TsParticles2';
import AddressPickerForm from './AddressPickerForm';

const BecomeDonor = () => {


    const [gender, setGender] = useState('');

    const handleGenderChange = (event) => {
        setGender(event.target.value);
    };

    return (
        <section className='container mx-auto py-8'>
            <TsParticles2></TsParticles2>

            <h2 className="text-2xl font-bold text-gray-200 py-6 text-center">Become a donor</h2>

            <div className="flex items-center my-8">
                <div className="flex-grow bg-gradient-to-r from-pink-500 via-yellow-500 to-pink-500 h-1 mx-4"></div>
                <div className="text-gray-700 text-lg">Fill the form below</div>
                <div className="flex-grow bg-gradient-to-r from-pink-500 via-yellow-500 to-pink-500 h-1 mx-4"></div>
            </div>


            <div className="grid justify-items-center">

                <form className='w-full md:w-4/5 sm:w-3/5 px-8'>


                    <div className=" bg-gray-400 w-80 flex justify-center items-center mx-auto mb-8 rounded-lg">
                        <div className="text-center mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" stroke-linejoin="round" stroke-linecap="round" viewBox="0 0 24 24" stroke-width="2" fill="none" stroke="currentColor" className="text-blue-500 inline-block mb-2">
                                <polyline points="16 16 12 12 8 16"></polyline>
                                <line y2="21" x2="12" y1="12" x1="12"></line>
                                <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path>
                                <polyline points="16 16 12 12 8 16"></polyline>
                            </svg>

                            <h4 className='text-lg font-bold mb-4'>Upload your Profile Picture</h4>

                            <input className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" name="file" type="file" placeholder="Select Photo" />
                        </div>
                    </div>



                    <div className='grid  grid-col md:grid-cols-2 gap-1 md:gap-8'>
                        <input placeholder="Full Name" className=" bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="text" />

                        <input placeholder="Email" className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="email" />

                        <input placeholder="Phone Number" className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="text" />
                    </div>



                    <div className='grid  grid-col md:grid-cols-2 gap-1 md:gap-8'>

                        {/* Blood group selection section */}

                        <div className="bg-gray-700 p-4 rounded-lg p-2 mb-4 ">
                            <h4 className="text-gray-200 text-lg mb-4 font-bold">What is your blood type?</h4>
                            <select id="bloodGroup" name="bloodGroup" className="border p-2 rounded-md focus:outline-none focus:ring focus:border-blue-300">
                                <option value="" disabled selected className="hidden">Select a Blood Group</option>
                                <option value="A+" className="bg-green-500 text-white">A+</option>
                                <option value="A-" className="bg-green-500 text-white">A-</option>
                                <option value="B+" className="bg-blue-500 text-white">B+</option>
                                <option value="B-" className="bg-blue-500 text-white">B-</option>
                                <option value="AB+" className="bg-purple-500 text-white">AB+</option>
                                <option value="AB-" className="bg-purple-500 text-white">AB-</option>
                                <option value="O+" className="bg-red-500 text-white">O+</option>
                                <option value="O-" className="bg-red-500 text-white">O-</option>
                            </select>
                        </div>

                        {/* Gender Selection */}

                        <div className="bg-gray-700 p-4 rounded-lg p-2 mb-4 text-white">
                            <h1 className="text-2xl font-bold mb-4">Gender Input</h1>
                            <form>
                                <label className="block mb-2">
                                    <input
                                        type="radio"
                                        value="male"
                                        checked={gender === 'male'}
                                        onChange={handleGenderChange}
                                        className="mr-2"
                                    />
                                    Male
                                </label>
                                <label className="block mb-2">
                                    <input
                                        type="radio"
                                        value="female"
                                        checked={gender === 'female'}
                                        onChange={handleGenderChange}
                                        className="mr-2"
                                    />
                                    Female
                                </label>
                                <label className="block mb-2">
                                    <input
                                        type="radio"
                                        value="other"
                                        checked={gender === 'other'}
                                        onChange={handleGenderChange}
                                        className="mr-2"
                                    />
                                    Other
                                </label>
                            </form>
                            <p className="mt-4">Selected gender: {gender}</p>
                        </div>

                        {/* Brithday Selection */}
                        <div className="bg-gray-700 p-6 rounded-lg p-2 mb-4">
                            <h4 className="text-gray-200 text-lg mb-4 font-bold">Select Your Birthday</h4>

                            <div className="mb-4">
                                <input type="date" id="birthday" name="birthday" className="border p-2 rounded-md focus:outline-none focus:ring focus:border-blue-300" />
                            </div>

                        </div>

                        {/* Weight and Height */}

                        <div className="bg-gray-700 p-6 rounded-lg p-2 mb-4 text-white">
                            <label for="weight" className="block mb-2">Weight (kg):</label>
                            <input type="number" id="weight" name="weight" placeholder="Enter your weight" required
                                className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300" />

                            <label for="height" className="block mt-4 mb-2">Height (cm):</label>
                            <input type="number" id="height" name="height" placeholder="Enter your height" required
                                className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300" />

                            <button type="submit"
                                className="mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 focus:outline-none focus:ring focus:border-blue-300">
                                Submit
                            </button>
                        </div>


                    </div>

                    <input placeholder="Facebook Profile URL" className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="text" />

                    <button className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150" type="submit">Apply</button>
                </form>
            </div>
        </section>
    );
};

export default BecomeDonor;