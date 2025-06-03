// import React, { useState, useEffect } from 'react';
// import { User, Plus, Search, Calendar, Phone, Mail, IndianRupee, Eye } from 'lucide-react';

// const CustomerManagementUI = () => {
//   const [user, setUser] = useState(null);
//   const [customers, setCustomers] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [showAddForm, setShowAddForm] = useState(false);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [newCustomer, setNewCustomer] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     totalSpend: 0,
//     visitCount: 0
//   });

//   // Sample customers data for demo
//   const sampleCustomers = [
//     {
//       _id: '1',
//       name: 'Rahul Sharma',
//       email: 'rahul@example.com',
//       phone: '9876543210',
//       totalSpend: 25000,
//       visitCount: 8,
//       lastVisit: new Date('2024-05-20'),
//       createdAt: new Date('2024-01-15'),
//       daysSinceLastActive: 12
//     },
//     {
//       _id: '2',
//       name: 'Priya Singh',
//       email: 'priya@example.com',
//       phone: '9876543211',
//       totalSpend: 5000,
//       visitCount: 2,
//       lastVisit: new Date('2024-03-10'),
//       createdAt: new Date('2024-02-01'),
//       daysSinceLastActive: 83
//     },
//     {
//       _id: '3',
//       name: 'Amit Kumar',
//       email: 'amit@example.com',
//       phone: '9876543212',
//       totalSpend: 45000,
//       visitCount: 15,
//       lastVisit: new Date('2024-05-25'),
//       createdAt: new Date('2023-12-10'),
//       daysSinceLastActive: 7
//     }
//   ];

//   useEffect(() => {
//     // Simulate loading customers
//     setCustomers(sampleCustomers);
//   }, []);

//   // Google OAuth simulation
//   const handleGoogleLogin = () => {
//     setLoading(true);
//     // Simulate Google OAuth process
//     setTimeout(() => {
//       setUser({
//         name: 'John Doe',
//         email: 'john.doe@example.com',
//         picture: 'https://via.placeholder.com/40'
//       });
//       setLoading(false);
//     }, 1000);
//   };

//   const handleLogout = () => {
//     setUser(null);
//   };

//   const handleAddCustomer = (e) => {
//     e.preventDefault();
//     const customer = {
//       ...newCustomer,
//       _id: Date.now().toString(),
//       lastVisit: new Date(),
//       createdAt: new Date(),
//       daysSinceLastActive: 0
//     };
//     setCustomers([customer, ...customers]);
//     setNewCustomer({
//       name: '',
//       email: '',
//       phone: '',
//       totalSpend: 0,
//       visitCount: 0
//     });
//     setShowAddForm(false);
//   };

//   const filteredCustomers = customers.filter(customer =>
//     customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     customer.email.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const formatCurrency = (amount) => {
//     return new Intl.NumberFormat('en-IN', {
//       style: 'currency',
//       currency: 'INR'
//     }).format(amount);
//   };

//   const formatDate = (date) => {
//     return new Date(date).toLocaleDateString('en-IN');
//   };

//   if (!user) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
//         <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full mx-4">
//           <div className="text-center mb-8">
//             <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
//               <User className="w-8 h-8 text-white" />
//             </div>
//             <h1 className="text-2xl font-bold text-gray-900 mb-2">Customer Management</h1>
//             <p className="text-gray-600">Sign in to manage your customers</p>
//           </div>
          
//           <button
//             onClick={handleGoogleLogin}
//             disabled={loading}
//             className="w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-50 flex items-center justify-center space-x-3 transition-colors disabled:opacity-50"
//           >
//             {loading ? (
//               <div className="w-5 h-5 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin"></div>
//             ) : (
//               <>
//                 <svg className="w-5 h-5" viewBox="0 0 24 24">
//                   <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
//                   <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
//                   <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
//                   <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
//                 </svg>
//                 <span>Continue with Google</span>
//               </>
//             )}
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Header */}
//       <header className="bg-white shadow-sm border-b">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center py-4">
//             <div className="flex items-center space-x-3">
//               <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
//                 <User className="w-5 h-5 text-white" />
//               </div>
//               <h1 className="text-xl font-semibold text-gray-900">Customer Management</h1>
//             </div>
            
