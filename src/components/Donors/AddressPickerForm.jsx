// AddressPickerForm.js

import React, { useState } from 'react';

const AddressPickerForm = () => {
    const [address, setAddress] = useState({
        street: '',
        city: '',
        state: '',
        zip: '',
    });

    const handleChange = (e) => {
        setAddress({
            ...address,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Do something with the selected address (e.g., send it to the server)
        console.log('Selected Address:', address);
    };

    return (
        <div className="container mx-auto ">
            <form onSubmit={handleSubmit} className="max-w-md mx-auto p-2 mb-4 bg-gray-400 rounded-md shadow-md">
                <h2 className="text-2xl font-semibold mb-4">Address</h2>

                {/* Street */}
                <div className="mb-4">
                    <label htmlFor="street" className="block text-gray-700 font-semibold mb-2">
                        Street
                    </label>
                    <input
                        type="text"
                        id="street"
                        name="street"
                        value={address.street}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        required
                    />
                </div>

                {/* City */}
                <div className="mb-4">
                    <label htmlFor="city" className="block text-gray-700 font-semibold mb-2">
                        City
                    </label>
                    <input
                        type="text"
                        id="city"
                        name="city"
                        value={address.city}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        required
                    />
                </div>

                {/* State */}
                <div className="mb-4">
                    <label htmlFor="state" className="block text-gray-700 font-semibold mb-2">
                        State
                    </label>
                    <input
                        type="text"
                        id="state"
                        name="state"
                        value={address.state}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        required
                    />
                </div>

                {/* Zip */}
                <div className="mb-6">
                    <label htmlFor="zip" className="block text-gray-700 font-semibold mb-2">
                        Zip Code
                    </label>
                    <input
                        type="text"
                        id="zip"
                        name="zip"
                        value={address.zip}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        required
                    />
                </div>

            </form>
        </div>
    );
};

export default AddressPickerForm;
