import React from 'react';
import { Hero, WhoFor, AudioPlayer } from '../components';

const Home = () => {
  return (
    <div className="min-h-screen bg-[#0B2540]">
      {/* Hero Section */}
      <Hero />

      {/* Who For Section */}
      <WhoFor />

      {/* Audio Player Demo Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
            Experience Studio-Quality Playback
          </h2>
          <p className="text-xl text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Listen to high-quality audio with our professional-grade player
          </p>
          <AudioPlayer />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p>© 2025 RhyMerge. Where music minds merge.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;