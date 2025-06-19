import React from "react";

interface PricingCardProps {
  plan: string;
  price: string;
  features: string[];
  isFeatured?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({
  plan,
  price,
  features,
  isFeatured = false,
}) => {
  return (
    <div
      className={`flex flex-col p-6 rounded-lg transition-all duration-200
        ${isFeatured ? "bg-slate-700 text-white" : "bg-white"}
        hover:shadow-xl focus-within:ring-2 focus-within:ring-blue-400
        sm:w-[300px] w-full`}
      tabIndex={0}
    >
      <h3 className="text-xl font-medium mb-4">{plan}</h3>
      <div className="text-4xl font-bold mb-6">{price}</div>
      <ul className="flex-1 space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <svg
              className="w-5 h-5 mr-2 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      <button
        className={`w-full py-2 px-4 rounded font-medium transition-colors
          ${
            isFeatured
              ? "bg-white text-slate-700 hover:bg-gray-100"
              : "bg-slate-700 text-white hover:bg-slate-800"
          }
          focus:outline-none focus:ring-2 focus:ring-blue-400`}
      >
        Subscribe
      </button>
    </div>
  );
};

export default PricingCard;
