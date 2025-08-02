import React from "react";

const Profile = ({ user }) => {
  const Info = ({ label, value }) => (
    <li className="flex justify-between gap-4 border-b pb-1 text-sm">
      <span className="text-gray-600 font-medium">{label}:</span>
      <span className="text-gray-900 text-right">{value}</span>
    </li>
  );

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
              <Info label="Full Name" value={user.fullName} />
              <Info label="Email" value={user.email} />
              <Info label="Password" value={user.password} />
              <Info label="Mobile" value={user.mobile} />
              <Info label="Gender" value={user.gender} />
              <Info label="Aadhaar Number" value={user.aadhaar} />
              <Info label="PAN Number" value={user.pan} />
            </ul>
          </section>

          {/* Professional Details */}
          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Professional Details
            </h2>
            <ul className="space-y-2">
              <Info label="Enrollment Number" value={user.enrollNo} />
              <Info label="Bar Council" value={user.barCouncil} />
              <Info label="District" value={user.district} />
              <Info label="Taluka" value={user.taluka} />
              <Info label="Nomination Type" value={user.nominationType} />
              <Info label="Proposer ID" value={user.proposerId} />
              <Info label="Seconder ID" value={user.seconderId} />
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
};

export default Profile;
