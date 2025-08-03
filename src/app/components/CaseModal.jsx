import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { toast } from 'react-hot-toast';
export default function CaseModal({ onClose, onSave, editingCase }) {
  const [form, setForm] = useState({
    caseId: '',
    title: '',
    court: '',
    type: '',
    year: '',
    status: 'Ongoing',
  });

  useEffect(() => {
    if (editingCase) setForm(editingCase);
  }, [editingCase]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!form.caseId || !form.title || !form.court || !form.type || !form.year) {
      toast.error('Please fill all detail');
      return;
    }
    onSave(form);
  };

  return (
    <div className="fixed inset-0 bg-transparent bg-opacity-30 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-xl w-full max-w-md p-6 shadow-xl relative animate-fade-in">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
        >
          <X size={20} />
        </button>
        <h2 className="text-lg text-black font-semibold mb-4 text-center">
          {editingCase ? 'Edit Case' : 'Add New Case'}
        </h2>

        <div className="space-y-3">
          <Input label="Case ID" name="caseId" value={form.caseId} onChange={handleChange} disabled={!!editingCase} />
          <Input label="Title" name="title" value={form.title} onChange={handleChange} />
          <Input label="Court" name="court" value={form.court} onChange={handleChange} />
          <Input label="Type" name="type" value={form.type} onChange={handleChange} />
          <Input label="Year" name="year" value={form.year} onChange={handleChange} type="number" />

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
            <select
              name="status"
              value={form.status}
              onChange={handleChange}
              className="w-full border text-black border-gray-300 rounded-md px-3 py-2"
            >
              <option value="Ongoing">Ongoing</option>
              <option value="Closed">Closed</option>
              <option value="Pending">Pending</option>
            </select>
          </div>

          <button
            onClick={handleSubmit}
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            {editingCase ? 'Save Changes' : 'Add Case'}
          </button>
        </div>
      </div>
    </div>
  );
}

function Input({ label, name, value, onChange, type = 'text', disabled = false }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className="w-full border text-black border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}
