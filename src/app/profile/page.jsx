"use client";
import React from "react";
import Profile from "../components/Profile"; // Adjust if needed

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
  return <Profile user={lawyerData} />;
}
