import React from "react";
import { Button } from "./ui/button";
import { Bookmark } from "lucide-react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { useNavigate } from "react-router-dom";

const Job = () => {
  const navigate = useNavigate();
  const jobId = "12345";
  return (
    <div className="p-6 rounded-2xl shadow-2xl bg-white border border-gray-200 transition-transform hover:-translate-y-1 hover:shadow-3xl hover:border-[#7209b7] duration-300">
      <div className="flex items-center justify-between mb-3">
        <p className="text-xs text-gray-500">🕒 Posted 2 days ago</p>
        <Button
          variant="outline"
          className="rounded-full hover:bg-[#f0f0f0] transition-colors"
          size="icon"
        >
          <Bookmark className="w-5 h-5 text-gray-600" />
        </Button>
      </div>

      <div className="flex items-center gap-4 mb-4">
        <Avatar className="border border-gray-300 shadow-md">
          <AvatarImage
            src="https://www.shutterstock.com/image-vector/circle-line-simple-design-logo-600nw-2174926871.jpg"
            alt="Company Logo"
          />
        </Avatar>
        <div>
          <h1 className="text-lg font-semibold text-gray-800">Company Name</h1>
          <p className="text-sm text-gray-500">📍 India</p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-bold text-[#333] mb-2">
          Frontend Developer
        </h2>
        <p className="text-sm text-gray-600 leading-relaxed line-clamp-4">
          Join a fast-growing team building modern web applications. We're
          looking for someone who loves UI/UX and wants to ship great
          experiences.
        </p>
      </div>

      <div className="flex flex-wrap gap-2 mt-4">
        <Badge className="text-blue-700 font-semibold bg-blue-100">React</Badge>
        <Badge className="text-[#F83002] font-semibold bg-red-100">
          Tailwind
        </Badge>
        <Badge className="text-[#7209b7] font-semibold bg-purple-100">
          Firebase
        </Badge>
      </div>

      <div className="flex items-center gap-3 mt-6">
        <Button
          variant="outline"
          onClick={() => navigate(`/description/${jobId}`)}
          className="hover:border-[#7209b7] hover:text-[#7209b7] transition-colors"
        >
          View Details
        </Button>
        <Button className="bg-[#7209b7] hover:bg-[#5a0898] text-white shadow-md transition-colors">
          Save for Later
        </Button>
      </div>
    </div>
  );
};

export default Job;
