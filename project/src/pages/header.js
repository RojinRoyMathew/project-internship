import React from 'react';
import './header.css'
export default function Header() {
  return (
   <header class="navbar">
  <div class="nav-container">
    <div class="nav-logo">AnalytIQ</div>
    <nav class="nav-menu">
      <a href="http://localhost:3000/">Home</a>
      <a href="#">About</a>
      <a href="#">Projects</a>
      <a href="#">Contact</a>
    </nav>
  </div>
</header>
  );
}