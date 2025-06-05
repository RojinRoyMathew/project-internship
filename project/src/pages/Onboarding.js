import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import Step1 from '../pages/Step1';
import Step2 from '../pages/Step2';
import Step3 from '../pages/Step3';

function Onboarding() {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    industry: '',
    size: '',
    theme: '',
    layout: '',
  });

  const handleNext = () => setStep(prev => prev + 1);
  const handleBack = () => setStep(prev => prev - 1);

  const handleSubmit = () => {
    // ✅ Save user details
    const user = {
      name: formData.name,
      email: formData.email,
      company: formData.company,
      industry: formData.industry,
      size: formData.size,
    };
    localStorage.setItem('user', JSON.stringify(user));

    // ✅ Save user preferences
    const prefs = {
      theme: formData.theme,
      layout: formData.layout,
    };
    localStorage.setItem('userPrefs', JSON.stringify(prefs));

    // ✅ Redirect to dashboard
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-white shadow rounded">
      {step === 1 && (
        <Step1
          formData={formData}
          setFormData={setFormData}
          onNext={handleNext}
        />
      )}
      {step === 2 && (
        <Step2
          formData={formData}
          setFormData={setFormData}
          onNext={handleNext}
          onBack={handleBack}
        />
      )}
      {step === 3 && (
        <Step3
          formData={formData}
          setFormData={setFormData}
          onBack={handleBack}
          onSubmit={handleSubmit}
        />
      )}
    </div>
  );
}

export default Onboarding;
