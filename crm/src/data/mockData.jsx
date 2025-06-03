export const mockCustomers = [
  { id: 1, spend: 15000, visits: 2, daysSinceLastActive: 30 },
  { id: 2, spend: 8000, visits: 5, daysSinceLastActive: 10 },
  { id: 3, spend: 25000, visits: 1,daysSinceLastActive: 120 },
  { id: 4, spend: 5000, visits: 8, daysSinceLastActive: 5 },
  { id: 5, spend: 12000, visits: 2, daysSinceLastActive: 45 },
  { id: 6, spend: 30000, visits: 0, daysSinceLastActive: 200 },
  { id: 7, spend: 7500, visits: 6, daysSinceLastActive: 7 },
  { id: 8, spend: 18000, visits: 3, daysSinceLastActive: 95 },
  { id: 9, spend: 3000, visits: 10, daysSinceLastActive: 2 },
  { id: 10, spend: 22000, visits: 1, daysSinceLastActive: 150 }
];

// data/ruleOptions.js
export const fieldOptions = [
  { value: 'spend', label: 'Total Spend (INR)', type: 'number' },
  { value: 'visits', label: 'Visit Count', type: 'number' },
  { value: 'lastActive', label: 'Days Since Last Active', type: 'number' }
];

export const operatorOptions = [
  { value: 'greater_than', label: '>' },
  { value: 'less_than', label: '<' },
  { value: 'equal_to', label: '=' },
  { value: 'greater_equal', label: '>=' },
  { value: 'less_equal', label: '<=' }
];
