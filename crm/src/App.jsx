
// import React, { useState, useEffect } from 'react';
// import Navigation from './components/Navigation';
// import CreateCampaignView from './components/CreateCampaignView';
// import CampaignHistoryView from './components/CampaignHistoryView';
// import { mockCustomers } from './data/mockData';
// import { calculateAudienceSize } from './utils/audienceCalculator';
// import Login from './Login'
// import { Routes } from 'react-router-dom';
// import { Route } from 'react-router-dom';
// import { Navigate } from 'react-router-dom';
// const App = () => {
//   const [currentView, setCurrentView] = useState('create');
//   const [campaigns, setCampaigns] = useState([]);
//   const [currentCampaign, setCurrentCampaign] = useState({
//     name: '',
//     description: '',
//     rules: [{ field: 'spend', operator: 'greater_than', value: '', logic: 'AND' }],
//     audienceSize: 0
//   });

//   // Update audience size when rules change
//   useEffect(() => {
//     const size = calculateAudienceSize(currentCampaign.rules, mockCustomers);
//     setCurrentCampaign(prev => ({ ...prev, audienceSize: size }));
//   }, [currentCampaign.rules]);

//   const saveCampaign = async () => {
//     if (!currentCampaign.name.trim()) {
//       alert('Please enter a campaign name');
//       return;
//     }

//     try {
//       const response = await fetch('http://localhost:5000/api/campaigns', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           name: currentCampaign.name,
//           description: currentCampaign.description,
//           audienceSize: currentCampaign.audienceSize,
//           rules: currentCampaign.rules.map(rule => ({
//             field: rule.field === 'spend' ? 'totalSpend' :
//                    rule.field === 'visits' ? 'visitCount' : 'daysSinceLastActive',
//             operator: rule.operator,
//             value: parseFloat(rule.value),
//             logic: rule.logic
//           }))
//         })
//       });

//       if (!response.ok) {
//         throw new Error('Failed to save campaign');
//       }

//       const data = await response.json();
//       console.log('Campaign saved on backend:', data);

//       // Create local campaign entry
//       const audienceSize = currentCampaign.audienceSize || 1;
//       const sent = Math.floor(Math.random() * audienceSize);
//       const failed = Math.floor(Math.random() * (audienceSize * 0.1));

//       const newCampaign = {
//         id: Date.now(),
//         ...currentCampaign,
//         created: new Date().toISOString(),
//         status: 'Active',
//         sent,
//         failed,
//         successRate: sent > 0 ? (((sent - failed) / sent) * 100).toFixed(2) : '0.00'
//       };

//       setCampaigns(prev => [newCampaign, ...prev]);
//       setCurrentView('history');

//       // Reset form
//       setCurrentCampaign({
//         name: '',
//         description: '',
//         rules: [{ field: 'spend', operator: 'greater_than', value: '', logic: 'AND' }],
//         audienceSize: 0
//       });

//     } catch (error) {
//       console.error('Error saving campaign:', error);
//       alert('There was an error saving the campaign. Please try again.');
//     }
//   };

//   return (
//    <div>
//     <Routes>
//       <Route path="/login" element={<Login />} />
//       <Route path="/" element={
//         isAuthenticated ? (
//           <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
//             <Navigation 
//               currentView={currentView}
//               setCurrentView={setCurrentView}
//               campaignCount={campaigns.length}
//             />
            
//             <main className="py-8">
//               {currentView === 'create' ? (
//                 <CreateCampaignView 
//                   currentCampaign={currentCampaign}
//                   setCurrentCampaign={setCurrentCampaign}
//                   onSaveCampaign={saveCampaign}
//                   onNavigateToHistory={() => setCurrentView('history')}
//                   mockCustomers={mockCustomers}
//                 />
//               ) : (
//                 <CampaignHistoryView 
//                   campaigns={campaigns}
//                   onNavigateToCreate={() => setCurrentView('create')}
//                 />
//               )}
//             </main>
//           </div>
//         ) : (
//           <Navigate to="/login" replace />
//         )
//       } />
//     </Routes>
//   </div>
   
//   );
// };

// export default App;



// import React, { useState, useEffect } from 'react';
// import { Routes, Route, Navigate } from 'react-router-dom';
// import Navigation from './components/Navigation';
// import CreateCampaignView from './components/CreateCampaignView';
// import CampaignHistoryView from './components/CampaignHistoryView';
// import { mockCustomers } from './data/mockData';
// import { calculateAudienceSize } from './utils/audienceCalculator';
// import Login from './Login';

