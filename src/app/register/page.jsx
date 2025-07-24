'use client';

import { useState, useEffect } from 'react';

export default function RegisterPage() {
  const [step, setStep] = useState(1);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) return null;

  return (
    <main className="min-h-screen bg-[#4070f4] flex items-center justify-center p-4 text-black">
      <div className="bg-white w-full max-w-4xl rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Lawyer Registration
        </h1>

        <form onSubmit={(e) => e.preventDefault()} className="space-y-6 relative min-h-[600px]">
          {/* Step Container */}
          <div className="absolute inset-0 transition-opacity duration-300" style={{ opacity: step === 1 ? 1 : 0, zIndex: step === 1 ? 10 : 0, pointerEvents: step === 1 ? 'auto' : 'none' }}>
            <Section title="Personal Information">
              <InputGrid>
                <Input label="Full Name (Surname First)" type="text" placeholder="e.g., Sharma Rajeev" />
                <Input label="Date of Birth" type="date" />
                <Input label="Email" type="email" />
                <Input label="Mobile Number" type="text" pattern="[0-9]{10}" />
                <Select label="Gender" options={['Male', 'Female', 'Other']} />
              </InputGrid>
            </Section>

            <Section title="Enrollment Details">
              <InputGrid>
                <Input label="Enrollment Number" type="text" placeholder="MAH/0000/0000" />
                <Input label="Enrollment Date" type="date" />
                <Input label="Bar Council Name" type="text" placeholder="e.g., Maharashtra Bar Council" />
              </InputGrid>

              <div className="flex justify-end mt-6">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="bg-[#4070f4] hover:bg-[#265df2] text-white px-6 py-2 rounded"
                >
                  Next
                </button>
              </div>
            </Section>
          </div>

          {/* Step 2 */}
          <div className="absolute inset-0 transition-opacity duration-300" style={{ opacity: step === 2 ? 1 : 0, zIndex: step === 2 ? 10 : 0, pointerEvents: step === 2 ? 'auto' : 'none' }}>
            <Section title="Bar Association Details">
              <InputGrid>
                <Input label="Name of Bar Association" type="text" />
                <Input label="District" type="text" />
                <Input label="Taluka" type="text" />
                <Input label="Membership Duration (in years)" type="number" />
              </InputGrid>
            </Section>

            <Section title="Delegate Nomination">
              <InputGrid>
                <Select label="Nominated or Elected?" options={['Nominated', 'Elected']} />
                <Input label="Proposer Bar Council ID" type="text" />
                <Input label="Seconder Bar Council ID" type="text" />
              </InputGrid>

              <div className="flex justify-between mt-6">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="bg-[#4070f4] hover:bg-[#265df2] text-white px-6 py-2 rounded"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="bg-[#4070f4] hover:bg-[#265df2] text-white px-6 py-2 rounded"
                >
                  Submit
                </button>
              </div>
            </Section>
          </div>
        </form>
      </div>
    </main>
  );
}

function Section({ title, children }) {
  return (
    <section className="mb-6">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">{title}</h2>
      {children}
    </section>
  );
}

function InputGrid({ children }) {
  return <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{children}</div>;
}

function Input({ label, type, placeholder = '', pattern = '' }) {
  return (
    <div className="flex flex-col">
      <label className="text-sm font-medium mb-1">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        pattern={pattern}
        required
        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#4070f4]"
      />
    </div>
  );
}

function Select({ label, options }) {
  return (
    <div className="flex flex-col">
      <label className="text-sm font-medium mb-1">{label}</label>
      <select
        required
        defaultValue=""
        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#4070f4]"
      >
        <option value="" disabled>Select</option>
        {options.map((opt, i) => (
          <option key={i}>{opt}</option>
        ))}
      </select>
    </div>
  );
}
