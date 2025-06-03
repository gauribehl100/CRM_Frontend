import React from 'react';
import { Play } from 'lucide-react';
import CampaignStats from './CampaignStats';

const CampaignCard = ({ campaign }) => {
  return (
    <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-800">{campaign.name}</h3>
          {/* {campaign.description && (
            <p className="text-gray-600 mt-1">{campaign.description}</p>
          )} */}
        </div>
        <div className="flex items-center gap-3">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
            campaign.status === 'Active' 
              ? 'bg-green-100 text-green-800' 
              : 'bg-gray-100 text-gray-800'
          }`}>
            {campaign.status}
          </span>
          <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-md">
            <Play size={16} />
          </button>
        </div>
      </div>

      <CampaignStats campaign={campaign} />

      <div className="border-t pt-4">
        <div className="flex items-center justify-between">
          <div>
            {/* <p className="text-sm text-gray-500">Created: {new Date(campaign.created).toLocaleDateString()}</p> */}
            {/* <div className="flex items-center gap-2 mt-1"> */}
              {/* <span className="text-xs text-gray-400">Rules:</span>
              <span className="text-xs bg-gray-200 px-2 py-1 rounded">
                {campaign.rules.length} condition{campaign.rules.length !== 1 ? 's' : ''}
              </span> */}
            {/* </div> */}
          </div>
          <div className="flex gap-2">
            <button className="px-3 py-1 text-sm text-blue-600 hover:bg-blue-50 rounded transition-colors">
              Edit
            </button>
            <button className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded transition-colors">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignCard;