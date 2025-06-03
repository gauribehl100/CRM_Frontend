// import React from 'react';

// const CampaignStats = ({ campaign }) => {
//   const successRate = campaign.sent > 0 ? 
//     (((campaign.sent - campaign.failed) / campaign.sent) * 100).toFixed(1) : 
//     '0.0';

//   const stats = [
//     {
//       label: 'Audience Size',
//       value: campaign.audienceSize.toLocaleString(),
//       color: 'text-blue-600'
//     },
//     {
//       label: 'Messages Sent',
//       value: campaign.sent.toLocaleString(),
//       color: 'text-green-600'
//     },
//     {
//       label: 'Failed',
//       value: campaign.failed.toLocaleString(),
//       color: 'text-red-600'
//     },
//     {
//       label: 'Success Rate',
//       value: `${successRate}%`,
//       color: 'text-purple-600'
//     }
//   ];

//   return (
//     <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
//       {stats.map((stat, index) => (
//         <div key={index} className="bg-white p-3 rounded-lg border">
//           <p className="text-sm text-gray-500">{stat.label}</p>
//           <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CampaignStats;


// import React from 'react';

// const CampaignStats = ({ campaign }) => {
//   // Provide default values for missing properties
//   const audienceSize = campaign?.audienceSize || 0;
//   const sent = campaign?.sent || 0;
//   const failed = campaign?.failed || 0;
  
//   const successRate = sent > 0 ? 
//     (((sent - failed) / sent) * 100).toFixed(1) : 
//     '0.0';

//   const stats = [
//     {
//       label: 'Audience Size',
//       value: audienceSize.toLocaleString(),
//       color: 'text-blue-600'
//     },
//     {
//       label: 'Messages Sent',
//       value: sent.toLocaleString(),
//       color: 'text-green-600'
//     },
//     {
//       label: 'Failed',
//       value: failed.toLocaleString(),
//       color: 'text-red-600'
//     },
//     {
//       label: 'Success Rate',
//       value: `${successRate}%`,
//       color: 'text-purple-600'
//     }
//   ];

//   return (
//     <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
//       {stats.map((stat, index) => (
//         <div key={index} className="bg-white p-3 rounded-lg border">
//           <p className="text-sm text-gray-500">{stat.label}</p>
//           <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CampaignStats;


// import React, { useState, useEffect } from 'react';
// import { Users, Send, TrendingUp, AlertCircle } from 'lucide-react';

// const CampaignStats = ({ campaign }) => {
//   const [stats, setStats] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // Debug campaign data
//   useEffect(() => {
//     console.log('CampaignStats received campaign:', campaign);
//     console.log('Campaign audienceSize:', campaign?.audienceSize);
//   }, [campaign]);

//   // Fetch campaign delivery stats from backend
//   useEffect(() => {
//     const fetchStats = async () => {
//       if (!campaign._id) {
//         setLoading(false);
//         return;
//       }

//       try {
//         const response = await fetch(`http://localhost:5000/api/campaigns/${campaign._id}/stats`);
//         if (response.ok) {
//           const result = await response.json();
//           if (result.success) {
//             setStats(result.data);
//             console.log('Fetched stats:', result.data);
//           }
//         }
//       } catch (error) {
//         console.error('Error fetching campaign stats:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchStats();
//   }, [campaign._id]);

//   return (
//     <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
//       {/* Audience Size - Always show from campaign data */}
//       <div className="bg-white rounded-lg p-4 border border-blue-200">
//         <div className="flex items-center gap-2">
//           <Users className="text-blue-600" size={20} />
//           <div>
//             <p className="text-sm text-blue-600 font-medium">Audience Size</p>
//             <p className="text-xl font-bold text-blue-900">
//               {campaign.audienceSize !== undefined 
//                 ? campaign.audienceSize.toLocaleString() 
//                 : 'N/A'
//               }
//             </p>
//             {/* Debug info - remove after fixing */}
//             <p className="text-xs text-gray-400">
//               Raw: {JSON.stringify(campaign.audienceSize)}
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Messages Sent */}
//       <div className="bg-white rounded-lg p-4 border border-green-200">
//         <div className="flex items-center gap-2">
//           <Send className="text-green-600" size={20} />
//           <div>
//             <p className="text-sm text-green-600 font-medium">Messages Sent</p>
//             <p className="text-xl font-bold text-green-900">
//               {loading ? '...' : (stats?.sent || 0).toLocaleString()}
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Success Rate */}
//       <div className="bg-white rounded-lg p-4 border border-purple-200">
//         <div className="flex items-center gap-2">
//           <TrendingUp className="text-purple-600" size={20} />
//           <div>
//             <p className="text-sm text-purple-600 font-medium">Success Rate</p>
//             <p className="text-xl font-bold text-purple-900">
//               {loading ? '...' : `${stats?.successRate || 0}%`}
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Failed Messages */}
//       <div className="bg-white rounded-lg p-4 border border-red-200">
//         <div className="flex items-center gap-2">
//           <AlertCircle className="text-red-600" size={20} />
//           <div>
//             <p className="text-sm text-red-600 font-medium">Failed</p>
//             <p className="text-xl font-bold text-red-900">
//               {loading ? '...' : (stats?.failed || 0).toLocaleString()}
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CampaignStats;



// import React, { useState, useEffect } from 'react';

