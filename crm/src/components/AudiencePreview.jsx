import React from 'react';
import { Users } from 'lucide-react';

const AudiencePreview = ({ audienceSize, totalCustomers }) => {
  const matchRate = totalCustomers > 0 ? ((audienceSize / totalCustomers) * 100).toFixed(1) : 0;

  return (
    <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl border border-blue-200">
      <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
        <Users className="text-blue-600" />
        Audience Preview
      </h3>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-3xl font-bold text-blue-600">{audienceSize.toLocaleString()}</p>
          <p className="text-gray-600">customers match your criteria</p>
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-500">Out of {totalCustomers.toLocaleString()} total customers</p>
          <p className="text-lg font-semibold text-purple-600">
            {matchRate}% match rate
          </p>
        </div>
      </div>
    </div>
  );
};

export default AudiencePreview;