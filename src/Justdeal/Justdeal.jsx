import React from "react";

const Justdeal = ({ categories }) => {
  return (
    <div className="grid grid-cols-2 gap-6 p-6 bg-gray-100">
      {categories.map((category, index) => (
        <div key={index} className="bg-white p-4 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-4">{category.name}</h2>
          <div className="grid grid-cols-3 gap-4">
            {category.services.map((service, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-24 object-cover rounded-md"
                />
                <p className="mt-2 text-sm font-medium">{service.name}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Justdeal;
