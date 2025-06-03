import React from 'react';
import { Users, Send } from 'lucide-react';
import CampaignForm from './CampaignForm';
import RuleBuilder from './RuleBuilder';
import AudiencePreview from './AudiencePreview';

const CreateCampaignView = ({ 
  currentCampaign, 
  setCurrentCampaign, 
  onSaveCampaign, 
  onNavigateToHistory,
  mockCustomers 
}) => {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <div className="bg-white rounded-xl shadow-lg border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <Users className="text-blue-600" />
            Create New Campaign
          </h2>
          <p className="text-gray-600 mt-2">Define your audience with flexible rules and preview the results</p>
        </div>

        <div className="p-6 space-y-6">
          <CampaignForm 
            currentCampaign={currentCampaign}
            setCurrentCampaign={setCurrentCampaign}
          />

          <RuleBuilder 
            rules={currentCampaign.rules}
            onUpdateRules={(rules) => setCurrentCampaign(prev => ({ ...prev, rules }))}
          />

          <AudiencePreview 
            audienceSize={currentCampaign.audienceSize}
            totalCustomers={mockCustomers.length}
          />

          <div className="flex gap-4 pt-4">
            <button
              onClick={onSaveCampaign}
              disabled={!currentCampaign.name.trim() || currentCampaign.audienceSize === 0}
              className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed font-semibold transition-all transform hover:scale-105"
            >
              <Send size={18} />
              Create Campaign
            </button>
            <button
              onClick={onNavigateToHistory}
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              View History
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateCampaignView;
