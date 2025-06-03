import React from 'react';
import { Trash2 } from 'lucide-react';
import { fieldOptions, operatorOptions } from '../data/ruleOptions';

const RuleItem = ({ rule, index, showLogic, canRemove, onUpdate, onRemove }) => {
  return (
    <div className="bg-gray-50 p-4 rounded-lg border-2 border-dashed border-gray-300 hover:border-blue-400 transition-colors">
      <div className="flex items-center gap-4 flex-wrap">
        {showLogic && (
          <div className="flex items-center">
            <select
              value={rule.logic}
              onChange={(e) => onUpdate(index, 'logic', e.target.value)}
              className="px-3 py-2 bg-white border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:ring-2 focus:ring-blue-500"
            >
              <option value="AND">AND</option>
              <option value="OR">OR</option>
            </select>
          </div>
        )}
        
        <select
          value={rule.field}
          onChange={(e) => onUpdate(index, 'field', e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
        >
          {fieldOptions.map(option => (
            <option key={option.value} value={option.value}>{option.label}</option>
          ))}
        </select>

        <select
          value={rule.operator}
          onChange={(e) => onUpdate(index, 'operator', e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
        >
          {operatorOptions.map(option => (
            <option key={option.value} value={option.value}>{option.label}</option>
          ))}
        </select>

        <input
          type="number"
          value={rule.value}
          onChange={(e) => onUpdate(index, 'value', e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 w-32"
          placeholder="Value"
        />

        {canRemove && (
          <button
            onClick={() => onRemove(index)}
            className="p-2 text-red-500 hover:bg-red-50 rounded-md transition-colors"
          >
            <Trash2 size={16} />
          </button>
        )}
      </div>
    </div>
  );
};

export default RuleItem;