//             <div className="flex items-center space-x-4">
//               <div className="flex items-center space-x-2">
//                 <img
//                   src={user.picture}
//                   alt={user.name}
//                   className="w-8 h-8 rounded-full"
//                 />
//                 <span className="text-sm font-medium text-gray-700">{user.name}</span>
//               </div>
//               <button
//                 onClick={handleLogout}
//                 className="text-sm text-gray-500 hover:text-gray-700 px-3 py-1 rounded-md hover:bg-gray-100"
//               >
//                 Logout
//               </button>
//             </div>
//           </div>
//         </div>
//       </header>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         {/* Actions Bar */}
//         <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 space-y-4 sm:space-y-0">
//           <div className="relative">
//             <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
//             <input
//               type="text"
//               placeholder="Search customers..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
//             />
//           </div>
          
//           <button
//             onClick={() => setShowAddForm(true)}
//             className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 flex items-center space-x-2 transition-colors"
//           >
//             <Plus className="w-4 h-4" />
//             <span>Add Customer</span>
//           </button>
//         </div>

//         {/* Add Customer Form */}
//         {showAddForm && (
//           <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
//             <h2 className="text-lg font-semibold text-gray-900 mb-4">Add New Customer</h2>
//             <form onSubmit={handleAddCustomer} className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
//                 <input
//                   type="text"
//                   required
//                   value={newCustomer.name}
//                   onChange={(e) => setNewCustomer({...newCustomer, name: e.target.value})}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
//                 />
//               </div>
              
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
//                 <input
//                   type="email"
//                   required
//                   value={newCustomer.email}
//                   onChange={(e) => setNewCustomer({...newCustomer, email: e.target.value})}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
//                 />
//               </div>
              
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
//                 <input
//                   type="tel"
//                   required
//                   pattern="[0-9]{10}"
//                   value={newCustomer.phone}
//                   onChange={(e) => setNewCustomer({...newCustomer, phone: e.target.value})}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
//                 />
//               </div>
              
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Total Spend (₹)</label>
//                 <input
//                   type="number"
//                   min="0"
//                   value={newCustomer.totalSpend}
//                   onChange={(e) => setNewCustomer({...newCustomer, totalSpend: parseFloat(e.target.value) || 0})}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
//                 />
//               </div>
              
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Visit Count</label>
//                 <input
//                   type="number"
//                   min="0"
//                   value={newCustomer.visitCount}
//                   onChange={(e) => setNewCustomer({...newCustomer, visitCount: parseInt(e.target.value) || 0})}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
//                 />
//               </div>
              
//               <div className="md:col-span-2 flex space-x-3">
//                 <button
//                   type="submit"
//                   className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors"
//                 >
//                   Add Customer
//                 </button>
//                 <button
//                   type="button"
//                   onClick={() => setShowAddForm(false)}
//                   className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400 transition-colors"
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </form>
//           </div>
//         )}

//         {/* Customer List */}
//         <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
//           <div className="px-6 py-4 border-b border-gray-200">
//             <h2 className="text-lg font-semibold text-gray-900">
//               Customers ({filteredCustomers.length})
//             </h2>
//           </div>
          
