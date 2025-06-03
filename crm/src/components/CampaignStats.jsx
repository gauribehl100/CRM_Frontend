import React, { useState, useEffect } from 'react';

const CampaignStats = ({ campaign, campaignId }) => {
  const [stats, setStats] = useState({
    sent: 0,
    failed: 0,
    pending: 0,
    total: 0,
    successRate: 0
  });
  const [loading, setLoading] = useState(false);

  // Fetch campaign stats from the separate endpoint
  useEffect(() => {
    const fetchStats = async () => {
      if (!campaignId && !campaign?._id) return;
      
      setLoading(true);
      try {
        const id = campaignId || campaign._id;
        const response = await fetch(`/api/campaigns/${id}/stats`);
        const result = await response.json();
        
        if (result.success) {
          setStats(result.data);
        }
      } catch (error) {
        console.error('Error fetching campaign stats:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, [campaignId, campaign?._id]);

  // Handle creation date formatting - backend sends createdAt
  const formatCreatedDate = (dateValue) => {
    if (!dateValue) return 'Not set';
    
    const date = new Date(dateValue);
    if (isNaN(date.getTime())) return 'Invalid Date';
    
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const audienceSize = campaign?.audienceSize || 0;
  const createdDate = formatCreatedDate(campaign?.createdAt);
  const campaignName = campaign?.name || 'Unnamed Campaign';
  const campaignStatus = campaign?.status || 'unknown';
  const campaignDescription = campaign?.description;

  const campaignStats = [
    {
      label: 'Audience Size',
      value: audienceSize.toLocaleString(),
      color: 'text-blue-600',
      description: 'Total customers matching campaign rules'
    },
    {
      label: 'Messages Sent',
      value: loading ? '...' : stats.sent.toLocaleString(),
      color: 'text-green-600',
      description: 'Successfully delivered messages'
    },
    {
      label: 'Failed',
      value: loading ? '...' : stats.failed.toLocaleString(),
      color: 'text-red-600',
      description: 'Messages that failed to deliver'
    },
    {
      label: 'Success Rate',
      value: loading ? '...' : `${stats.successRate}%`,
      color: 'text-purple-600',
      description: 'Percentage of successful deliveries'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'paused':
        return 'bg-yellow-100 text-yellow-800';
      case 'completed':
        return 'bg-blue-100 text-blue-800';
      case 'draft':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  console.log('Campaign data received:', {
    campaign,
    audienceSize,
    createdDate,
    stats
  });

  return (
    <div className="space-y-6">
      {/* Campaign Info Header */}
      <div className="bg-white p-6 rounded-lg border shadow-sm">
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <div className="space-y-1 text-sm text-gray-600">
              {createdDate !== 'Invalid Date' && createdDate !== 'Not set' && (
                <p>
                  <span className="font-medium">Created:</span> {createdDate}
                </p>
              )}
              {campaign?.updatedAt && formatCreatedDate(campaign.updatedAt) !== 'Invalid Date' && (
                <p>
                  <span className="font-medium">Last Updated:</span> {formatCreatedDate(campaign.updatedAt)}
                </p>
              )}
              {campaign?.rules && (
                <p>
                  <span className="font-medium">Rules:</span> {campaign.rules.length} condition(s)
                </p>
              )}
            </div>
            {campaignDescription && (
              <p className="text-gray-700 mt-3 p-3 bg-gray-50 rounded-md">
                {campaignDescription}
              </p>
            )}
          </div>
          <div className="ml-4">
            <span className={`px-3 py-1 rounded-full text-xs font-medium capitalize ${getStatusColor(campaignStatus)}`}>
              {campaignStatus}
            </span>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {campaignStats.map((stat, index) => (
          <div key={index} className="bg-white p-4 rounded-lg border shadow-sm hover:shadow-md transition-shadow">
            <div className="flex flex-col">
              <p className="text-sm font-medium text-gray-500 mb-1">{stat.label}</p>
              <p className={`text-3xl font-bold ${stat.color} mb-1`}>{stat.value}</p>
              <p className="text-xs text-gray-400">{stat.description}</p>
            </div>
          </div>
        ))}
      </div>

      {stats.pending > 0 && (
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-yellow-800">
                {stats.pending} messages are still pending delivery
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CampaignStats;
