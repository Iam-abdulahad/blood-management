import  { useState } from 'react';
import './BecomeDonor.css';
import TsParticles2 from '../Background/TsParticles2';
import Swal from 'sweetalert2';



const BecomeDonor = () => {

    // const image_token = import.meta.env.VITE_Image_Upload_Token;
    // const imageHostingUrl = `https://api.imgbb.com/1/upload?key=${image_token}`;


    const [gender, setGender] = useState('');
    // const [previewImage, setPreviewImage] = useState(null);

    const handleGenderChange = (event) => {
        setGender(event.target.value);
    };


    // const handleImageChange = (event) => {
    //     const file = event.target.files[0];
    //     if (file) {
    //         const reader = new FileReader();
    //         reader.onloadend = () => {
    //             setPreviewImage(reader.result);
    //         };
    //         reader.readAsDataURL(file);
    //     }
    // };


    const handleDonorRegistration = event => {
        event.preventDefault();
        const image =  event.target.files;
        const name = event.target.name.value;
        const email = event.target.email.value;
        const phone = event.target.phone.value;
        const bloodGroup = event.target.bloodGroup.value;
        const birthday = event.target.birthday.value;
        const lastDonationDate = event.target.lastDonationDate.value;
        const donorWeight = event.target.donorWeight.value;
        const height = event.target.height.value;
        const countryName = event.target.countryName.value;
        const districtName = event.target.districtName.value;
        const donor = {image, name, email, phone, bloodGroup, gender, birthday, lastDonationDate, donorWeight, height, countryName, districtName }


        fetch('https://blood-management-server.onrender.com/donor', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(donor)
        })
            .then(res => res.json())
            .then(data => {
                Swal.fire({
                    title: "Congratulations!",
                    text: "You are in the donor list!",
                    icon: "success"
                  });
                  event.target.reset();
            })
    }

    return (
        <section className='container mx-auto py-8'>
            <TsParticles2></TsParticles2>

            <h2 className="text-2xl font-bold text-gray-200 py-6 text-center">Become a donor</h2>

            <div className="flex items-center my-8">
                <div className="flex-grow bg-gradient-to-r from-pink-500 via-yellow-500 to-pink-500 h-1 mx-4"></div>
                <div className="text-gray-400 text-lg">Fill the form below</div>
                <div className="flex-grow bg-gradient-to-r from-pink-500 via-yellow-500 to-pink-500 h-1 mx-4"></div>
            </div>


            <div className="grid justify-items-center">

                <form onSubmit={handleDonorRegistration} className='w-full md:w-4/5 sm:w-3/5 px-8'>


                    {/* <div className="bg-gradient-to-r from-purple-400 to-pink-500 w-96 mx-auto my-8 rounded-full p-8 shadow-lg text-center">
                        <div className="mb-6">
                            {previewImage ? (
                                <img src={previewImage} alt="Preview" className="text-white mx-auto rounded-full" width="48" height="48" />
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white mx-auto">
                                    <path d="M12 19V5M5 12l7-7 7 7" />
                                </svg>
                            )}
                            <h4 className="text-2xl font-bold text-white mb-4">Upload your Profile Picture</h4>
                        </div>
                        <label htmlFor="fileInput" className="cursor-pointer inline-block bg-white text-purple-500 rounded-full px-6 py-3 shadow-md hover:shadow-lg transition duration-300">
                            Select Photo
                        </label>
                        <input id="fileInput" className="hidden" name="file" type="file" onChange={handleImageChange} accept="image/*" />
                    </div> */}


                    <div className='grid  grid-col md:grid-cols-2 gap-1 md:gap-8'>
                        <input placeholder="Full Name" className=" bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="text" name='name' />

                        <input placeholder="Email" className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="email" name='email' />

                        <input placeholder="Phone Number" className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="tel" name='phone' />
                    </div>



                    <div className='grid  grid-col md:grid-cols-2 gap-1 md:gap-8'>

                        {/* Blood group selection section */}

                        <div className="bg-gray-700 rounded-lg p-6 mb-4 ">
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

                        <div className="bg-gray-700 rounded-lg p-6 mb-4 text-white">
                            <h1 className="text-2xl font-bold mb-4">Gender Input</h1>

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

                            <p className="mt-4">Selected gender: {gender}</p>
                        </div>

                        {/* Birthday Selection */}
                        <div className="bg-gray-700 rounded-lg p-6 mb-4">
                            <h4 className="text-gray-200 text-lg mb-4 font-bold">Select Your Birthday</h4>

                            <div className="mb-4">
                                <input type="date" id="birthday" name="birthday" className="border p-2 rounded-md focus:outline-none focus:ring focus:border-blue-300" />
                            </div>

                        </div>

                        {/* Last Last Donation Date */}
                        <div className="bg-gray-700 p-6 rounded-lg  mb-4">
                            <h4 className="text-gray-200 text-lg mb-4 font-bold">Last Donation Date</h4>

                            <div className="mb-4">
                                <input type="date" id="lastDonationDate" name="lastDonationDate" className="border p-2 rounded-md focus:outline-none focus:ring focus:border-blue-300" />
                            </div>

                        </div>

                        {/* Pick Weight and Height */}

                        <div className="bg-gray-700 p-6 rounded-lg  mb-4 text-gray-700">
                            <label htmlFor="weight" className="text-gray-200 block mb-2">Weight (kg):</label>
                            <input type="number" id="weight" name="donorWeight" placeholder="Enter your weight" required
                                className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300" />

                            <label htmlFor="height" className="text-gray-200 block mt-4 mb-2">Height (cm):</label>
                            <input type="number" id="height" name="height" placeholder="Enter your height" required
                                className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300" />

                        </div>

                        {/* Pick user's address  */}

                        <div className="bg-gray-700 p-6 rounded-lg mb-4 text-gray-200">
                            <label htmlFor="country" className="text-gray-200 block mb-2 ">Country Name:</label>
                            <input type="text" id="weight" name="countryName" placeholder="Enter your Country Name" required
                                className="w-full p-2 border rounded focus:outline-none focus:ring text-gray-800 focus:border-blue-300" />

                            <label htmlFor="district" className="text-gray-200 block mt-4 mb-2">District Name:</label>
                            <input type="text" id="district" name="districtName" placeholder="Enter Your District Name" required
                                className="w-full p-2 border rounded focus:outline-none focus:ring text-gray-800 focus:border-blue-300" />

                        </div>


                    </div>

                    <button className="flex justify-center mx-auto bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150" type="submit">Register</button>
                </form>
            </div>
        </section>
    );
};

export default BecomeDonor;