//           <div className="overflow-x-auto">
//             <table className="min-w-full divide-y divide-gray-200">
//               <thead className="bg-gray-50">
//                 <tr>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     Customer
//                   </th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     Contact
//                   </th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     Spending
//                   </th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     Activity
//                   </th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     Status
//                   </th>
//                 </tr>
//               </thead>
//               <tbody className="bg-white divide-y divide-gray-200">
//                 {filteredCustomers.map((customer) => (
//                   <tr key={customer._id} className="hover:bg-gray-50">
//                     <td className="px-6 py-4 whitespace-nowrap">
//                       <div className="flex items-center">
//                         <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
//                           <User className="w-5 h-5 text-indigo-600" />
//                         </div>
//                         <div className="ml-4">
//                           <div className="text-sm font-medium text-gray-900">{customer.name}</div>
//                           <div className="text-sm text-gray-500">ID: {customer._id}</div>
//                         </div>
//                       </div>
//                     </td>
                    
//                     <td className="px-6 py-4 whitespace-nowrap">
//                       <div className="text-sm text-gray-900 flex items-center space-x-1">
//                         <Mail className="w-4 h-4 text-gray-400" />
//                         <span>{customer.email}</span>
//                       </div>
//                       <div className="text-sm text-gray-500 flex items-center space-x-1">
//                         <Phone className="w-4 h-4 text-gray-400" />
//                         <span>{customer.phone}</span>
//                       </div>
//                     </td>
                    
//                     <td className="px-6 py-4 whitespace-nowrap">
//                       <div className="text-sm font-medium text-gray-900 flex items-center space-x-1">
//                         <IndianRupee className="w-4 h-4 text-green-600" />
//                         <span>{formatCurrency(customer.totalSpend)}</span>
//                       </div>
//                       <div className="text-sm text-gray-500 flex items-center space-x-1">
//                         <Eye className="w-4 h-4 text-gray-400" />
//                         <span>{customer.visitCount} visits</span>
//                       </div>
//                     </td>
                    
//                     <td className="px-6 py-4 whitespace-nowrap">
//                       <div className="text-sm text-gray-900 flex items-center space-x-1">
//                         <Calendar className="w-4 h-4 text-gray-400" />
//                         <span>{formatDate(customer.lastVisit)}</span>
//                       </div>
//                       <div className="text-sm text-gray-500">
//                         {customer.daysSinceLastActive} days ago
//                       </div>
//                     </td>
                    
//                     <td className="px-6 py-4 whitespace-nowrap">
//                       <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
//                         customer.daysSinceLastActive <= 7 
//                           ? 'bg-green-100 text-green-800' 
//                           : customer.daysSinceLastActive <= 30 
//                           ? 'bg-yellow-100 text-yellow-800' 
//                           : 'bg-red-100 text-red-800'
//                       }`}>
//                         {customer.daysSinceLastActive <= 7 ? 'Active' : 
//                          customer.daysSinceLastActive <= 30 ? 'Inactive' : 'Long Inactive'}
//                       </span>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
          
//           {filteredCustomers.length === 0 && (
//             <div className="text-center py-12">
//               <User className="mx-auto h-12 w-12 text-gray-400" />
//               <h3 className="mt-2 text-sm font-medium text-gray-900">No customers found</h3>
//               <p className="mt-1 text-sm text-gray-500">
//                 {searchTerm ? 'Try adjusting your search terms.' : 'Get started by adding a new customer.'}
//               </p>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CustomerManagementUI;



// import React, { useState, useEffect } from 'react';
// import { User, Plus, Search, Calendar, Phone, Mail, IndianRupee, Eye, Edit2, Trash2, Check, X } from 'lucide-react';

// // Firebase config and imports (kept as is for auth)
// import { initializeApp } from "firebase/app";
// import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyAS7B_BCL2tpUH9xJNWS_Ko46T53_n_fmg",
//   authDomain: "mycrm-1cf79.firebaseapp.com",
//   projectId: "mycrm-1cf79",
//   storageBucket: "mycrm-1cf79.appspot.com",
//   messagingSenderId: "1017311535029",
//   appId: "1:1017311535029:web:d563d3630ab29210abc3fc",
//   measurementId: "G-0W2YCMHG8V",
// };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

// const CustomerManagementUI = () => {
//   const [user, setUser] = useState(null);
//   const [customers, setCustomers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [showAddForm, setShowAddForm] = useState(false);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [newCustomer, setNewCustomer] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     totalSpend: 0,
//     visitCount: 0
//   });

