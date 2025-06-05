import React from 'react';
import './step1.css'
const Step1 = ({ formData, setFormData, onNext }) => {
  return (
    <div className="home-wrapper">
      {/* Left: Informative Side Panel */}
      <div className="home-left">
        <div className="hero-card">
          <h1>👋 Welcome!</h1>
          <p>Get started by entering your personal information. This helps us customize your experience.</p>
        </div>

        <div className="info-grid">
  <div className="info-card">
    <h3>🛡️ Secure</h3>
    <p>Your data is encrypted by default.</p>
  </div>
  <div className="info-card">
    <h3>🧠 Smart Tips</h3>
    <p>Use valid info for better results.</p>
  </div>
  <div className="info-card">
    <h3>📊 Dashboard</h3>
    <p>Builds a personalized workspace.</p>
  </div>
  <div className="info-card">
    <h3>⚡ Quick Setup</h3>
    <p>Complete this step in 1 minute.</p>
  </div>
</div>

      </div>

      {/* Right: Personal Info Form */}
      <div className="home-form">
        <h2>Step 1: Personal Info</h2>
        <input
          type="text"
          placeholder="Name"
          value={formData?.name || ''}
          onChange={e => setFormData({ ...formData, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          value={formData?.email || ''}
          onChange={e => setFormData({ ...formData, email: e.target.value })}
        />
        <button onClick={onNext}>Next</button>
      </div>
    </div>
  );
};

export default Step1;
