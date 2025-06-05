
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import Header from './pages/header';
import Footer from './pages/footer';

// ✅ Get user name from localStorage
const user = JSON.parse(localStorage.getItem('user')) || {};
const userName = user.name || 'User';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Header />

    {/* ✅ Home Carousel with welcome message */}
    <div className="homepage-carousel">
      <div className="carousel-track">
        <div className="carousel-slide image-1"></div>
        <div className="carousel-slide image-2"></div>
        <div className="carousel-slide image-1"></div>
        <div className="carousel-slide image-2"></div>
      </div>

      <div className="carousel-content">
        <h1>Welcome {userName}, 👋</h1>
        <p>📈 "Success is not in what you have, but who you become." — Boost your growth with vision & values.</p>
      </div>
    </div>

    <BrowserRouter>
      <App />
    </BrowserRouter>

    <Footer />
  </div>
);