//   // Track editing customer ID and form data for editing
//   const [editingCustomerId, setEditingCustomerId] = useState(null);
//   const [editCustomerData, setEditCustomerData] = useState({});

//   // Sample customers data for demo
//   const sampleCustomers = [
//     {
//       _id: '1',
//       name: 'Rahul Sharma',
//       email: 'rahul@example.com',
//       phone: '9876543210',
//       totalSpend: 25000,
//       visitCount: 8,
//       lastVisit: new Date('2024-05-20'),
//       createdAt: new Date('2024-01-15'),
//       daysSinceLastActive: 12
//     },
//     {
//       _id: '2',
//       name: 'Priya Singh',
//       email: 'priya@example.com',
//       phone: '9876543211',
//       totalSpend: 5000,
//       visitCount: 2,
//       lastVisit: new Date('2024-03-10'),
//       createdAt: new Date('2024-02-01'),
//       daysSinceLastActive: 83
//     },
//     {
//       _id: '3',
//       name: 'Amit Kumar',
//       email: 'amit@example.com',
//       phone: '9876543212',
//       totalSpend: 45000,
//       visitCount: 15,
//       lastVisit: new Date('2024-05-25'),
//       createdAt: new Date('2023-12-10'),
//       daysSinceLastActive: 7
//     }
//   ];

//   // Check auth status on mount
//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
//       if (firebaseUser) {
//         setUser({
//           uid: firebaseUser.uid,
//           name: firebaseUser.displayName || firebaseUser.email,
//           email: firebaseUser.email,
//           picture: firebaseUser.photoURL || 'https://via.placeholder.com/40'
//         });
//         fetchCustomers();
//       } else {
//         setUser(null);
//         setCustomers([]);
//       }
//       setLoading(false);
//     });
//     return () => unsubscribe();
//   }, []);

//   const fetchCustomers = async () => {
//     try {
//       // For demo, load sample customers
//       setCustomers(sampleCustomers);
//     } catch (error) {
//       console.error('Error fetching customers:', error);
//     }
//   };

//   const handleGoogleLogin = async () => {
//     try {
//       setLoading(true);
//       const provider = new GoogleAuthProvider();
//       await signInWithPopup(auth, provider);
//     } catch (error) {
//       console.error('Login failed:', error);
//       alert('Login failed. Please try again.');
//       setLoading(false);
//     }
//   };

//   const handleLogout = async () => {
//     try {
//       await signOut(auth);
//     } catch (error) {
//       console.error('Logout failed:', error);
//     }
//   };

//   // Add new customer
//   const handleAddCustomer = () => {
//     // Validation
//     if (!newCustomer.name || !newCustomer.email || !newCustomer.phone) {
//       alert('Please fill in all required fields');
//       return;
//     }
//     if (!/^[0-9]{10}$/.test(newCustomer.phone)) {
//       alert('Please enter a valid 10-digit phone number');
//       return;
//     }
//     if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(newCustomer.email)) {
//       alert('Please enter a valid email address');
//       return;
//     }
//     // Create customer object
//     const customer = {
//       ...newCustomer,
//       _id: Date.now().toString(),
//       lastVisit: new Date(),
//       createdAt: new Date(),
//       daysSinceLastActive: 0
//     };
//     setCustomers([customer, ...customers]);
//     setNewCustomer({
//       name: '',
//       email: '',
//       phone: '',
//       totalSpend: 0,
//       visitCount: 0
//     });
//     setShowAddForm(false);
//   };

//   // Delete customer by id
//   const handleDeleteCustomer = (id) => {
//     if (window.confirm('Are you sure you want to delete this customer?')) {
//       setCustomers(customers.filter(c => c._id !== id));
//       if (editingCustomerId === id) {
//         setEditingCustomerId(null);
//         setEditCustomerData({});
//       }
//     }
//   };

