import './dashboard.css'
import { useEffect, useState } from 'react';
import InfoCard from '../pages/InfoCard';
import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer
} from 'recharts';
import React from 'react';

export default function Dashboard() {
  const [user, setUser] = useState({});
  const [prefs, setPrefs] = useState({ theme: 'light', layout: 'grid' });

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    const savedPrefs = localStorage.getItem('userPrefs');

    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (e) {
        console.error("Invalid user JSON");
      }
    }

    if (savedPrefs) {
      try {
        setPrefs(JSON.parse(savedPrefs));
      } catch (e) {
        console.error("Invalid prefs JSON");
      }
    }
  }, []);

  const chartData = [
    { day: 'Mon', progress: 20 },
    { day: 'Tue', progress: 35 },
    { day: 'Wed', progress: 50 },
    { day: 'Thu', progress: 40 },
    { day: 'Fri', progress: 70 },
    { day: 'Sat', progress: 60 },
    { day: 'Sun', progress: 80 },
  ];

  const isDark = prefs.theme === 'dark';
  const isGrid = prefs.layout === 'grid';

  return (
    <div className={`dashboard-wrapper ${isDark ? 'dashboard-dark' : 'dashboard-light'}`}>
      <div className="dashboard-layout">
      <main className="dashboard-center">
      <div className="max-w-5xl mx-auto">
      
          {isGrid ? (
            <div className="cards-grid">
              <div className="info-card"><h3>Team Members</h3><p>8</p></div>
              <div className="info-card"><h3>Active Projects</h3><p>5</p></div>
              <div className="info-card"><h3>Notifications</h3><p>3</p></div>
              </div>
          ) : (
            <div className="cards-list">
              <div className="info-card"><h3>Team Members</h3><p>8</p></div>
              <div className="info-card"><h3>Active Projects</h3><p>5</p></div>
              <div className="info-card"><h3>Notifications</h3><p>3</p></div>
              </div>
          )}
          <div className="dashboard-left">
        <div className="card analytics-card">
          <h3>Revenue</h3>
          <p>$9,250</p>
          <small>Monthly goal: 75%</small>
        </div>
          <div className="card analytics-card">
          <h3>Completed Tasks</h3>
          <ResponsiveContainer width="100%" height={60}>
            <LineChart data={chartData}>
              <Line type="monotone" dataKey="progress" stroke="#10b981" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
          </div>
        </div>
      </main>
    <aside className="dashboard-right">
       
    <section className="dashboard-wide-info">
  <div className="wide-card">
    <div className="wide-header">
      <h2>Overall Project Performance</h2>
      <p>Analytics of weekly progress across all teams</p>
    </div>
    <div className="wide-graph">
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={chartData}>
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="progress" stroke="#6366f1" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
     <div className="chart-box">
            <h2 className="section-heading">Weekly Progress</h2>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={chartData}>
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="progress" stroke="#4f46e5" />
              </LineChart>
            </ResponsiveContainer>
          </div>
  </div>
</section>
  </aside>

    </div>
  </div>

  );
}
