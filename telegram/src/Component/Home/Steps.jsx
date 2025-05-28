import React from "react";
import { CheckCircle, ArrowDownCircle } from "lucide-react";

const steps = [
    {
        title: "Step 1",
        description: "Register With Mobile number and OTP",
    },
    {
        title: "Step 2",
        description: "Select any plans and make payment",
    },
    {
        title: "Step 3",
        description: "Complete KYC And You Receive Invoice Joining Link",
    },
];

export default function HowItWorks() {
    return (
        <div className="max-w-xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-10 dark:text-white">
                How it Works
            </h2>
            <div className="relative ml-6">
                {/* Vertical line */}
                <div className="absolute top-0 left-5 w-0.5 h-full bg-blue-500 dark:bg-blue-400"></div>

                {steps.map((step, index) => (
                    <div key={index} className="mb-10 flex items-start">
                        {/* Icon container */}
                        <div className="relative z-10 w-10 h-10 flex items-center justify-center bg-white dark:bg-gray-800 border-2 border-blue-500 dark:border-blue-400 rounded-full">
                            <ArrowDownCircle className="text-blue-600 dark:text-blue-400" size={24} />
                        </div>

                        {/* Text content */}
                        <div className="ml-6">
                            <h3 className="text-lg font-semibold text-black dark:text-white">
                                {step.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">
                                {step.description}
                            </p>
                        </div>
                    </div>
                ))}

                {/* Final step */}
                <div className="flex items-start">
                    <div className="relative z-10 w-10 h-10 flex items-center justify-center bg-blue-600 dark:bg-blue-500 rounded-full">
                        <CheckCircle className="text-white" size={24} />
                    </div>
                    <div className="ml-6">
                        <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                            Ready!
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    );
}