// const CampaignStats = ({ campaign, campaignId }) => {
//   const [stats, setStats] = useState({
//     sent: 0,
//     failed: 0,
//     pending: 0,
//     total: 0,
//     successRate: 0
//   });
//   const [loading, setLoading] = useState(false);

//   // Fetch campaign stats from the separate endpoint
//   useEffect(() => {
//     const fetchStats = async () => {
//       if (!campaignId && !campaign?._id) return;
      
//       setLoading(true);
//       try {
//         const id = campaignId || campaign._id;
//         const response = await fetch(`/api/campaigns/${id}/stats`);
//         const result = await response.json();
        
//         if (result.success) {
//           setStats(result.data);
//         }
//       } catch (error) {
//         console.error('Error fetching campaign stats:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchStats();
//   }, [campaignId, campaign?._id]);

//   // Handle creation date formatting - backend sends createdAt
//   const formatCreatedDate = (dateValue) => {
//     if (!dateValue) return 'Not set';
    
//     const date = new Date(dateValue);
//     if (isNaN(date.getTime())) return 'Invalid Date';
    
//     return date.toLocaleDateString('en-US', {
//       year: 'numeric',
//       month: 'short',
//       day: 'numeric',
//       hour: '2-digit',
//       minute: '2-digit'
//     });
//   };

//   // Backend uses these exact field names
//   const audienceSize = campaign?.audienceSize || 0;
//   const createdDate = formatCreatedDate(campaign?.createdAt);
//   const campaignName = campaign?.name || 'Unnamed Campaign';
//   const campaignStatus = campaign?.status || 'unknown';
//   const campaignDescription = campaign?.description;

//   const campaignStats = [
//     {
//       label: 'Audience Size',
//       value: audienceSize.toLocaleString(),
//       color: 'text-blue-600',
//       description: 'Total customers matching campaign rules'
//     },
//     {
//       label: 'Messages Sent',
//       value: loading ? '...' : stats.sent.toLocaleString(),
//       color: 'text-green-600',
//       description: 'Successfully delivered messages'
//     },
//     {
//       label: 'Failed',
//       value: loading ? '...' : stats.failed.toLocaleString(),
//       color: 'text-red-600',
//       description: 'Messages that failed to deliver'
//     },
//     {
//       label: 'Success Rate',
//       value: loading ? '...' : `${stats.successRate}%`,
//       color: 'text-purple-600',
//       description: 'Percentage of successful deliveries'
//     }
//   ];

//   const getStatusColor = (status) => {
//     switch (status) {
//       case 'active':
//         return 'bg-green-100 text-green-800';
//       case 'paused':
//         return 'bg-yellow-100 text-yellow-800';
//       case 'completed':
//         return 'bg-blue-100 text-blue-800';
//       case 'draft':
//         return 'bg-gray-100 text-gray-800';
//       default:
//         return 'bg-gray-100 text-gray-800';
//     }
//   };

//   // Debug logging to help troubleshoot
//   console.log('Campaign data received:', {
//     campaign,
//     audienceSize,
//     createdDate,
//     stats
//   });

//   return (
//     <div className="space-y-6">
//       {/* Campaign Info Header */}
//       <div className="bg-white p-6 rounded-lg border shadow-sm">
//         <div className="flex justify-between items-start">
//           <div className="flex-1">
//             <h2 className="text-2xl font-semibold text-gray-900 mb-2">
//               {campaignName}
//             </h2>
//             <div className="space-y-1 text-sm text-gray-600">
//               <p>
//                 <span className="font-medium">Created:</span> {createdDate}
//               </p>
//               {campaign?.updatedAt && (
//                 <p>
//                   <span className="font-medium">Last Updated:</span> {formatCreatedDate(campaign.updatedAt)}
//                 </p>
//               )}
//               {campaign?.rules && (
//                 <p>
//                   <span className="font-medium">Rules:</span> {campaign.rules.length} condition(s)
//                 </p>
//               )}
//             </div>
//             {/* {campaignDescription && (
//               <p className="text-gray-700 mt-3 p-3 bg-gray-50 rounded-md">
//                 {campaignDescription}
//               </p>
//             )} */}
//           </div>
//           <div className="ml-4">
//             <span className={`px-3 py-1 rounded-full text-xs font-medium capitalize ${getStatusColor(campaignStatus)}`}>
//               {campaignStatus}
//             </span>
//           </div>
//         </div>
//       </div>

//       {/* Stats Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//         {campaignStats.map((stat, index) => (
//           <div key={index} className="bg-white p-4 rounded-lg border shadow-sm hover:shadow-md transition-shadow">
//             <div className="flex flex-col">
//               <p className="text-sm font-medium text-gray-500 mb-1">{stat.label}</p>
//               <p className={`text-3xl font-bold ${stat.color} mb-1`}>{stat.value}</p>
//               <p className="text-xs text-gray-400">{stat.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Additional Stats if available */}
//       {stats.pending > 0 && (
//         <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
//           <div className="flex items-center">
//             <div className="flex-shrink-0">
//               <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
//             </div>
//             <div className="ml-3">
//               <p className="text-sm font-medium text-yellow-800">
//                 {stats.pending} messages are still pending delivery
//               </p>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CampaignStats;



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

  // Backend uses these exact field names
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

  // Debug logging to help troubleshoot
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

      {/* Additional Stats if available */}
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