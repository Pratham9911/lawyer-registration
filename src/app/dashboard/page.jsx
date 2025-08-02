'use client';
import { useState } from 'react';
import Sidebar from '@/app/components/Sidebar';
import Navbar from '@/app/components/Navbar';
import Home from '@/app/components/Home';
import Profile from '@/app/components/Profile';
import Cases from '@/app/components/Cases';

const lawyerData = {
  fullName: 'Rajveer Sharma',
  email: 'Rajveer@example.com',
  password: '********',
  mobile: '9876543210',
  gender: 'Male',
  aadhaar: '1234-5678-9123',
  pan: 'ABCDE1234F',
  enrollNo: 'MH2025001',
  barCouncil: 'Bar Council of Maharashtra & Goa',
  district: 'Pune',
  taluka: 'Haveli',
  nominationType: 'Elected',
  proposerId: 'BCID2021',
  seconderId: 'BCID2022',
};

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('home');

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar
        isOpen={sidebarOpen}
        closeSidebar={() => setSidebarOpen(false)}
        setActiveTab={setActiveTab}
        activeTab={activeTab}
      />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar toggleSidebar={toggleSidebar} />

        <main className="flex-1 overflow-y-auto p-6">
          {activeTab === 'home' && <Home />}
          {activeTab === 'profile' && <Profile user={lawyerData} />} {/* ✅ Fixed */}
          {activeTab === 'cases' && <Cases />}
        </main>
      </div>
    </div>
  );
}