//   // Start editing a customer
//   const handleEditClick = (customer) => {
//     setEditingCustomerId(customer._id);
//     setEditCustomerData({
//       name: customer.name,
//       email: customer.email,
//       phone: customer.phone,
//       totalSpend: customer.totalSpend,
//       visitCount: customer.visitCount
//     });
//   };

//   // Cancel editing
//   const handleCancelEdit = () => {
//     setEditingCustomerId(null);
//     setEditCustomerData({});
//   };

//   // Save edited customer
//   const handleSaveEdit = (id) => {
//     // Validate
//     if (!editCustomerData.name || !editCustomerData.email || !editCustomerData.phone) {
//       alert('Please fill in all required fields');
//       return;
//     }
//     if (!/^[0-9]{10}$/.test(editCustomerData.phone)) {
//       alert('Please enter a valid 10-digit phone number');
//       return;
//     }
//     if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(editCustomerData.email)) {
//       alert('Please enter a valid email address');
//       return;
//     }
//     // Update customers list
//     setCustomers(customers.map(c => {
//       if (c._id === id) {
//         return {
//           ...c,
//           ...editCustomerData
//         };
//       }
//       return c;
//     }));
//     setEditingCustomerId(null);
//     setEditCustomerData({});
//   };

//   const filteredCustomers = customers.filter(customer =>
//     customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     customer.email.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const formatCurrency = (amount) => {
//     return new Intl.NumberFormat('en-IN', {
//       style: 'currency',
//       currency: 'INR'
//     }).format(amount);
//   };

//   const formatDate = (date) => {
//     return new Date(date).toLocaleDateString('en-IN');
//   };

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
//         <div className="text-center">
//           <div className="w-16 h-16 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
//           <p className="text-gray-600">Loading...</p>
//         </div>
//       </div>
//     );
//   }

//   if (!user) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
//         <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full mx-4">
//           <div className="text-center mb-8">
//             <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
//               <User className="w-8 h-8 text-white" />
//             </div>
//             <h1 className="text-2xl font-bold mb-2">Welcome to CRM</h1>
//             <p className="text-gray-500">Please log in to continue</p>
//           </div>
//           <button
//             onClick={handleGoogleLogin}
//             className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg flex items-center justify-center gap-2 transition"
//           >
//             <img src="/google.svg" alt="Google" className="w-6 h-6" />
//             Continue with Google
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
//       <div className="max-w-7xl mx-auto bg-white rounded-xl shadow p-6">
//         <div className="flex justify-between items-center mb-6">
//           <h2 className="text-3xl font-semibold text-indigo-700">Customers</h2>
//           <button
//             onClick={() => setShowAddForm(!showAddForm)}
//             className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 flex items-center gap-2"
//           >
//             <Plus className="w-5 h-5" /> Add Customer
//           </button>
//         </div>

//         {showAddForm && (
//           <div className="mb-6 p-4 border border-indigo-300 rounded-lg bg-indigo-50">
//             <h3 className="text-xl font-semibold mb-4">Add New Customer</h3>
//             <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
//               <input
//                 type="text"
//                 placeholder="Name"
//                 value={newCustomer.name}
//                 onChange={(e) => setNewCustomer({ ...newCustomer, name: e.target.value })}
//                 className="p-2 border border-gray-300 rounded"
//               />
//               <input
//                 type="email"
//                 placeholder="Email"
//                 value={newCustomer.email}
//                 onChange={(e) => setNewCustomer({ ...newCustomer, email: e.target.value })}
//                 className="p-2 border border-gray-300 rounded"
//               />
//               <input
//                 type="text"
//                 placeholder="Phone"
//                 value={newCustomer.phone}
//                 onChange={(e) => setNewCustomer({ ...newCustomer, phone: e.target.value })}
//                 className="p-2 border border-gray-300 rounded"
//               />
//               <input
//                 type="number"
//                 placeholder="Total Spend"
//                 value={newCustomer.totalSpend}
//                 onChange={(e) => setNewCustomer({ ...newCustomer, totalSpend: Number(e.target.value) })}
//                 className="p-2 border border-gray-300 rounded"
//               />
//               <input
//                 type="number"
//                 placeholder="Visit Count"
//                 value={newCustomer.visitCount}
//                 onChange={(e) => setNewCustomer({ ...newCustomer, visitCount: Number(e.target.value) })}
//                 className="p-2 border border-gray-300 rounded"
//               />
//             </div>
//             <div className="mt-4 flex gap-3">
//               <button
//                 onClick={handleAddCustomer}
//                 className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
//               >
//                 Add
//               </button>
//               <button
//                 onClick={() => setShowAddForm(false)}
//                 className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         )}

