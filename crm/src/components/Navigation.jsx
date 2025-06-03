import React from 'react';

const Navigation = ({ currentView, setCurrentView, campaignCount }) => {
  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Campaign Manager
          </h1>
          <div className="flex gap-2">
            <button
              onClick={() => setCurrentView('create')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                currentView === 'create'
                  ? 'bg-blue-100 text-blue-700 font-medium'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Create
            </button>
            <button
              onClick={() => setCurrentView('history')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                currentView === 'history'
                  ? 'bg-blue-100 text-blue-700 font-medium'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              History ({campaignCount})
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;