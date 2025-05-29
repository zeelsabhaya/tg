import React from "react";
import { useNavigate } from "react-router-dom";

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
      button: "Downgrade",
    },
    {
      price: "120",
      title: "Pro",
      highlight: true,
      badge: "Most Popular",
      button: "Upgrade",
    },
    {
      price: "260",
      title: "Enterprise",
      highlight: false,
      button: "Upgrade",
    },
  ];

  return (
    <div className="min-h-screen dark:bg-gray-900 py-16 px-4 sm:px-6 lg:pt-[150px]">
      {/* Heading - show only on large (lg) screens */}
      <div className="text-center mb-14 hidden lg:block">
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">
          Simple, Transparent Pricing
        </h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
          No contracts. No hidden fees. Cancel anytime.
        </p>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 px-[20px] sm:px-[0px] justify-center items-stretch">
        {plans.map((plan, index) => {
          const isHighlight = plan.highlight;

          return (
            <div
              key={index}
              className={`relative w-full max-w-md mx-auto rounded-3xl shadow-xl p-8 flex flex-col justify-between transition-transform transform hover:scale-105 duration-300 ${
                isHighlight
                  ? "bg-indigo-600 text-white"
                  : "bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              }`}
            >
              {isHighlight && plan.badge && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black px-4 py-1 text-sm font-semibold rounded-full shadow-lg">
                  {plan.badge}
                </div>
              )}

              <div className="text-center">
                <h3 className="text-2xl font-semibold mb-2">{plan.title}</h3>
                <div className="text-5xl font-bold mb-1">
                  ${plan.price}
                  <span className="text-base font-medium">/month</span>
                </div>
              </div>

              <button
                onClick={handlePress}
                className={`mt-6 w-full py-3 rounded-xl font-semibold transition ${
                  isHighlight
                    ? "bg-white text-indigo-700 hover:bg-gray-100"
                    : "bg-indigo-600 text-white hover:bg-indigo-700"
                }`}
              >
                {plan.button || "Choose Plan"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
