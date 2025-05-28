import React, { use } from "react";
import { useNavigate } from "react-router";
const Card = () => {
  const navigate = useNavigate();
  const handlePress = () => {
    navigate("/login");
  };
  const plans = [
    {
      price: "80",
      title: "Base",
      highlight: false,
      description: "For most businesses that want to optimize web queries",
      button: "Downgrade",
      bgColor: "bg-white dark:bg-gray-800",
      textColor: "text-gray-900 dark:text-white",
      buttonColor:
        "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600",
      descColor: "text-gray-600 dark:text-gray-400",
    },
    {
      price: "120",
      title: "Pro",
      highlight: true,
      badge: "Most Popular",
      description: "For most businesses that want to optimize web queries",
      button: "Upgrade",
      bgColor: "bg-indigo-500 dark:bg-indigo-600",
      textColor: "text-white",
      buttonColor:
        "bg-white text-indigo-500 hover:bg-gray-50 dark:bg-gray-100 dark:text-indigo-600 dark:hover:bg-gray-200",
      subTextColor: "text-indigo-100 dark:text-indigo-200",
      descColor: "text-indigo-100 dark:text-indigo-200",
    },
    {
      price: "260",
      title: "Enterprise",
      highlight: false,
      description: "For most businesses that want to optimize web queries",
      button: "Upgrade",
      bgColor: "bg-white dark:bg-gray-800",
      textColor: "text-gray-900 dark:text-white",
      buttonColor:
        "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600",
      descColor: "text-gray-600 dark:text-gray-400",
    },
  ];

  return (
    <div className="min-h-screen dark:bg-gray-900 p-4 sm:p-6">
      <div className="container mx-auto pt-8 sm:pt-32">
        <h2 className="text-gray-900 dark:text-white text-3xl mb-2 font-bold tracking-wide text-center">
          Simple, transparent pricing
        </h2>
        <p className="text-gray-500 dark:text-gray-400 text-base mb-12 text-center">
          No contracts. No surprise fees.
        </p>
      </div>

      <div className="container mx-auto flex flex-col lg:flex-row gap-6 max-w-6xl items-stretch justify-center">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`${plan.bgColor} rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-8 flex flex-col justify-between w-full lg:w-80 relative transition-transform hover:scale-105`}
          >
            <div>
              {plan.highlight && plan.badge && (
                <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-indigo-600 dark:bg-indigo-500 text-white text-xs font-semibold rounded-full px-4 py-1">
                  {plan.badge}
                </span>
              )}

              <div className="text-center mb-6">
                <div className={`text-4xl font-bold ${plan.textColor} mb-1`}>
                  ${plan.price}
                  <span
                    className={`text-lg font-normal ${
                      plan.subTextColor || "text-gray-500 dark:text-gray-400"
                    }`}
                  >
                    /month
                  </span>
                </div>

                <h3 className={`text-xl font-semibold ${plan.textColor} mb-3`}>
                  {plan.title}
                </h3>

                <p
                  className={`text-sm ${
                    plan.descColor || "text-gray-600 dark:text-gray-400"
                  }`}
                >
                  {plan.description}
                </p>
              </div>
            </div>
            <button
              className={`w-full text-sm font-medium rounded-lg py-3 px-4 transition-colors ${plan.buttonColor}`}
              onClick={handlePress}
            >
              {plan.button}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
