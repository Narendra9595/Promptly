import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Wand2 } from 'lucide-react';
import axios from "axios";
import { BACKEND_URL } from '../config';

export function Home() {
  const [prompt, setPrompt] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (prompt.trim()) {
      navigate('/builder', { state: { prompt } });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 to-blue-800 flex items-center justify-center p-4">
      <div className="max-w-3xl w-full">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-6">
            <Wand2 className="w-14 h-14 text-blue-500 transition-transform transform hover:scale-110" />
          </div>
          <h1 className="text-5xl font-extrabold text-white mb-4 tracking-wider">
            Promptly
          </h1>
          <p className="text-xl text-gray-300">
            Tell us your vision, and we'll help you bring it to life, step by step.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="bg-gradient-to-r from-blue-900 to-indigo-700 rounded-lg shadow-2xl p-8">
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Describe the website you want to build..."
              className="w-full h-40 p-4 bg-gray-900 text-white border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent resize-none placeholder-gray-500 transition-all ease-in-out"
            />
            <button
              type="submit"
              className="w-full mt-6 bg-blue-700 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-800 transition-colors duration-300 transform hover:scale-105"
            >
              Generate Website Plan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
