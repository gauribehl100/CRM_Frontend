import React, { useState, useEffect } from 'react';
import { Plus, Trash2, Play, Eye, Calendar, Users, Send, AlertTriangle, ChevronDown, ChevronRight } from 'lucide-react';

const CampaignApp = () => {
  const [currentView, setCurrentView] = useState('create');
  const [campaigns, setCampaigns] = useState([]);
  const [currentCampaign, setCurrentCampaign] = useState({
    name: '',
    description: '',
    rules: [{ field: 'spend', operator: 'greater_than', value: '', logic: 'AND' }],
    audienceSize: 0
  });

  // Mock data for audience calculation
  const mockCustomers = [
    { id: 1, spend: 15000, visits: 2, lastActive: 30 },
    { id: 2, spend: 8000, visits: 5, lastActive: 10 },
    { id: 3, spend: 25000, visits: 1, lastActive: 120 },
    { id: 4, spend: 5000, visits: 8, lastActive: 5 },
    { id: 5, spend: 12000, visits: 2, lastActive: 45 },
    { id: 6, spend: 30000, visits: 0, lastActive: 200 },
    { id: 7, spend: 7500, visits: 6, lastActive: 7 },
    { id: 8, spend: 18000, visits: 3, lastActive: 95 },
    { id: 9, spend: 3000, visits: 10, lastActive: 2 },
    { id: 10, spend: 22000, visits: 1, lastActive: 150 }
  ];

  const fieldOptions = [
    { value: 'spend', label: 'Total Spend (INR)', type: 'number' },
    { value: 'visits', label: 'Visit Count', type: 'number' },
    { value: 'lastActive', label: 'Days Since Last Active', type: 'number' }
  ];

  const operatorOptions = [
    { value: 'greater_than', label: '>' },
    { value: 'less_than', label: '<' },
    { value: 'equal_to', label: '=' },
    { value: 'greater_equal', label: '>=' },
    { value: 'less_equal', label: '<=' }
  ];

  // Calculate audience size based on rules
  const calculateAudienceSize = (rules) => {
    if (!rules.length || rules.some(rule => !rule.value)) return 0;

    const validRules = rules.filter(rule => rule.value);
    if (!validRules.length) return 0;

    const matchingCustomers = mockCustomers.filter(customer => {
      return evaluateRules(customer, validRules);
    });

    return matchingCustomers.length;
  };

  const evaluateRules = (customer, rules) => {
    let result = true;
    let currentLogic = 'AND';

    for (let i = 0; i < rules.length; i++) {
      const rule = rules[i];
      const customerValue = customer[rule.field];
      const ruleValue = parseFloat(rule.value);

      let ruleResult = false;
      switch (rule.operator) {
        case 'greater_than':
          ruleResult = customerValue > ruleValue;
          break;
        case 'less_than':
          ruleResult = customerValue < ruleValue;
          break;
        case 'equal_to':
          ruleResult = customerValue === ruleValue;
          break;
        case 'greater_equal':
          ruleResult = customerValue >= ruleValue;
          break;
        case 'less_equal':
          ruleResult = customerValue <= ruleValue;
          break;
      }

      if (i === 0) {
        result = ruleResult;
      } else {
        if (currentLogic === 'AND') {
          result = result && ruleResult;
        } else {
          result = result || ruleResult;
        }
      }

      currentLogic = rule.logic;
    }

    return result;
  };

  // Update audience size when rules change
  useEffect(() => {
    const size = calculateAudienceSize(currentCampaign.rules);
    setCurrentCampaign(prev => ({ ...prev, audienceSize: size }));
  }, [currentCampaign.rules]);

  const addRule = () => {
    setCurrentCampaign(prev => ({
      ...prev,
      rules: [...prev.rules, { field: 'spend', operator: 'greater_than', value: '', logic: 'AND' }]
    }));
  };

  const removeRule = (index) => {
    setCurrentCampaign(prev => ({
      ...prev,
      rules: prev.rules.filter((_, i) => i !== index)
    }));
  };

  const updateRule = (index, field, value) => {
    setCurrentCampaign(prev => ({
      ...prev,
      rules: prev.rules.map((rule, i) => 
        i === index ? { ...rule, [field]: value } : rule
      )
    }));
  };

//   // const saveCampaign = () => {
//   //   if (!currentCampaign.name.trim()) {
//   //     alert('Please enter a campaign name');
//   //     return;
//   //   }

//   //   const newCampaign = {
//   //     id: Date.now(),
//   //     ...currentCampaign,
//   //     created: new Date().toISOString(),
//   //     status: 'Active',
//   //     sent: Math.floor(Math.random() * currentCampaign.audienceSize),
//   //     failed: Math.floor(Math.random() * (currentCampaign.audienceSize * 0.1))
//   //   };

//   //   setCampaigns(prev => [newCampaign, ...prev]);
//   //   setCurrentView('history');
    
//   //   // Reset form
//   //   setCurrentCampaign({
//   //     name: '',
//   //     description: '',
//   //     rules: [{ field: 'spend', operator: 'greater_than', value: '', logic: 'AND' }],
//   //     audienceSize: 0
//   //   });
//   // };

//     const saveCampaign = async () => {
//   const response = await fetch('http://localhost:5000/api/campaigns', {
//   method: 'POST',
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify({
//     name: currentCampaign.name,
//     description: currentCampaign.description,
//     rules: currentCampaign.rules.map(rule => ({
//       field: rule.field === 'spend' ? 'totalSpend' : 
//              rule.field === 'visits' ? 'visitCount' : 'daysSinceLastActive',
//       operator: rule.operator,
//       value: parseFloat(rule.value),
//       logic: rule.logic
//     }))
//   })
// });
// };


const saveCampaign = async () => {
  if (!currentCampaign.name.trim()) {
    alert('Please enter a campaign name');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/campaigns', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: currentCampaign.name,
        description: currentCampaign.description,
         audienceSize: currentCampaign.audienceSize,
        rules: currentCampaign.rules.map(rule => ({
          field:
            rule.field === 'spend' ? 'totalSpend' :
            rule.field === 'visits' ? 'visitCount' :
            'daysSinceLastActive',
          operator: rule.operator,
          value: parseFloat(rule.value),
          logic: rule.logic
        }))
      })
    });

    if (!response.ok) {
      throw new Error('Failed to save campaign');
    }

    const data = await response.json();
    console.log('Campaign saved on backend:', data);

    // Create local campaign entry (for UI)
    const audienceSize = currentCampaign.audienceSize || 1; // avoid 0
    const sent = Math.floor(Math.random() * audienceSize);
    const failed = Math.floor(Math.random() * (audienceSize * 0.1));

    const newCampaign = {
      id: Date.now(),
      ...currentCampaign,
      created: new Date().toISOString(),
      status: 'Active',
      sent,
      failed,
      successRate: sent > 0 ? (((sent - failed) / sent) * 100).toFixed(2) : '0.00'
    };

    setCampaigns(prev => [newCampaign, ...prev]);
    setCurrentView('history');

    // Reset form
    setCurrentCampaign({
      name: '',
      description: '',
      rules: [{ field: 'spend', operator: 'greater_than', value: '', logic: 'AND' }],
      audienceSize: 0
    });

  } catch (error) {
    console.error('Error saving campaign:', error);
    alert('There was an error saving the campaign. Please try again.');
  }
};



  const CreateCampaignView = () => (
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
          {/* Campaign Details */}
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

          {/* Rule Builder */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <Eye className="text-purple-600" />
              Audience Rules
            </h3>
            
            <div className="space-y-4">
              {currentCampaign.rules.map((rule, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg border-2 border-dashed border-gray-300 hover:border-blue-400 transition-colors">
                  <div className="flex items-center gap-4 flex-wrap">
                    {index > 0 && (
                      <div className="flex items-center">
                        <select
                          value={rule.logic}
                          onChange={(e) => updateRule(index, 'logic', e.target.value)}
                          className="px-3 py-2 bg-white border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="AND">AND</option>
                          <option value="OR">OR</option>
                        </select>
                      </div>
                    )}
                    
                    <select
                      value={rule.field}
                      onChange={(e) => updateRule(index, 'field', e.target.value)}
                      className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                    >
                      {fieldOptions.map(option => (
                        <option key={option.value} value={option.value}>{option.label}</option>
                      ))}
                    </select>

                    <select
                      value={rule.operator}
                      onChange={(e) => updateRule(index, 'operator', e.target.value)}
                      className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                    >
                      {operatorOptions.map(option => (
                        <option key={option.value} value={option.value}>{option.label}</option>
                      ))}
                    </select>

                    <input
                      type="number"
                      value={rule.value}
                      onChange={(e) => updateRule(index, 'value', e.target.value)}
                      className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 w-32"
                      placeholder="Value"
                    />

                    {currentCampaign.rules.length > 1 && (
                      <button
                        onClick={() => removeRule(index)}
                        className="p-2 text-red-500 hover:bg-red-50 rounded-md transition-colors"
                      >
                        <Trash2 size={16} />
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={addRule}
              className="mt-4 flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors"
            >
              <Plus size={16} />
              Add Rule
            </button>
          </div>

          {/* Audience Preview */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl border border-blue-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <Users className="text-blue-600" />
              Audience Preview
            </h3>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-3xl font-bold text-blue-600">{currentCampaign.audienceSize.toLocaleString()}</p>
                <p className="text-gray-600">customers match your criteria</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500">Out of {mockCustomers.length.toLocaleString()} total customers</p>
                <p className="text-lg font-semibold text-purple-600">
                  {((currentCampaign.audienceSize / mockCustomers.length) * 100).toFixed(1)}% match rate
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 pt-4">
            <button
              onClick={saveCampaign}
              disabled={!currentCampaign.name.trim() || currentCampaign.audienceSize === 0}
              className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed font-semibold transition-all transform hover:scale-105"
            >
              <Send size={18} />
              Create Campaign
            </button>
            <button
              onClick={() => setCurrentView('history')}
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              View History
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const CampaignHistoryView = () => (
    <div className="max-w-6xl mx-auto p-6">
      <div className="bg-white rounded-xl shadow-lg border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                <Calendar className="text-green-600" />
                Campaign History
              </h2>
              <p className="text-gray-600 mt-2">Track performance and manage your campaigns</p>
            </div>
            <button
              onClick={() => setCurrentView('create')}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Plus size={16} />
              New Campaign
            </button>
          </div>
        </div>

        <div className="p-6">
          {campaigns.length === 0 ? (
            <div className="text-center py-12">
              <Users className="mx-auto h-16 w-16 text-gray-300 mb-4" />
              <h3 className="text-lg font-medium text-gray-600 mb-2">No campaigns yet</h3>
              <p className="text-gray-500 mb-6">Create your first campaign to get started</p>
              <button
                onClick={() => setCurrentView('create')}
                className="flex items-center gap-2 mx-auto px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Plus size={16} />
                Create Campaign
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {campaigns.map((campaign) => (
                <div key={campaign.id} className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">{campaign.name}</h3>
                      {campaign.description && (
                        <p className="text-gray-600 mt-1">{campaign.description}</p>
                      )}
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

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    <div className="bg-white p-3 rounded-lg border">
                      <p className="text-sm text-gray-500">Audience Size</p>
                      <p className="text-2xl font-bold text-blue-600">{campaign.audienceSize.toLocaleString()}</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg border">
                      <p className="text-sm text-gray-500">Messages Sent</p>
                      <p className="text-2xl font-bold text-green-600">{campaign.sent.toLocaleString()}</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg border">
                      <p className="text-sm text-gray-500">Failed</p>
                      <p className="text-2xl font-bold text-red-600">{campaign.failed.toLocaleString()}</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg border">
                      <p className="text-sm text-gray-500">Success Rate</p>
                      <p className="text-2xl font-bold text-purple-600">
                        {(((campaign.sent - campaign.failed) / campaign.sent) * 100).toFixed(1)}%
                      </p>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-500">Created: {new Date(campaign.created).toLocaleDateString()}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-xs text-gray-400">Rules:</span>
                          <span className="text-xs bg-gray-200 px-2 py-1 rounded">
                            {campaign.rules.length} condition{campaign.rules.length !== 1 ? 's' : ''}
                          </span>
                        </div>
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
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
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
                History ({campaigns.length})
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="py-8">
        {currentView === 'create' ? <CreateCampaignView /> : <CampaignHistoryView />}
      </main>
    </div>
  );
};

export default CampaignApp;