//         <input
//           type="text"
//           placeholder="Search customers by name or email..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           className="mb-4 p-2 border border-gray-300 rounded w-full"
//         />

//         {filteredCustomers.length === 0 ? (
//           <p className="text-center text-gray-500 mt-10">No customers found</p>
//         ) : (
//           <div className="overflow-x-auto">
//             <table className="w-full border-collapse border border-gray-300">
//               <thead className="bg-indigo-100 text-indigo-800">
//                 <tr>
//                   <th className="border border-gray-300 p-2">Name</th>
//                   <th className="border border-gray-300 p-2">Email</th>
//                   <th className="border border-gray-300 p-2">Phone</th>
//                   <th className="border border-gray-300 p-2">Total Spend</th>
//                   <th className="border border-gray-300 p-2">Visit Count</th>
//                   <th className="border border-gray-300 p-2">Last Visit</th>
//                   <th className="border border-gray-300 p-2">Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {filteredCustomers.map((customer) => (
//                   <tr key={customer._id} className="hover:bg-indigo-50">
//                     {/* Editable Row */}
//                     {editingCustomerId === customer._id ? (
//                       <>
//                         <td className="border border-gray-300 p-2">
//                           <input
//                             type="text"
//                             value={editCustomerData.name}
//                             onChange={(e) => setEditCustomerData({ ...editCustomerData, name: e.target.value })}
//                             className="w-full p-1 border border-gray-300 rounded"
//                           />
//                         </td>
//                         <td className="border border-gray-300 p-2">
//                           <input
//                             type="email"
//                             value={editCustomerData.email}
//                             onChange={(e) => setEditCustomerData({ ...editCustomerData, email: e.target.value })}
//                             className="w-full p-1 border border-gray-300 rounded"
//                           />
//                         </td>
//                         <td className="border border-gray-300 p-2">
//                           <input
//                             type="text"
//                             value={editCustomerData.phone}
//                             onChange={(e) => setEditCustomerData({ ...editCustomerData, phone: e.target.value })}
//                             className="w-full p-1 border border-gray-300 rounded"
//                           />
//                         </td>
//                         <td className="border border-gray-300 p-2">
//                           <input
//                             type="number"
//                             value={editCustomerData.totalSpend}
//                             onChange={(e) => setEditCustomerData({ ...editCustomerData, totalSpend: Number(e.target.value) })}
//                             className="w-full p-1 border border-gray-300 rounded"
//                           />
//                         </td>
//                         <td className="border border-gray-300 p-2">
//                           <input
//                             type="number"
//                             value={editCustomerData.visitCount}
//                             onChange={(e) => setEditCustomerData({ ...editCustomerData, visitCount: Number(e.target.value) })}
//                             className="w-full p-1 border border-gray-300 rounded"
//                           />
//                         </td>
//                         <td className="border border-gray-300 p-2">{formatDate(customer.lastVisit)}</td>
//                         <td className="border border-gray-300 p-2 flex gap-2 justify-center">
//                           <button
//                             onClick={() => handleSaveEdit(customer._id)}
//                             className="text-green-600 hover:text-green-800"
//                             title="Save"
//                           >
//                             <Check />
//                           </button>
//                           <button
//                             onClick={handleCancelEdit}
//                             className="text-red-600 hover:text-red-800"
//                             title="Cancel"
//                           >
//                             <X />
//                           </button>
//                         </td>
//                       </>
//                     ) : (
//                       <>
//                         <td className="border border-gray-300 p-2">{customer.name}</td>
//                         <td className="border border-gray-300 p-2">{customer.email}</td>
//                         <td className="border border-gray-300 p-2">{customer.phone}</td>
//                         <td className="border border-gray-300 p-2">{formatCurrency(customer.totalSpend)}</td>
//                         <td className="border border-gray-300 p-2">{customer.visitCount}</td>
//                         <td className="border border-gray-300 p-2">{formatDate(customer.lastVisit)}</td>
//                         <td className="border border-gray-300 p-2 flex gap-2 justify-center">
//                           <button
//                             onClick={() => handleEditClick(customer)}
//                             className="text-indigo-600 hover:text-indigo-800"
//                             title="Edit"
//                           >
//                             <Edit2 />
//                           </button>
//                           <button
//                             onClick={() => handleDeleteCustomer(customer._id)}
//                             className="text-red-600 hover:text-red-800"
//                             title="Delete"
//                           >
//                             <Trash2 />
//                           </button>
//                         </td>
//                       </>
//                     )}
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         )}

