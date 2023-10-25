import React, { useState } from 'react';

function BloodDonationForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    dateOfBirth: '',
    gender: 'Male',
    email: '',
    phoneNumber: '',
    address: '',
    emergencyContactName: '',
    relationship: '',
    emergencyContactPhone: '',
    lastDonation: 'No',
    weightLessThan110: 'No',
    faintingHistory: 'No',
    positiveTestHistory: 'No',
    malariaHistory: 'No',
    chronicConditions: 'No',
    bloodType: '',
    preferredDate: '',
    preferredTime: 'Morning',
    receiveNotifications: 'No',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    // You can access the form data in the formData object
  };

  return (
    <div>
      <h2>Blood Donor Information</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="bloodType">Blood Type:</label>
          <select
            id="bloodType"
            name="bloodType"
            onChange={handleInputChange}
          >
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
          </select>
        </div>
        <div>
          <label htmlFor="donationFrequency">Donation Frequency:</label>
          <select
            id="donationFrequency"
            name="donationFrequency"
            onChange={handleInputChange}
          >
            <option value="One-Time">One-Time</option>
            <option value="Monthly">Monthly</option>
            <option value="Quarterly">Quarterly</option>
            <option value="Annually">Annually</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default BloodDonationForm;
