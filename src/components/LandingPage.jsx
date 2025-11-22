import React, { useState } from 'react';
import reactLogo from '../assets/react.svg';
import viteLogo from '../assets/vite.svg';

function LandingPage() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-800 p-4">
      <div className="flex gap-8 mb-6">
        <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} alt="Vite logo" className="w-20 h-20 hover:scale-110 transition" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} alt="React logo" className="w-20 h-20 hover:scale-110 transition" />
        </a>
      </div>

      <h1 className="text-4xl font-bold mb-4 text-red-600 ">Vite + React</h1>

      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-xs text-center">
        <button
          onClick={() => setCount((count) => count + 1)}
          className="bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 px-4 rounded transition"
        >
          Count is {count}
        </button>

        <p className="text-sm text-indigo-600 mt-3">
          Add New Components to Components folder and start editing them.
        </p>
      </div>

      <p className="mt-6 text-sm text-gray-500">
        Click on the Vite and React logos to learn more.
      </p>
    </div>
  );
}

export default LandingPage;
