import React from "react";
import { Badge } from "./ui/badge";

const LatestJobCards = () => {
  return (
    <div className="relative bg-white border border-gray-100 rounded-2xl shadow-[0_10px_25px_rgba(0,0,0,0.05)] p-6 transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-[0_12px_30px_rgba(0,0,0,0.12)] cursor-pointer">
      {/* Top gradient border strip */}
      <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>

      {/* Company Info */}
      <div className="mb-4">
        <h1 className="text-xl font-semibold text-gray-800">🚀 Company Name</h1>
        <p className="text-sm text-gray-500">📍 India</p>
      </div>

      {/* Job Title & Description */}
      <div>
        <h2 className="text-lg font-bold text-blue-600 mb-1">
          Frontend Developer
        </h2>
        <p className="text-sm text-gray-600 leading-relaxed">
          Work on cutting-edge UI interfaces with a fast-growing startup.
        </p>
      </div>

      {/* Badges */}
      <div className="flex flex-wrap gap-3 mt-5">
        <Badge
          className="text-blue-700 font-medium bg-blue-100 shadow-inner px-3 py-1 rounded-full"
          variant="ghost"
        >
          12 Positions
        </Badge>
        <Badge
          className="text-red-700 font-medium bg-red-100 shadow-inner px-3 py-1 rounded-full"
          variant="ghost"
        >
          Part Time
        </Badge>
        <Badge
          className="text-purple-700 font-medium bg-purple-100 shadow-inner px-3 py-1 rounded-full"
          variant="ghost"
        >
          ₹24 LPA
        </Badge>
      </div>
    </div>
  );
};

export default LatestJobCards;
