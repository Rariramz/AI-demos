import React from "react";
import PricingCard from "./components/PricingCard";

function App() {
  const plans = [
    {
      plan: "Standard",
      price: "$100",
      features: [
        "50,000 Requests",
        "4 contributors",
        "Up to 3 GB storage space",
      ],
    },
    {
      plan: "Pro",
      price: "$200",
      features: [
        "100,000 Requests",
        "7 contributors",
        "Up to 6 GB storage space",
      ],
      isFeatured: true,
    },
    {
      plan: "Expert",
      price: "$500",
      features: [
        "200,000 Requests",
        "11 contributors",
        "Up to 10 GB storage space",
      ],
    },
  ];

  return (
    <div className="min-h-screen p-8 bg-gray-900">
      <h1 className="text-4xl font-bold text-center mb-12 text-white">
        Pricing
      </h1>
      <div className="flex flex-col sm:flex-row gap-8 justify-center items-stretch">
        {plans.map((plan, idx) => (
          <PricingCard key={idx} {...plan} />
        ))}
      </div>
    </div>
  );
}

export default App;
