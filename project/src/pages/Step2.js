import './step2.css'
import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer
} from 'recharts';
const Step2 = ({ formData, setFormData, onNext, onBack }) => {
  return (
  <div className="business-wrapper">
  {/* Left: Company Highlights */}
  <div className="business-info-cards">
    <div className="info-card modern">
      <div className="icon-box">🏢</div>
      <div className="text-box">
        <h4>Company Overview</h4>
        <p>Highlight your brand, mission, and values.</p>
      </div>
    </div>

    <div className="info-card modern">
      <div className="icon-box">🏆</div>
      <div className="text-box">
        <h4>Achievements</h4>
        <p>2024 Startup Award, 1M+ users globally.</p>
      </div>
    </div>

    <div className="info-card modern">
      <div className="icon-box">📊</div>
      <div className="text-box">
        <h4>Growth Insights</h4>
        <ResponsiveContainer width="100%" height={80}>
          <LineChart data={[{ m: 'Jan', v: 50 }, { m: 'Feb', v: 70 }, { m: 'Mar', v: 90 }]}>
            <Line type="monotone" dataKey="v" stroke="#10b981" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  </div>

  {/* Right: Business Form */}
  <div className="business-container">
    <h2>Business Info</h2>
    <input
      type="text"
      placeholder="Company Name"
      value={formData.companyName || ''}
      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
    />
    <input
      type="text"
      placeholder="Industry"
      value={formData.industry || ''}
      onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
    />
    <input
      type="number"
      placeholder="Company Size"
      value={formData.size || ''}
      onChange={(e) => setFormData({ ...formData, size: e.target.value })}
    />

    <div className="button-group">
      <button onClick={onBack} className="btn-back">Back</button>
      <button onClick={onNext} className="btn-next">Next</button>
    </div>
  </div>
</div>

  );
};

export default Step2;
