import React from 'react';
import { Eye, Plus } from 'lucide-react';
import RuleItem from './RuleItem';

const RuleBuilder = ({ rules, onUpdateRules }) => {
  const addRule = () => {
    const newRules = [...rules, { field: 'spend', operator: 'greater_than', value: '', logic: 'AND' }];
    onUpdateRules(newRules);
  };

  const removeRule = (index) => {
    const newRules = rules.filter((_, i) => i !== index);
    onUpdateRules(newRules);
  };

  const updateRule = (index, field, value) => {
    const newRules = rules.map((rule, i) => 
      i === index ? { ...rule, [field]: value } : rule
    );
    onUpdateRules(newRules);
  };

  return (
    <div>
      <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
        <Eye className="text-purple-600" />
        Audience Rules
      </h3>
      
      <div className="space-y-4">
        {rules.map((rule, index) => (
          <RuleItem 
            key={index}
            rule={rule}
            index={index}
            showLogic={index > 0}
            canRemove={rules.length > 1}
            onUpdate={updateRule}
            onRemove={removeRule}
          />
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
  );
};

export default RuleBuilder;