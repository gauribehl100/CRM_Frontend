export const calculateAudienceSize = (rules, customers) => {
  if (!rules.length || rules.some(rule => !rule.value)) return 0;

  const validRules = rules.filter(rule => rule.value);
  if (!validRules.length) return 0;

  const matchingCustomers = customers.filter(customer => {
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