'use client';
import { useState } from 'react';
import Sidebar from '@/app/components/Sidebar';
import Navbar from '@/app/components/Navbar';
import Home from '@/app/components/Home';
import Profile from '@/app/components/Profile';
import Cases from '@/app/components/Cases';

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
                    {activeTab === 'profile' && <Profile />}
                    {activeTab === 'cases' && <Cases />}
                </main>
            </div>
        </div>
    );
}
