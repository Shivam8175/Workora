import React from "react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { motion } from "framer-motion";
const JobDescription = () => {
  const isApplied = false;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto my-10 p-8 bg-white shadow-xl rounded-2xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300"
    >
      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Frontend Developer
          </h1>
          <div className="flex flex-wrap items-center gap-2 mt-4">
            <Badge className="text-blue-700 font-medium bg-blue-50 px-3 py-1 rounded-full border border-blue-100 shadow-sm">
              <span className="mr-1">👥</span> 12 Positions
            </Badge>
            <Badge className="text-amber-700 font-medium bg-amber-50 px-3 py-1 rounded-full border border-amber-100 shadow-sm">
              <span className="mr-1">⏱️</span> Part Time
            </Badge>
            <Badge className="text-purple-700 font-medium bg-purple-50 px-3 py-1 rounded-full border border-purple-100 shadow-sm">
              <span className="mr-1">💰</span> 12 LPA
            </Badge>
          </div>
        </div>

        <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
          <Button
            disabled={isApplied}
            className={`px-8 py-3 text-lg font-semibold rounded-xl transition-all duration-300 ${
              isApplied
                ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                : "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg hover:shadow-xl"
            }`}
          >
            {isApplied ? "✓ Already Applied" : "Apply Now"}
          </Button>
        </motion.div>
      </div>

      {/* Divider */}
      <div className="mt-8 mb-6 border-t border-gray-100"></div>

      {/* Job Details */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800 flex items-center">
          <span className="mr-2">📝</span> Job Description
        </h2>

        <div className="mt-6 space-y-4 text-gray-700">
          <div className="flex items-start">
            <strong className="min-w-[120px] text-gray-600">Role:</strong>
            <span className="font-medium text-gray-800">
              Frontend Developer (React)
            </span>
          </div>
          <div className="flex items-start">
            <strong className="min-w-[120px] text-gray-600">Location:</strong>
            <span className="font-medium text-gray-800 flex items-center">
              <span className="mr-1">📍</span> Hyderabad (Remote options
              available)
            </span>
          </div>
          <div className="flex items-start">
            <strong className="min-w-[120px] text-gray-600">
              Description:
            </strong>
            <span className="font-medium text-gray-800">
              We're looking for a skilled Frontend Developer to join our team.
              You'll be responsible for building responsive, accessible, and
              performant interfaces using React, TypeScript, and modern CSS.
              Experience with state management (Redux/Zustand) and testing
              frameworks is a plus.
            </span>
          </div>
          <div className="flex items-start">
            <strong className="min-w-[120px] text-gray-600">Experience:</strong>
            <span className="font-medium text-gray-800">
              2+ years with modern JavaScript frameworks
            </span>
          </div>
          <div className="flex items-start">
            <strong className="min-w-[120px] text-gray-600">Salary:</strong>
            <span className="font-medium text-gray-800">
              ₹12 LPA + ESOPs + Performance Bonus
            </span>
          </div>
          <div className="flex items-start">
            <strong className="min-w-[120px] text-gray-600">
              Requirements:
            </strong>
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-gray-100 text-gray-800 border border-gray-200">
                React
              </Badge>
              <Badge className="bg-gray-100 text-gray-800 border border-gray-200">
                TypeScript
              </Badge>
              <Badge className="bg-gray-100 text-gray-800 border border-gray-200">
                Tailwind CSS
              </Badge>
              <Badge className="bg-gray-100 text-gray-800 border border-gray-200">
                Redux
              </Badge>
              <Badge className="bg-gray-100 text-gray-800 border border-gray-200">
                Jest
              </Badge>
            </div>
          </div>
          <div className="flex items-start">
            <strong className="min-w-[120px] text-gray-600">Posted:</strong>
            <span className="font-medium text-gray-800">June 20, 2025</span>
          </div>
        </div>
      </div>

      {/* Company Info (optional) */}
      <div className="mt-10 pt-6 border-t border-gray-100">
        <h3 className="text-lg font-semibold text-gray-800 mb-3">
          About Company
        </h3>
        <p className="text-gray-600">
          We're a fast-growing tech startup revolutionizing the way businesses
          interact with customers. Our team of 50+ engineers is building
          cutting-edge solutions with modern web technologies.
        </p>
      </div>
    </motion.div>
  );
};

export default JobDescription;
