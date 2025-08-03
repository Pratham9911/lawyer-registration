'use client';

import { useEffect, useState } from 'react';
import { Plus, Pencil, Trash2 } from 'lucide-react';
import CaseModal from './CaseModal';
import { toast } from 'react-hot-toast';

export default function Cases() {
  const [cases, setCases] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingCase, setEditingCase] = useState(null);

  // Load from localStorage on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('cases');
      try {
        const parsed = stored ? JSON.parse(stored) : [];
        if (Array.isArray(parsed) && parsed.length > 0) {
          setCases(parsed);
        } else {
          const dummyCases = [
            {
              caseId: 'CRIM/2024/001',
              title: 'State vs Sharma',
              court: 'Delhi High Court',
              type: 'Criminal',
              year: 2024,
              status: 'Ongoing',
            },
            {
              caseId: 'CIV/2023/102',
              title: 'Kumar vs Rao',
              court: 'Mumbai Civil Court',
              type: 'Civil',
              year: 2023,
              status: 'Closed',
            },
            {
              caseId: 'LAB/2025/045',
              title: 'Union vs X Corp',
              court: 'Supreme Court',
              type: 'Labour',
              year: 2025,
              status: 'Pending',
            },
          ];
          setCases(dummyCases);
          localStorage.setItem('cases', JSON.stringify(dummyCases));
        }
      } catch {
        localStorage.removeItem('cases');
      }
    }
  }, []);
useEffect(() => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('cases', JSON.stringify(cases));
  }
}, [cases]);


  // Save to localStorage on change
  useEffect(() => {
    localStorage.setItem('cases', JSON.stringify(cases));
    console.log("Saved to localStorage:", cases);
  }, [cases]);

  const openAddModal = () => {
    setEditingCase(null);
    setModalOpen(true);
  };

  const openEditModal = (caseItem) => {
    setEditingCase(caseItem);
    setModalOpen(true);
  };

  const saveCase = (data) => {
    if (!data.caseId) {
      toast.error('Case ID is required');
      return;
    }

    console.log("Saving case:", data);

    setCases((prev) => {
      const existing = prev.find((c) => c.caseId === data.caseId);
      if (existing) {
        return prev.map((c) => (c.caseId === data.caseId ? data : c));
      }
      return [...prev, data];
    });
    toast.success('Case saved');
    setModalOpen(false);
  };

  const deleteCase = (caseId) => {
    if (!confirm('Are you sure to delete this case?')) return;
    setCases((prev) => prev.filter((c) => c.caseId !== caseId));
    toast.success('Case deleted');
  };

  const totalCases = cases.length;
  const ongoing = cases.filter((c) => c.status === 'Ongoing').length;
  const closed = cases.filter((c) => c.status === 'Closed').length;
  const pending = cases.filter((c) => c.status === 'Pending').length;
  const successRate = totalCases ? ((closed / totalCases) * 100).toFixed(1) : 0;

  return (
    <div className="p-4 overflow-y-auto h-full space-y-6">
      {/* Summary */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card label="Total Cases" value={totalCases} />
        <Card label="Ongoing Cases" value={ongoing} />
        <Card label="Closed Cases" value={closed} />
        <Card label="Success Rate" value={`${successRate}%`} />
      </div>

      {/* Table */}
      <div className="bg-white p-4 rounded-xl shadow">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-black">Cases in Progress</h2>
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 rounded-md flex items-center"
            onClick={openAddModal}
          >
            <Plus size={16} className="" /> Cases
          </button>
        </div>
        <div className="overflow-auto max-h-[500px]">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-gray-600 bg-gray-100">
              <tr>
                <th className="p-2">Case ID</th>
                <th className="p-2">Title</th>
                <th className="p-2">Court</th>
                <th className="p-2">Type</th>
                <th className="p-2">Year</th>
                <th className="p-2">Status</th>
                <th className="p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {cases.map((c) => (
                <tr
                  key={c.caseId}
                  className="hover:bg-gray-50 text-gray-800"
                >
                  <td className="p-2">{c.caseId}</td>
                  <td className="p-2">{c.title}</td>
                  <td className="p-2">{c.court}</td>
                  <td className="p-2">{c.type}</td>
                  <td className="p-2">{c.year}</td>
                  <td className="p-2">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      c.status === 'Ongoing'
                        ? 'bg-green-100 text-green-800 border-1 border-green-400'
                        : c.status === 'Closed'
                        ? 'bg-red-100 text-red-700 border-1 border-red-500'
                        : 'bg-yellow-100 text-yellow-800 border-1 border-y-amber-400'
                    }`}>
                      {c.status}
                    </span>
                  </td>
                  <td className="p-2 flex space-x-2">
                    <button onClick={() => openEditModal(c)}>
                      <Pencil size={16} className="text-blue-600 hover:text-blue-800" />
                    </button>
                    <button onClick={() => deleteCase(c.caseId)}>
                      <Trash2 size={16} className="text-red-500 hover:text-red-700" />
                    </button>
                  </td>
                </tr>
              ))}
              {!cases.length && (
                <tr>
                  <td colSpan="7" className="text-center py-6 text-gray-400">
                    No cases added yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <CaseModal
          onClose={() => setModalOpen(false)}
          onSave={saveCase}
          editingCase={editingCase}
        />
      )}
    </div>
  );
}

function Card({ label, value }) {
  return (
    <div className="bg-white rounded-xl p-4 shadow-md text-center">
      <p className="text-sm text-gray-500">{label}</p>
      <h3 className="text-xl font-bold text-gray-800 mt-1">{value}</h3>
    </div>
  );
}