// const App = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(true); // Mock auth
//   const [currentView, setCurrentView] = useState('create');
//   const [campaigns, setCampaigns] = useState([]);
//   const [currentCampaign, setCurrentCampaign] = useState({
//     name: '',
//     description: '',
//     rules: [{ field: 'spend', operator: 'greater_than', value: '', logic: 'AND' }],
//     audienceSize: 0
//   });

//   useEffect(() => {
//     const size = calculateAudienceSize(currentCampaign.rules, mockCustomers);
//     setCurrentCampaign(prev => ({ ...prev, audienceSize: size }));
//   }, [currentCampaign.rules]);

//   const saveCampaign = async () => {
//     if (!currentCampaign.name.trim()) {
//       alert('Please enter a campaign name');
//       return;
//     }

//     try {
//       const response = await fetch('http://localhost:5000/api/campaigns', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           name: currentCampaign.name,
//           description: currentCampaign.description,
//           audienceSize: currentCampaign.audienceSize,
//           rules: currentCampaign.rules.map(rule => ({
//             field: rule.field === 'spend' ? 'totalSpend' :
//                    rule.field === 'visits' ? 'visitCount' : 'daysSinceLastActive',
//             operator: rule.operator,
//             value: parseFloat(rule.value),
//             logic: rule.logic
//           }))
//         })
//       });

//       if (!response.ok) throw new Error('Failed to save campaign');

//       const data = await response.json();
//       console.log('Campaign saved on backend:', data);

//       const audienceSize = currentCampaign.audienceSize || 1;
//       const sent = Math.floor(Math.random() * audienceSize);
//       const failed = Math.floor(Math.random() * (audienceSize * 0.1));

//       const newCampaign = {
//         id: Date.now(),
//         ...currentCampaign,
//         created: new Date().toISOString(),
//         status: 'Active',
//         sent,
//         failed,
//         successRate: sent > 0 ? (((sent - failed) / sent) * 100).toFixed(2) : '0.00'
//       };

//       setCampaigns(prev => [newCampaign, ...prev]);
//       setCurrentView('history');
//       setCurrentCampaign({
//         name: '',
//         description: '',
//         rules: [{ field: 'spend', operator: 'greater_than', value: '', logic: 'AND' }],
//         audienceSize: 0
//       });
//     } catch (error) {
//       console.error('Error saving campaign:', error);
//       alert('There was an error saving the campaign. Please try again.');
//     }
//   };

//   return (
//     <div>
//       <Routes>
//         <Route path="/login" element={<Login />} />
//         <Route
//           path="/"
//           element={
//             isAuthenticated ? (
//               <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
//                 <Navigation 
//                   currentView={currentView}
//                   setCurrentView={setCurrentView}
//                   campaignCount={campaigns.length}
//                 />
//                 <main className="py-8">
//                   {currentView === 'create' ? (
//                     <CreateCampaignView 
//                       currentCampaign={currentCampaign}
//                       setCurrentCampaign={setCurrentCampaign}
//                       onSaveCampaign={saveCampaign}
//                       onNavigateToHistory={() => setCurrentView('history')}
//                       mockCustomers={mockCustomers}
//                     />
//                   ) : (
//                     <CampaignHistoryView 
//                       campaigns={campaigns}
//                       onNavigateToCreate={() => setCurrentView('create')}
//                     />
//                   )}
//                 </main>
//               </div>
//             ) : (
//               <Navigate to="/login" replace />
//             )
//           }
//         />
//       </Routes>
//     </div>
//   );
// };

// export default App;


// import React, { useState, useEffect } from 'react';
// import { Routes, Route, Navigate } from 'react-router-dom';
// import Navigation from './components/Navigation';
// import CreateCampaignView from './components/CreateCampaignView';
// import CampaignHistoryView from './components/CampaignHistoryView';
// import { mockCustomers } from './data/mockData';
// import { calculateAudienceSize } from './utils/audienceCalculator';
// import Login from './Login';
// import { getAuth, onAuthStateChanged } from 'firebase/auth';

// const App = () => {
//   const [currentView, setCurrentView] = useState('create');
//   const [campaigns, setCampaigns] = useState([]);
//   const [currentCampaign, setCurrentCampaign] = useState({
//     name: '',
//     description: '',
//     rules: [{ field: 'spend', operator: 'greater_than', value: '', logic: 'AND' }],
//     audienceSize: 0
//   });

//   const [user, setUser] = useState(null);
//   const [loadingAuth, setLoadingAuth] = useState(true);

//   // Firebase auth listener
//   useEffect(() => {
//     const auth = getAuth();
//     const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
//       setUser(firebaseUser);
//       setLoadingAuth(false);
//     });
//     return () => unsubscribe();
//   }, []);

