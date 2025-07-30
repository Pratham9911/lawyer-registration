'use client';

import { useEffect, useState } from 'react';

export default function RegisterPage() {
  const [step, setStep] = useState(1);
  const [isHydrated, setIsHydrated] = useState(false);
  const [formData, setFormData] = useState({});
  const [showPopup, setShowPopup] = useState('');

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) return null;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let formattedValue = value.trim();

    if (name === 'pan') {
      formattedValue = formattedValue.toUpperCase();
    }

    if (name === 'aadhaar' || name === 'mobile') {
      formattedValue = formattedValue.replace(/\D/g, '');
    }

    if (name === 'membership') {
      formattedValue = formattedValue.replace(/\D/g, '');
    }

    setFormData(prev => ({
      ...prev,
      [name]: formattedValue
    }));
  };

  const validateForm = () => {
    const requiredFields = [
      'fullName', 'email', 'password', 'mobile', 'gender',
      'aadhaar', 'pan', 'enrollNo', 'barCouncil',
      'district', 'taluka',
      'nominationType', 'proposerId', 'seconderId'
    ];
    return requiredFields.every(field => formData[field]?.trim());
  };

 const handleSubmit = async (e) => {
  e.preventDefault();

  const requiredFields = [
    'fullName', 'email', 'password', 'mobile', 'gender',
    'aadhaar', 'pan', 'enrollNo', 'barCouncil',
    'district', 'taluka', 'nominationType', 'proposerId', 'seconderId'
  ];

  const allFilled = requiredFields.every(field => formData[field]?.trim());

  const validations = {
    aadhaar: /^\d{12}$/,
    pan: /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/,
    enrollNo: /^[A-Z]{1,5}\/\d{4}\/\d{4}$/,
    barCouncil: /^[A-Za-z\s]{3,100}$/,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    mobile: /^\d{10}$/,
    password: /^.{6,}$/, // min 6 chars
    district: /^[A-Za-z\s]{2,50}$/,
    taluka: /^[A-Za-z\s]{2,50}$/,
    proposerId: /^[A-Z]{1,5}\/\d{4}\/\d{4}$/,
    seconderId: /^[A-Z]{1,5}\/\d{4}\/\d{4}$/
  };

  const invalidField = Object.entries(validations).find(
    ([field, regex]) => !regex.test(formData[field] || '')
  );

  if (!allFilled || invalidField) {
    setShowPopup('Please fill all fields correctly in Step 2');
    return;
  }

  try {
    const response = await fetch('http://localhost:8080/api/lawyers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      setShowPopup('Registration done ✓');
      console.log('Submitted to backend:', formData);
    } else {
      setShowPopup('Failed to register. Backend error.');
      console.error('Server error:', response.statusText);
    }
  } catch (error) {
    console.error('Network error:', error.message);
    setShowPopup('Backend not reachable (Check connection)');
  }
};



  return (
    <main className="min-h-screen flex items-center justify-center p-4 text-black">
      <div className="form-container w-full max-w-6xl mx-auto p-6">
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-gray-700 inline-block mb-3 relative pb-2">
            Lawyer Registration
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">

          {step === 1 && (
            <>
              <Section title="Personal Information">
                <InputGrid>
                  <Input name="fullName" label="Full Name (Surname First)" placeholder="e.g., Sharma Rajeev" value={formData.fullName} onChange={handleInputChange} />
                  <Input name="email" label="Email" type="email" value={formData.email} onChange={handleInputChange} />
                  <Input
                    name="password"
                    label="Create Password"
                    type="password"
                    pattern=".{6,}"
                    placeholder="Minimum 6 characters"
                    minLength={6}
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                  <Input name="mobile" label="Mobile Number" pattern="^\d{10,}$" value={formData.mobile} onChange={handleInputChange} />
                  <Select name="gender" label="Gender" value={formData.gender} onChange={handleInputChange} options={['Male', 'Female', 'Other']} />
                </InputGrid>
              </Section>

              <Section title="Identification Details">
                <InputGrid>
                  <Input name="aadhaar" label="Aadhaar Card Number" placeholder="e.g., 123456789012" pattern="\d{12}" maxLength={12} value={formData.aadhaar} onChange={handleInputChange} />
                  <Input name="pan" label="PAN Card Number" placeholder="e.g., ABCDE1234F" pattern="[A-Z]{5}[0-9]{4}[A-Z]{1}" maxLength={10} style={{ textTransform: 'uppercase' }} value={formData.pan} onChange={handleInputChange} />
                </InputGrid>
              </Section>

              <Section title="Enrollment Details">
                <InputGrid>
                  <Input name="enrollNo" label="Enrollment Number" placeholder="MAH/0000/0000" pattern="^[A-Z]{3,5}/\d{4}/\d{4}$" value={formData.enrollNo} onChange={handleInputChange} />
                  <Input name="barCouncil" label="Bar Council Name" placeholder="e.g., Maharashtra Bar Council" pattern="^[A-Za-z\s]{3,100}$" value={formData.barCouncil} onChange={handleInputChange} />
                </InputGrid>

                <div className="flex justify-end mt-6">
                  <button
                    type="button"
                    onClick={() => {
                      const step1Fields = ['fullName', 'email', 'password', 'mobile', 'gender', 'aadhaar', 'pan', 'enrollNo', 'barCouncil'];
                      const allFilled = step1Fields.every(field => formData[field]?.trim());

                      const validations = {
                        aadhaar: /^\d{12}$/,
                        pan: /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/,
                        enrollNo: /^[A-Z]{1,5}\/\d{4}\/\d{4}$/,
                        barCouncil: /^[A-Za-z\s]{3,100}$/,
                        email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        mobile: /^\d{10}$/,
                        password: /^.{6,}$/  // 7 or more characters (since you want > 6)
                      };

                      const invalidField = Object.entries(validations).find(
                        ([field, regex]) => !regex.test(formData[field] || '')
                      );

                      if (!allFilled || invalidField) {
                        setShowPopup('Please fill all fields correctly in Step 1');
                        return;
                      }

                      setStep(2);
                    }}

                    className="bg-[#4070f4] hover:bg-[#265df2] text-white px-6 py-2 rounded"
                  >
                    Next
                  </button>
                </div>
              </Section>
            </>
          )}

          {step === 2 && (
            <>
              <Section title="Bar Association Details">
                <InputGrid>
                  <Input name="district" label="District" pattern="^[A-Za-z\s]{2,50}$" value={formData.district} onChange={handleInputChange} />
                  <Input name="taluka" label="Taluka" pattern="^[A-Za-z\s]{2,50}$" value={formData.taluka} onChange={handleInputChange} />
                </InputGrid>
              </Section>

              <Section title="Delegate Nomination">
                <InputGrid>
                  <Select name="nominationType" label="Nominated or Elected?" value={formData.nominationType} onChange={handleInputChange} options={['Nominated', 'Elected']} />
                  <Input name="proposerId" label="Proposer Bar Council ID" placeholder="e.g., MAH/1234/2024" pattern="^[A-Z]{1,5}/\d{4,5}/\d{4}$" value={formData.proposerId} onChange={handleInputChange} />
                  <Input name="seconderId" label="Seconder Bar Council ID" placeholder="e.g., DEL/5678/2023" pattern="^[A-Z]{1,5}/\d{4,5}/\d{4}$" value={formData.seconderId} onChange={handleInputChange} />
                </InputGrid>

                <div className="flex justify-between mt-6">
                  <button type="button" onClick={() => setStep(1)} className="bg-[#4070f4] hover:bg-[#265df2] text-white px-6 py-2 rounded">Back</button>
                  <button type="submit" className="bg-[#4070f4] hover:bg-[#265df2] text-white px-6 py-2 rounded">Submit</button>
                </div>
              </Section>
            </>
          )}

        </form>
      </div>

      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-40">
          <div className="bg-white p-6 rounded shadow-lg text-center max-w-sm w-full">
            <p className="text-lg text-gray-800">{showPopup}</p>
            <button
              onClick={() => setShowPopup('')}
              className="mt-4 px-4 py-2 bg-[#4070f4] hover:bg-[#265df2] text-white rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
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
  return <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-full">{children}</div>;
}

function Input({ name, label, type = 'text', placeholder = '', pattern = '', maxLength, style = {}, value, onChange }) {
  return (
    <div className="flex flex-col">
      <label className="text-sm font-medium mb-1">{label}</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        pattern={pattern}
        maxLength={maxLength}
        value={value || ''}
        onChange={onChange}
        required
        style={style}
        className="w-full border border-black rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#4070f4]"
      />
    </div>
  );
}

function Select({ name, label, options, value, onChange }) {
  return (
    <div className="flex flex-col">
      <label className="text-sm font-medium mb-1">{label}</label>
      <select
        name={name}
        required
        value={value || ''}
        onChange={onChange}
        className="border border-black rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#4070f4]"
      >
        <option value="" disabled>Select</option>
        {options.map((opt, i) => (
          <option key={i} value={opt}>{opt}</option>
        ))}
      </select>
    </div>
  );
}
