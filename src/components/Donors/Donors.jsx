import React, { useState } from 'react';
import Loading from '../Shared/Loading';
import AddressPickerForm from './AddressPickerForm';

const Donors = () => {


    return (
        <div>
            <h3>This is donors page</h3>
            <Loading></Loading>

            <form className="bg-white p-8 rounded shadow-md max-w-md">
                <label for="weight" className="block text-gray-700 mb-2">Weight (kg):</label>
                <input type="number" id="weight" name="weight" placeholder="Enter your weight" required
                    className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300" />

                <label for="height" className="block text-gray-700 mt-4 mb-2">Height (cm):</label>
                <input type="number" id="height" name="height" placeholder="Enter your height" required
                    className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300" />

                <button type="submit"
                    className="mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 focus:outline-none focus:ring focus:border-blue-300">
                    Submit
                </button>
            </form>

        </div>
    );
};

export default Donors;