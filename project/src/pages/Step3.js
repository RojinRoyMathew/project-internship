import React from 'react';
import './step3.css'
const Step3 = ({ formData, setFormData, onBack, onSubmit }) => {
  const handleSubmit = () => {
    // Save user info
    localStorage.setItem('user', JSON.stringify({
      name: formData.name,
      email: formData.email,
      company: formData.company,
      industry: formData.industry,
      size: formData.size
    }));

    // Save user preferences
    localStorage.setItem('userPrefs', JSON.stringify({
      theme: formData.theme,
      layout: formData.layout
    }));

    // 🔁 Use the parent-provided onSubmit callback
    onSubmit();
  };

  return (
    <div className="preferences-wrapper">
  {/* Left Info Cards */}
  <div className="preferences-visual">
  <div className="info-card modern">
    <div className="icon-box sun">
      ☀️
    </div>
    <div className="text-box">
      <h4>Light & Dark Mode</h4>
      <p>Enhance comfort with toggleable theme modes tailored to your eyes.</p>
    </div>
  </div>

  <div className="info-card modern">
    <div className="icon-box grid">
      🗂️
    </div>
    <div className="text-box">
      <h4>Layout Flexibility</h4>
      <p>Switch between grid and list layout for optimal task visualization.</p>
    </div>
  </div>
</div>


  {/* Right Preferences */}
  <div className="preferences-container">
    <h2>Customize Your Dashboard</h2>

    <div className="toggle-row">
      <label className="toggle-label">Theme Mode</label>
      <div className="toggle-switch">
        <input
          type="checkbox"
          id="theme-toggle"
          checked={formData.theme === 'dark'}
          onChange={(e) =>
            setFormData({ ...formData, theme: e.target.checked ? 'dark' : 'light' })
          }
        />
        <label htmlFor="theme-toggle" className="slider sun-moon"></label>
      </div>
    </div>

    <div className="toggle-row">
      <label className="toggle-label">Layout</label>
      <div className="toggle-switch">
        <input
          type="checkbox"
          id="layout-toggle"
          checked={formData.layout === 'grid'}
          onChange={(e) =>
            setFormData({ ...formData, layout: e.target.checked ? 'grid' : 'list' })
          }
        />
        <label htmlFor="layout-toggle" className="slider grid-list"></label>
      </div>
    </div>

    <div className="button-group">
      <button onClick={onBack} className="btn-back">Back</button>
      <button onClick={handleSubmit} className="btn-submit">Save Preferences</button>
    </div>
  </div>
</div>

  );
};

export default Step3;
