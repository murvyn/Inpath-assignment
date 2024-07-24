import React from "react";
import { AccountType as AccountTypeProps } from "../types/types";

const AccountType: React.FC<AccountTypeProps> = ({ name, description, image, availability }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4">
      <div className="mb-4">
        <img src={image} alt={name} className="w-1/3 h-24 object-cover rounded-md" />
      </div>
      <div className="text-lg font-semibold mb-2">{name}</div>
      <div className="text-gray-700 mb-2">{description}</div>
      <div className={`text-sm ${availability ? "text-green-500" : "text-red-500"}`}>
        {availability ? "Available" : "Coming soon"}
      </div>
    </div>
  );
};

export default AccountType;

