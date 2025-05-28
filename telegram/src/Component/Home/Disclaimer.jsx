import React from "react";

const Disclaimer = () => {
    return (
        <div className="dark:bg-gray-900 py-16 px-6 text-center transition-colors duration-300">
            <h1 className="text-3xl font-semibold text-black dark:text-white mb-6">
                Disclaimer
            </h1>
            <p className="text-gray-800 dark:text-gray-300 max-w-3xl mx-auto text-base leading-relaxed">
                Cosmofeed Technologies Pvt. Ltd. shall not be held liable for any content or materials
                published, sold, or distributed by content creators on our associated apps or websites.
                We do not endorse or take responsibility for the accuracy, legality, or quality of their content.
                Users must exercise their own judgment and discretion when relying on such content.
                Cosmofeed disclaims all liability for any losses or damages incurred.
                By using our services, you agree to these terms.{" "}
                <span className="underline cursor-pointer text-blue-600 dark:text-blue-400">
                    Learn more.
                </span>
            </p>
        </div>
    );
};

export default Disclaimer;
