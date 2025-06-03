// import React from 'react';
// import { Calendar, Plus, Users } from 'lucide-react';
// import CampaignCard from './CampaignCard';

// const CampaignHistoryView = ({ campaigns, onNavigateToCreate }) => {
//      console.log('CampaignHistoryView received campaigns:', campaigns);
//   console.log('Type of campaigns:', typeof campaigns);
//   console.log('Is campaigns an array?', Array.isArray(campaigns));
//   return (
//     <div className="max-w-6xl mx-auto p-6">
         
//       <div className="bg-white rounded-xl shadow-lg border border-gray-200">
//         <div className="p-6 border-b border-gray-200">
//           <div className="flex items-center justify-between">
//             <div>
//               <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
//                 <Calendar className="text-green-600" />
//                 Campaign History
//               </h2>
//               <p className="text-gray-600 mt-2">Track performance and manage your campaigns</p>
//             </div>
//             <button
//               onClick={onNavigateToCreate}
//               className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
//             >
//               <Plus size={16} />
//               New Campaign
//             </button>
//           </div>
//         </div>

//         <div className="p-6">
//           {campaigns.length === 0 ? (
//             <EmptyState onNavigateToCreate={onNavigateToCreate} />
//           ) : (
//             <div className="space-y-4">
//               {campaigns.map((campaign) => (
//                 <CampaignCard key={campaign.id} campaign={campaign} />
//               ))}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// const EmptyState = ({ onNavigateToCreate }) => (
//   <div className="text-center py-12">
//     <Users className="mx-auto h-16 w-16 text-gray-300 mb-4" />
//     <h3 className="text-lg font-medium text-gray-600 mb-2">No campaigns yet</h3>
//     <p className="text-gray-500 mb-6">Create your first campaign to get started</p>
//     <button
//       onClick={onNavigateToCreate}
//       className="flex items-center gap-2 mx-auto px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
//     >
//       <Plus size={16} />
//       Create Campaign
//     </button>
//   </div>
// );

// export default CampaignHistoryView;



import React from 'react';
import { Calendar, Plus, Users } from 'lucide-react';
import CampaignCard from './CampaignCard';

const CampaignHistoryView = ({ campaigns, onNavigateToCreate, loading }) => {
  // Show loading state
  if (loading) {
    return (
      <div className="max-w-6xl mx-auto p-6">
        <div className="bg-white rounded-xl shadow-lg border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                  <Calendar className="text-green-600" />
                  Campaign History
                </h2>
                <p className="text-gray-600 mt-2">Loading campaigns...</p>
              </div>
              <button
                onClick={onNavigateToCreate}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Plus size={16} />
                New Campaign
              </button>
            </div>
          </div>
          <div className="p-6">
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
              <p className="text-gray-600">Loading campaigns...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Show campaigns or empty state
  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="bg-white rounded-xl shadow-lg border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                <Calendar className="text-green-600" />
                Campaign History ({campaigns?.length || 0})
              </h2>
              <p className="text-gray-600 mt-2">Track performance and manage your campaigns</p>
            </div>
            <button
              onClick={onNavigateToCreate}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Plus size={16} />
              New Campaign
            </button>
          </div>
        </div>

        <div className="p-6">
          {!campaigns || campaigns.length === 0 ? (
            <EmptyState onNavigateToCreate={onNavigateToCreate} />
          ) : (
            <div className="space-y-4">
              {campaigns.map((campaign) => (
                <CampaignCard key={campaign._id || campaign.id} campaign={campaign} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const EmptyState = ({ onNavigateToCreate }) => (
  <div className="text-center py-12">
    <Users className="mx-auto h-16 w-16 text-gray-300 mb-4" />
    <h3 className="text-lg font-medium text-gray-600 mb-2">No campaigns yet</h3>
    <p className="text-gray-500 mb-6">Create your first campaign to get started</p>
    <button
      onClick={onNavigateToCreate}
      className="flex items-center gap-2 mx-auto px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
    >
      <Plus size={16} />
      Create Campaign
    </button>
  </div>
);

export default CampaignHistoryView;



// import React from 'react';
// import { Calendar, Plus, Users } from 'lucide-react';
// import CampaignCard from './CampaignCard';

// const CampaignHistoryView = ({ campaigns, onNavigateToCreate, loading }) => {
//   // Add debugging
//   React.useEffect(() => {
//     console.log('Campaigns data in history view:', campaigns);
//     if (campaigns && campaigns.length > 0) {
//       console.log('First campaign:', campaigns[0]);
//       console.log('First campaign audienceSize:', campaigns[0].audienceSize);
//     }
//   }, [campaigns]);

//   // Show loading state
//   if (loading) {
//     return (
//       <div className="max-w-6xl mx-auto p-6">
//         <div className="bg-white rounded-xl shadow-lg border border-gray-200">
//           <div className="p-6 border-b border-gray-200">
//             <div className="flex items-center justify-between">
//               <div>
//                 <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
//                   <Calendar className="text-green-600" />
//                   Campaign History
//                 </h2>
//                 <p className="text-gray-600 mt-2">Loading campaigns...</p>
//               </div>
//               <button
//                 onClick={onNavigateToCreate}
//                 className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
//               >
//                 <Plus size={16} />
//                 New Campaign
//               </button>
//             </div>
//           </div>
//           <div className="p-6">
//             <div className="text-center py-12">
//               <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
//               <p className="text-gray-600">Loading campaigns...</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   // Show campaigns or empty state
//   return (
//     <div className="max-w-6xl mx-auto p-6">
//       <div className="bg-white rounded-xl shadow-lg border border-gray-200">
//         <div className="p-6 border-b border-gray-200">
//           <div className="flex items-center justify-between">
//             <div>
//               <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
//                 <Calendar className="text-green-600" />
//                 Campaign History ({campaigns?.length || 0})
//               </h2>
//               <p className="text-gray-600 mt-2">Track performance and manage your campaigns</p>
//             </div>
//             <button
//               onClick={onNavigateToCreate}
//               className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
//             >
//               <Plus size={16} />
//               New Campaign
//             </button>
//           </div>
//         </div>

//         <div className="p-6">
//           {!campaigns || campaigns.length === 0 ? (
//             <EmptyState onNavigateToCreate={onNavigateToCreate} />
//           ) : (
//             <div className="space-y-4">
//               {campaigns.map((campaign) => {
//                 // Debug each campaign
//                 console.log(`Campaign ${campaign.name} audienceSize:`, campaign.audienceSize);
//                 return (
//                   <CampaignCard key={campaign._id || campaign.id} campaign={campaign} />
//                 );
//               })}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// const EmptyState = ({ onNavigateToCreate }) => (
//   <div className="text-center py-12">
//     <Users className="mx-auto h-16 w-16 text-gray-300 mb-4" />
//     <h3 className="text-lg font-medium text-gray-600 mb-2">No campaigns yet</h3>
//     <p className="text-gray-500 mb-6">Create your first campaign to get started</p>
//     <button
//       onClick={onNavigateToCreate}
//       className="flex items-center gap-2 mx-auto px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
//     >
//       <Plus size={16} />
//       Create Campaign
//     </button>
//   </div>
// );

// export default CampaignHistoryView;