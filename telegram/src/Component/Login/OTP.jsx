import React, { useState, useEffect } from "react";

const OTP = () => {
  const [otp, setOtp] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;
    // Allow only digits (0-9)
    if (/^\d*$/.test(value)) {
      setOtp(value);
    }
  };

  useEffect(() => {
    const html = document.documentElement;
    if (darkMode) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div
      className="min-h-screen bg-gradient-to-tr from-blue-200 via-blue-100 to-blue-50
        dark:bg-gradient-to-tr dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      {/* Dark mode toggle button fixed top right */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="
          fixed top-4 right-4 p-2 rounded-full
          bg-gray-200 text-gray-800 hover:bg-gray-300
          dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600
          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400
          transition
          z-50
        "
        aria-label="Toggle Dark Mode"
        title="Toggle Light/Dark Mode"
      >
        {darkMode ? (
          // Sun icon for light mode
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
            viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M12 3v1m0 16v1m8.485-8.485h1M3 12H2m15.364 6.364l.707.707M6.343 6.343l-.707-.707m12.728 0l-.707-.707M6.343 17.657l-.707.707M12 7a5 5 0 100 10 5 5 0 000-10z" />
          </svg>
        ) : (
          // Moon icon for dark mode
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
            viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z" />
          </svg>
        )}
      </button>

      {/* OTP form */}
      <div className="flex items-center justify-center min-h-screen px-4">
        <div
          className="
            max-w-md w-full p-6
            border rounded-lg shadow-lg
            bg-white border-gray-300
            dark:bg-gray-900 dark:border-gray-600
            sm:p-8
          "
        >
          <h2 className="text-2xl font-semibold mb-6 text-center text-gray-900 dark:text-gray-200">
            Enter OTP
          </h2>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={handleChange}
            className="
              w-full p-3 mb-6 rounded-md
              bg-gray-100 text-gray-900 placeholder-gray-500
              border border-gray-300
              focus:outline-none focus:ring-2 focus:ring-green-600
              transition
              dark:bg-gray-800 dark:text-white dark:placeholder-gray-400 dark:border-gray-600
            "
          />
          <button
            className="
              w-full bg-green-600 text-white p-3 rounded-md
              hover:bg-green-700 transition
              focus:outline-none focus:ring-2 focus:ring-green-400
              dark:bg-green-700 dark:hover:bg-green-800
            "
          >
            Verify OTP
          </button>
        </div>
      </div>
    </div>
  );
};

export default OTP;
