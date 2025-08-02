"use client";

import React from "react";

const lawyerData = {
  fullName: "Rajveer Sharma",
  email: "Rajveer@example.com",
  password: "********",
  mobile: "9876543210",
  gender: "Male",
  aadhaar: "1234-5678-9123",
  pan: "ABCDE1234F",
  enrollNo: "MH2025001",
  barCouncil: "Bar Council of Maharashtra & Goa",
  district: "Pune",
  taluka: "Haveli",
  nominationType: "Elected",
  proposerId: "BCID2021",
  seconderId: "BCID2022",
};

export default function LawyerProfilePage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-gray-100">
      <div className="max-w-4xl w-full p-8 border rounded-lg shadow-sm bg-white">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-8">
          Lawyer Profile
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Personal Information */}
          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Personal Information
            </h2>
            <ul className="space-y-2">
              <Info label="Full Name" value={lawyerData.fullName} />
              <Info label="Email" value={lawyerData.email} />
              <Info label="Password" value={lawyerData.password} />
              <Info label="Mobile" value={lawyerData.mobile} />
              <Info label="Gender" value={lawyerData.gender} />
              <Info label="Aadhaar Number" value={lawyerData.aadhaar} />
              <Info label="PAN Number" value={lawyerData.pan} />
            </ul>
          </section>

          {/* Professional Details */}
          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Professional Details
            </h2>
            <ul className="space-y-2">
              <Info label="Enrollment Number" value={lawyerData.enrollNo} />
              <Info label="Bar Council" value={lawyerData.barCouncil} />
              <Info label="District" value={lawyerData.district} />
              <Info label="Taluka" value={lawyerData.taluka} />
              <Info label="Nomination Type" value={lawyerData.nominationType} />
              <Info label="Proposer ID" value={lawyerData.proposerId} />
              <Info label="Seconder ID" value={lawyerData.seconderId} />
            </ul>
          </section>
        </div>

        {/* Edit Button */}
        <div className="text-center mt-8">
          <button className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
}

const Info = ({ label, value }) => (
  <li className="flex justify-between gap-4 border-b pb-1 text-sm">
    <span className="text-gray-600 font-medium">{label}:</span>
    <span className="text-gray-900 text-right">{value}</span>
  </li>
);
