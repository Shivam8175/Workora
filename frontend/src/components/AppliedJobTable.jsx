import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Badge } from "./ui/badge";

const AppliedJobTable = () => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 max-w-5xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Applied Jobs</h2>
      <Table>
        <TableCaption className="text-sm text-gray-500">
          A list of your applied jobs
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="text-gray-600">Date</TableHead>
            <TableHead className="text-gray-600">Job Role</TableHead>
            <TableHead className="text-gray-600">Company</TableHead>
            <TableHead className="text-right text-gray-600">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {[1, 2, 3].map((item, index) => (
            <TableRow
              key={index}
              className="hover:bg-gray-50 transition-colors"
            >
              <TableCell className="font-medium text-gray-700">
                20-06-2025
              </TableCell>
              <TableCell className="text-gray-700">
                FullStack Developer
              </TableCell>
              <TableCell className="text-gray-700">Google</TableCell>
              <TableCell className="text-right">
                <Badge className="bg-green-100 text-green-800 font-semibold">
                  Selected
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AppliedJobTable;