//   // Update audience size when rules change
//   useEffect(() => {
//     const size = calculateAudienceSize(currentCampaign.rules, mockCustomers);
//     setCurrentCampaign(prev => ({ ...prev, audienceSize: size }));
//   }, [currentCampaign.rules]);

//   const saveCampaign = async () => {
//     if (!currentCampaign.name.trim()) {
//       alert('Please enter a campaign name');
//       return;
//     }

//     try {
//       const response = await fetch('http://localhost:5000/api/campaigns', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           name: currentCampaign.name,
//           description: currentCampaign.description,
//           audienceSize: currentCampaign.audienceSize,
//           rules: currentCampaign.rules.map(rule => ({
//             field: rule.field === 'spend' ? 'totalSpend' :
//                    rule.field === 'visits' ? 'visitCount' : 'daysSinceLastActive',
//             operator: rule.operator,
//             value: parseFloat(rule.value),
//             logic: rule.logic
//           }))
//         })
//       });

//       if (!response.ok) throw new Error('Failed to save campaign');

//       const audienceSize = currentCampaign.audienceSize || 1;
//       const sent = Math.floor(Math.random() * audienceSize);
//       const failed = Math.floor(Math.random() * (audienceSize * 0.1));

//       const newCampaign = {
//         id: Date.now(),
//         ...currentCampaign,
//         created: new Date().toISOString(),
//         status: 'Active',
//         sent,
//         failed,
//         successRate: sent > 0 ? (((sent - failed) / sent) * 100).toFixed(2) : '0.00'
//       };

//       setCampaigns(prev => [newCampaign, ...prev]);
//       setCurrentView('history');

//       setCurrentCampaign({
//         name: '',
//         description: '',
//         rules: [{ field: 'spend', operator: 'greater_than', value: '', logic: 'AND' }],
//         audienceSize: 0
//       });

//     } catch (error) {
//       console.error('Error saving campaign:', error);
//       alert('There was an error saving the campaign. Please try again.');
//     }
//   };

//   if (loadingAuth) return <div className="p-10 text-center">Loading auth...</div>;

//   return (
//     <Routes>
//        <Route path="/" element={<Login />} />
//       <Route path="/login" element={<Login />} />
//       <Route path="/camp" element={
//         user ? (
//           <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
//             <Navigation
//               currentView={currentView}
//               setCurrentView={setCurrentView}
//               campaignCount={campaigns.length}
//             />
//             <main className="py-8">
//               {currentView === 'create' ? (
//                 <CreateCampaignView
//                   currentCampaign={currentCampaign}
//                   setCurrentCampaign={setCurrentCampaign}
//                   onSaveCampaign={saveCampaign}
//                   onNavigateToHistory={() => setCurrentView('history')}
//                   mockCustomers={mockCustomers}
//                 />
//               ) : (
//                 <CampaignHistoryView
//                   campaigns={campaigns}
//                   onNavigateToCreate={() => setCurrentView('create')}
//                 />
//               )}
//             </main>
//           </div>
//         ) : (
//           <Navigate to="/login" replace />
//         )
//       } />
//     </Routes>
//   );
// };

// export default App;


