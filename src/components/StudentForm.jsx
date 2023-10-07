import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addStudent } from '../store/slice/studentSlice';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
function StudentForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    studentId: uuidv4(), 
    name: '',
    dateOfBirth: '',
    gender: '',
    fatherName: '',
    motherName: '',
    email: '',
    phoneNumber: '',
    address: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    
    setErrors({
      ...errors,
      [name]: '',
    });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    // Name is required
    if (formData.name.trim() === '') {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    // Date of Birth should be greater than 3 years ago
    const currentDate = new Date();
    const dob = new Date(formData.dateOfBirth);
    const threeYearsAgo = new Date();
    threeYearsAgo.setFullYear(currentDate.getFullYear() - 3);
    if (dob >= threeYearsAgo) {
      newErrors.dateOfBirth = 'Date of Birth should be greater than 3 years ago';
      isValid = false;
    }

    // Gender is required
    if (formData.gender.trim() === '') {
      newErrors.gender = 'Gender is required';
      isValid = false;
    }

    // Father's Name is required
    if (formData.fatherName.trim() === '') {
      newErrors.fatherName = "Father's Name is required";
      isValid = false;
    }

    // Mother's Name is required
    if (formData.motherName.trim() === '') {
      newErrors.motherName = "Mother's Name is required";
      isValid = false;
    }

    // Email is required
    if (formData.email.trim() === '') {
      newErrors.email = 'Email is required';
      isValid = false;
    }

    // Phone Number is required and should be 10 digits
    if (formData.phoneNumber.trim() === '' || !/^\d{10}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = 'Phone Number is required and should be 10 digits';
      isValid = false;
    }

    // Address is required
    if (formData.address.trim() === '') {
      newErrors.address = 'Address is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };
console.log(formData)
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      dispatch(addStudent(formData));
      navigate('/');
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-4 bg-white rounded shadow-lg mt-10">
      <h1 className="text-2xl font-semibold mb-4">Student Information Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-1">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded px-3 py-2`}
          />
          {errors.name && <p className="text-red-500">{errors.name}</p>}
        </div>
        <div className="mb-4">
          <label className="block mb-1">Date of Birth:</label>
          <input
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
            {errors.dateOfBirth && <p className="text-red-500">{errors.dateOfBirth}</p>}
        </div>
        <div className="mb-4">
          <label className="block mb-1">Gender:</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          {errors.gender && <p className="text-red-500">{errors.gender}</p>}
        </div>
        <div className="mb-4">
          <label className="block mb-1">Father's Name:</label>
          <input
            type="text"
            name="fatherName"
            value={formData.fatherName}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
          {errors.name && <p className="text-red-500">{errors.fatherName}</p>}
        </div>
        <div className="mb-4">
          <label className="block mb-1">Mother's Name:</label>
          <input
            type="text"
            name="motherName"
            value={formData.motherName}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
          {errors.name && <p className="text-red-500">{errors.motherName}</p>}
        </div>
        <div className="mb-4">
          <label className="block mb-1">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
           {errors.name && <p className="text-red-500">{errors.email}</p>}
        </div>
        <div className="mb-4">
          <label className="block mb-1">Phone Number:</label>
          <input
          maxLength={10}
          minLength={10}
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
           {errors.name && <p className="text-red-500">{errors.phoneNumber}</p>}
        </div>
        <div className="mb-4">
          <label className="block mb-1">Address:</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
          {errors.name && <p className="text-red-500">{errors.address}</p>}
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default StudentForm;