//         <button
//           onClick={handleLogout}
//           className="mt-6 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
//         >
//           Logout
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CustomerManagementUI;


// import React, { useState, useEffect } from 'react';
// import { User } from 'lucide-react';
// import { initializeApp } from "firebase/app";
// import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from "firebase/auth";

// // Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAS7B_BCL2tpUH9xJNWS_Ko46T53_n_fmg",
//   authDomain: "mycrm-1cf79.firebaseapp.com",
//   projectId: "mycrm-1cf79",
//   storageBucket: "mycrm-1cf79.appspot.com",
//   messagingSenderId: "1017311535029",
//   appId: "1:1017311535029:web:d563d3630ab29210abc3fc",
//   measurementId: "G-0W2YCMHG8V",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

// const Login = () => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
//       if (firebaseUser) {
//         setUser({
//           uid: firebaseUser.uid,
//           name: firebaseUser.displayName || firebaseUser.email,
//           email: firebaseUser.email,
//           picture: firebaseUser.photoURL || 'https://via.placeholder.com/40'
//         });
//       } else {
//         setUser(null);
//       }
//       setLoading(false);
//     });
//     return () => unsubscribe();
//   }, []);

//   const handleGoogleLogin = async () => {
//     try {
//       setLoading(true);
//       const provider = new GoogleAuthProvider();
//       await signInWithPopup(auth, provider);
//     } catch (error) {
//       console.error('Login failed:', error);
//       alert('Login failed. Please try again.');
//       setLoading(false);
//     }
//   };

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
//         <div className="text-center">
//           <div className="w-16 h-16 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
//           <p className="text-gray-600">Loading...</p>
//         </div>
//       </div>
//     );
//   }

//   if (!user) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
//         <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full mx-4">
//           <div className="text-center mb-8">
//             <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
//               <User className="w-8 h-8 text-white" />
//             </div>
//             <h1 className="text-2xl font-bold mb-2">Welcome</h1>
//             <p className="text-gray-500">Please log in to continue</p>
//           </div>
//           <button
//             onClick={handleGoogleLogin}
//             className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg flex items-center justify-center gap-2 transition"
//           >
//             <img src="/google.svg" alt="Google" className="w-6 h-6" />
//             Continue with Google
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
//       <div className="text-center">
//         <h1 className="text-2xl font-bold text-indigo-700 mb-2">Hello, {user.name}!</h1>
//         <p className="text-gray-600">You are logged in.</p>
//       </div>
//     </div>
//   );
// };

// export default Login;


