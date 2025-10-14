import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

// Placeholder components for other routes
const Placeholder = ({ title }) => (
  <div className="min-h-screen bg-[#0B2540] flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-5xl font-bold text-white mb-4">{title}</h1>
      <p className="text-xl text-gray-400">Coming soon...</p>
    </div>
  </div>
);

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/community" element={<Placeholder title="Community" />} />
      <Route path="/projects" element={<Placeholder title="Projects" />} />
      <Route path="/messages" element={<Placeholder title="Messages" />} />
      <Route path="/profile" element={<Placeholder title="Profile" />} />
    </Routes>
  );
};

export default AppRouter;