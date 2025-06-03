import React from 'react';

const CampaignForm = ({ currentCampaign, setCurrentCampaign }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Campaign Name *</label>
        <input
          type="text"
          value={currentCampaign.name}
          onChange={(e) => setCurrentCampaign(prev => ({ ...prev, name: e.target.value }))}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
          placeholder="Enter campaign name..."
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
        <input
          type="text"
          value={currentCampaign.description}
          onChange={(e) => setCurrentCampaign(prev => ({ ...prev, description: e.target.value }))}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
          placeholder="Optional description..."
        />
      </div>
    </div>
  );
};

export default CampaignForm;