// import React, { useState, useEffect } from 'react';
// import { User } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';
// import { initializeApp } from "firebase/app";
// import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from "firebase/auth";

// // Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAS7B_BCL2tpUH9xJNWS_Ko46T53_n_fmg",
//   authDomain: "mycrm-1cf79.firebaseapp.com",
//   projectId: "mycrm-1cf79",
//   storageBucket: "mycrm-1cf79.appspot.com",
//   messagingSenderId: "1017311535029",
//   appId: "1:1017311535029:web:d563d3630ab29210abc3fc",
//   measurementId: "G-0W2YCMHG8V",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

// const Login = () => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate(); // 👈 Add this

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
//       if (firebaseUser) {
//         setUser({
//           uid: firebaseUser.uid,
//           name: firebaseUser.displayName || firebaseUser.email,
//           email: firebaseUser.email,
//           picture: firebaseUser.photoURL || 'https://via.placeholder.com/40'
//         });
//       } else {
//         setUser(null);
//       }
//       setLoading(false);
//     });
//     return () => unsubscribe();
//   }, []);

//   useEffect(() => {
//     if (user) {
//       const timer = setTimeout(() => {
//         navigate('/camp'); // 👈 Redirect to home (CreateCampaign)
//       }, 5000);
//       return () => clearTimeout(timer);
//     }
//   }, [user, navigate]);

//   const handleGoogleLogin = async () => {
//     try {
//       setLoading(true);
//       const provider = new GoogleAuthProvider();
//       await signInWithPopup(auth, provider);
//     } catch (error) {
//       console.error('Login failed:', error);
//       alert('Login failed. Please try again.');
//       setLoading(false);
//     }
//   };

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
//         <div className="text-center">
//           <div className="w-16 h-16 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
//           <p className="text-gray-600">Loading...</p>
//         </div>
//       </div>
//     );
//   }

//   if (!user) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
//         <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full mx-4">
//           <div className="text-center mb-8">
//             <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
//               <User className="w-8 h-8 text-white" />
//             </div>
//             <h1 className="text-2xl font-bold mb-2">Welcome</h1>
//             <p className="text-gray-500">Please log in to continue</p>
//           </div>
//           <button
//             onClick={handleGoogleLogin}
//             className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg flex items-center justify-center gap-2 transition"
//           >
// {/*             <img src="/google.svg" alt="Google" className="w-6 h-6" /> */}
//                      <svg className="w-5 h-5" viewBox="0 0 24 24">
//                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
//                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
//                   <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
//                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
//                 </svg>
//             Continue with Google
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
//       <div className="text-center">
//         <h1 className="text-2xl font-bold text-indigo-700 mb-2">Hello, {user.name}!</h1>
//         <p className="text-gray-600">Redirecting to Create Campaign...</p>
//       </div>
//     </div>
//   );
// };

// export default Login;





import React, { useState, useEffect } from 'react';
import { User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const Login = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); // 👈 Add this

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        setUser({
          uid: firebaseUser.uid,
          name: firebaseUser.displayName || firebaseUser.email,
          email: firebaseUser.email,
          picture: firebaseUser.photoURL || 'https://via.placeholder.com/40'
        });
      } else {
        setUser(null);
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (user) {
      const timer = setTimeout(() => {
        navigate('/camp'); // 👈 Redirect to home (CreateCampaign)
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [user, navigate]);

  const handleGoogleLogin = async () => {
    try {
      setLoading(true);
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error('Login failed:', error);
      alert('Login failed. Please try again.');
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full mx-4">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <User className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-2xl font-bold mb-2">Welcome</h1>
            <p className="text-gray-500">Please log in to continue</p>
          </div>
          <button
            onClick={handleGoogleLogin}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg flex items-center justify-center gap-2 transition"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Continue with Google
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-indigo-700 mb-2">Hello, {user.name}!</h1>
        <p className="text-gray-600">Redirecting to Create Campaign...</p>
      </div>
    </div>
  );
};

export default Login;