import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navigation from './components/Navigation';
import CreateCampaignView from './components/CreateCampaignView';
import CampaignHistoryView from './components/CampaignHistoryView';
import { mockCustomers } from './data/mockData';
import { calculateAudienceSize } from './utils/audienceCalculator';
import Login from './Login';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const App = () => {
  const [currentView, setCurrentView] = useState('create');
  const [campaigns, setCampaigns] = useState([]);
  const [loadingCampaigns, setLoadingCampaigns] = useState(false);
  const [currentCampaign, setCurrentCampaign] = useState({
    name: '',
    description: '',
    rules: [{ field: 'spend', operator: 'greater_than', value: '', logic: 'AND' }],
    audienceSize: 0
  });

  const [user, setUser] = useState(null);
  const [loadingAuth, setLoadingAuth] = useState(true);

  // Firebase auth listener
  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      setLoadingAuth(false);
    });
    return () => unsubscribe();
  }, []);

  // Fetch campaigns from backend
  const fetchCampaigns = async () => {
    setLoadingCampaigns(true);
    try {
      console.log('Fetching campaigns from backend...');
      const response = await fetch('https://crm-backend-1rrr.onrender.com/api/campaigns?limit=100');
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const result = await response.json();
      console.log('Backend response:', result);
      
      if (result.success && result.data) {
        console.log(`Fetched ${result.data.length} campaigns from backend`);
        setCampaigns(result.data);
      } else {
        console.error('Backend returned no data or failed:', result);
        setCampaigns([]);
      }
    } catch (error) {
      console.error('Error fetching campaigns:', error);
      setCampaigns([]);
    } finally {
      setLoadingCampaigns(false);
    }
  };

  // Fetch campaigns when user is authenticated and app loads
  useEffect(() => {
    if (user) {
      fetchCampaigns();
    }
  }, [user]);

  // Fetch campaigns when switching to history view
  useEffect(() => {
    if (currentView === 'history' && user) {
      fetchCampaigns();
    }
  }, [currentView, user]);

  // Update audience size when rules change
  useEffect(() => {
    const size = calculateAudienceSize(currentCampaign.rules, mockCustomers);
    setCurrentCampaign(prev => ({ ...prev, audienceSize: size }));
  }, [currentCampaign.rules]);

  // const saveCampaign = async () => {
  //   if (!currentCampaign.name.trim()) {
  //     alert('Please enter a campaign name');
  //     return;
  //   }

  //   try {
  //     const response = await fetch('http://localhost:5000/api/campaigns', {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify({
  //         name: currentCampaign.name,
  //         description: currentCampaign.description,
  //         audienceSize: currentCampaign.audienceSize,
  //         rules: currentCampaign.rules.map(rule => ({
  //           field: rule.field === 'spend' ? 'totalSpend' :
  //                  rule.field === 'visits' ? 'visitCount' : 'daysSinceLastActive',
  //           operator: rule.operator,
  //           value: parseFloat(rule.value),
  //           logic: rule.logic
  //         }))
  //       })
  //     });

  //     if (!response.ok) throw new Error('Failed to save campaign');

  //     // After saving, fetch campaigns again to get the updated list
  //     await fetchCampaigns();
  //     setCurrentView('history');

  //     setCurrentCampaign({
  //       name: '',
  //       description: '',
  //       rules: [{ field: 'spend', operator: 'greater_than', value: '', logic: 'AND' }],
  //       audienceSize: 0
  //     });

  //   } catch (error) {
  //     console.error('Error saving campaign:', error);
  //     alert('There was an error saving the campaign. Please try again.');
  //   }
  // };

  const saveCampaign = async () => {
  if (!currentCampaign.name.trim()) {
    throw new Error('Please enter a campaign name');
  }

  try {
    console.log('Saving campaign:', currentCampaign);
    
    const response = await fetch('https://crm-backend-1rrr.onrender.com/api/campaigns', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: currentCampaign.name,
        description: currentCampaign.description,
        // Removed audienceSize - backend calculates this from rules
        rules: currentCampaign.rules.map(rule => ({
          field: rule.field === 'spend' ? 'totalSpend' :
                 rule.field === 'visits' ? 'visitCount' : 'daysSinceLastActive',
          operator: rule.operator,
          value: parseFloat(rule.value),
          logic: rule.logic
        }))
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Failed to save campaign (${response.status}): ${errorText}`);
    }

    const result = await response.json();
    console.log('Campaign saved successfully:', result);


    await fetchCampaigns();
    setCurrentView('history');

    setCurrentCampaign({
      name: '',
      description: '',
      rules: [{ field: 'spend', operator: 'greater_than', value: '', logic: 'AND' }],
      audienceSize: 0
    });

  } catch (error) {
    console.error('Error saving campaign:', error);
    
    if (error.message.includes('Failed to fetch') || error.name === 'TypeError') {
      throw new Error('Cannot connect to server. Please make sure the backend server is running on port 5000.');
    }
    

    throw error;
  }
};

  if (loadingAuth) return <div className="p-10 text-center">Loading auth...</div>;

  return (
    <Routes>
       <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/camp" element={
        user ? (
          <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
            <Navigation
              currentView={currentView}
              setCurrentView={setCurrentView}
              campaignCount={campaigns.length}
            />
            <main className="py-8">
              {currentView === 'create' ? (
                <CreateCampaignView
                  currentCampaign={currentCampaign}
                  setCurrentCampaign={setCurrentCampaign}
                  onSaveCampaign={saveCampaign}
                  onNavigateToHistory={() => setCurrentView('history')}
                  mockCustomers={mockCustomers}
                />
              ) : (
                <CampaignHistoryView
                  campaigns={campaigns}
                  onNavigateToCreate={() => setCurrentView('create')}
                  loading={loadingCampaigns}
                />
              )}
            </main>
          </div>
        ) : (
          <Navigate to="/login" replace />
        )
      } />
    </Routes>
  );
};

export default App;


