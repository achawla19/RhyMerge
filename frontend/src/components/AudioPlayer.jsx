import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

const AudioPlayer = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);
    const handleEnded = () => setIsPlaying(false);

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
      audio.removeEventListener('ended', handleEnded);
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleSeek = (e) => {
    const audio = audioRef.current;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = x / rect.width;
    audio.currentTime = percentage * duration;
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    audioRef.current.volume = newVolume;
    setIsMuted(newVolume === 0);
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (isMuted) {
      audio.volume = volume;
      setIsMuted(false);
    } else {
      audio.volume = 0;
      setIsMuted(true);
    }
  };

  const formatTime = (time) => {
    if (isNaN(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleKeyDown = (e) => {
    if (e.key === ' ' || e.key === 'Spacebar') {
      e.preventDefault();
      togglePlay();
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 shadow-2xl border border-gray-700">
      <audio ref={audioRef} src="/assets/sample1.mp3" />

      {/* Track Info */}
      <div className="mb-6 text-center">
        <h3 className="text-xl font-semibold text-white mb-1">Sample Track</h3>
        <p className="text-sm text-gray-400">Demo Audio Preview</p>
      </div>

      {/* Progress Bar */}
      <div className="mb-4">
        <div
          className="h-2 bg-gray-700 rounded-full cursor-pointer group"
          onClick={handleSeek}
          role="slider"
          aria-label="Seek audio position"
          aria-valuemin="0"
          aria-valuemax={duration}
          aria-valuenow={currentTime}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'ArrowRight') {
              audioRef.current.currentTime = Math.min(currentTime + 5, duration);
            } else if (e.key === 'ArrowLeft') {
              audioRef.current.currentTime = Math.max(currentTime - 5, 0);
            }
          }}
        >
          <div
            className="h-full bg-gradient-to-r from-[#7B61FF] to-[#E36FFF] rounded-full relative transition-all"
            style={{ width: `${(currentTime / duration) * 100}%` }}
          >
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </div>
        <div className="flex justify-between text-xs text-gray-400 mt-2">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          {/* Play/Pause Button */}
          <button
            onClick={togglePlay}
            onKeyDown={handleKeyDown}
            className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-[#E11D48] to-[#E36FFF] rounded-full hover:shadow-lg hover:shadow-[#E11D48]/50 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#7B61FF] focus:ring-offset-2 focus:ring-offset-gray-900"
            aria-label={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? (
              <Pause size={20} className="text-white" fill="white" />
            ) : (
              <Play size={20} className="text-white ml-0.5" fill="white" />
            )}
          </button>
        </div>

        {/* Volume Control */}
        <div className="flex items-center gap-2">
          <button
            onClick={toggleMute}
            className="text-gray-400 hover:text-white transition-colors focus:outline-none"
            aria-label={isMuted ? 'Unmute' : 'Mute'}
          >
            {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
          </button>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={isMuted ? 0 : volume}
            onChange={handleVolumeChange}
            className="w-24 h-1 bg-gray-700 rounded-full appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#7B61FF]"
            style={{
              background: `linear-gradient(to right, #7B61FF 0%, #7B61FF ${(isMuted ? 0 : volume) * 100}%, #374151 ${(isMuted ? 0 : volume) * 100}%, #374151 100%)`
            }}
            aria-label="Volume control"
          />
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;