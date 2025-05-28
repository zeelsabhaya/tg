import React, { useState } from "react";

export default function KYCForm() {
  const [formData, setFormData] = useState({
    panNumber: "",
    dob: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("KYC Form Data:", formData);
    alert("KYC Submitted Successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md space-y-4"
      >
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">KYC Form</h2>

        <input
          type="text"
          name="panNumber"
          placeholder="PAN Card Number"
          value={formData.panNumber}
          onChange={handleChange}
          className="w-full p-3 rounded-xl border border-gray-300 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
          required
        />

        <input
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          className="w-full p-3 rounded-xl border border-gray-300 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition dark:bg-blue-500 dark:hover:bg-blue-600"
        >
          Submit KYC
        </button>
      </form>
    </div>
  );
}
