import React, { useState } from 'react';
import Loading from '../Shared/Loading';
import AddressPickerForm from './AddressPickerForm';

const Donors = () => {


    return (
        <div>
            <h3>This is donors page</h3>
            <Loading></Loading>

            <form>
                <label for="countryCode">Country Code:</label>
                <select id="countryCode" name="countryCode">
                    {/* <!-- You can add more options as needed --> */}
                    <option value="+1">+1 (United States)</option>
                    <option value="+44">+44 (United Kingdom)</option>
                    <option value="+91">+91 (India)</option>
                    {/* <!-- Add more country codes and names as necessary --> */}
                </select>

                <label for="phoneNumber">Phone Number:</label>
                <input type="tel" id="phoneNumber" name="phoneNumber" placeholder="Enter your phone number" required />

                    <button type="submit">Submit</button>
            </form>

        </div>
    );
};

export default Donors;