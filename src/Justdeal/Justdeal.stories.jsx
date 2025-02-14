import React from "react";
import Justdeal from "./Justdeal";

export default {
  title: "Components/Justdeal",
  component: Jusdeal,
};

const sampleData = [
  {
    name: "Wedding Requisites",
    services: [
      { name: "Banquet Halls", image: "https://via.placeholder.com/150" },
      { name: "Bridal Requisite", image: "https://via.placeholder.com/150" },
      { name: "Caterers", image: "https://via.placeholder.com/150" },
    ],
  },
  {
    name: "Beauty & Spa",
    services: [
      { name: "Beauty Parlours", image: "https://via.placeholder.com/150" },
      { name: "Spa & Massages", image: "https://via.placeholder.com/150" },
      { name: "Salons", image: "https://via.placeholder.com/150" },
    ],
  },
];

export const Default = () => <Justdeal categories={sampleData} />;
