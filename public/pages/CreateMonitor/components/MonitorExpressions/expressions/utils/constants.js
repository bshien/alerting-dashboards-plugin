/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

export const POPOVER_STYLE = { zIndex: '200' };
export const EXPRESSION_STYLE = { padding: '20px', whiteSpace: 'nowrap' };
export const Expressions = {
  THRESHOLD: 'THRESHOLD',
  WHEN: 'WHEN',
  OF_FIELD: 'OF_FIELD',
  OVER: 'OVER',
  FOR_THE_LAST: 'FOR_THE_LAST',
  WHERE: 'WHERE',
  METRICS: 'METRICS',
  GROUP_BY: 'GROUP_BY',
};
export const NUMBER_TYPES = [
  'long',
  'integer',
  'short',
  'byte',
  'double',
  'float',
  'half_float',
  'scaled_float',
];
export const UNITS_OF_TIME = [
  { value: 'm', text: 'minute(s)' },
  { value: 'h', text: 'hour(s)' },
  { value: 'd', text: 'day(s)' },
];

export const WHERE_BOOLEAN_FILTERS = [
  { text: 'Select value', value: '' },
  { text: 'True', value: true },
  { text: 'False', value: false },
];

export const OPERATORS_MAP = {
  IS: 'is',
  IS_NOT: 'is_not',
  IS_NULL: 'is_null',
  IS_NOT_NULL: 'is_not_null',
  IS_GREATER: 'is_greater',
  IS_GREATER_EQUAL: 'is_greater_equal',
  IS_LESS: 'is_less',
  IS_LESS_EQUAL: 'is_less_equal',
  STARTS_WITH: 'starts_with',
  ENDS_WITH: 'ends_with',
  CONTAINS: 'contains',
  NOT_CONTAINS: 'does_not_contains',
  IN_RANGE: 'in_range',
  NOT_IN_RANGE: 'not_in_range',
};

export const COMPARISON_OPERATORS = [
  { text: 'is', value: OPERATORS_MAP.IS, dataTypes: ['number', 'text', 'keyword', 'boolean'] },
  {
    text: 'is not',
    value: OPERATORS_MAP.IS_NOT,
    dataTypes: ['number', 'text', 'keyword', 'boolean'],
  },
  {
    text: 'is null',
    value: OPERATORS_MAP.IS_NULL,
    dataTypes: ['number', 'text', 'keyword', 'boolean'],
  },
  {
    text: 'is not null',
    value: OPERATORS_MAP.IS_NOT_NULL,
    dataTypes: ['number', 'text', 'keyword'],
  },
  { text: 'is greater than', value: OPERATORS_MAP.IS_GREATER, dataTypes: ['number'] },
  { text: 'is greater than equal', value: OPERATORS_MAP.IS_GREATER_EQUAL, dataTypes: ['number'] },
  { text: 'is less than', value: OPERATORS_MAP.IS_LESS, dataTypes: ['number'] },
  { text: 'is less than equal', value: OPERATORS_MAP.IS_LESS_EQUAL, dataTypes: ['number'] },
  { text: 'is in range', value: OPERATORS_MAP.IN_RANGE, dataTypes: ['number'] },
  { text: 'is not in range', value: OPERATORS_MAP.NOT_IN_RANGE, dataTypes: ['number'] },
  { text: 'starts with', value: OPERATORS_MAP.STARTS_WITH, dataTypes: ['text', 'keyword'] },
  { text: 'ends with', value: OPERATORS_MAP.ENDS_WITH, dataTypes: ['text', 'keyword'] },
  { text: 'contains', value: OPERATORS_MAP.CONTAINS, dataTypes: ['text', 'keyword'] },
  { text: 'does not contains', value: OPERATORS_MAP.NOT_CONTAINS, dataTypes: ['text'] },
];
export const OVER_TYPES = [{ value: 'all documents', text: 'all documents' }];

export const AGGREGATION_TYPES = [
  { value: 'avg', text: 'average()' },
  { value: 'count', text: 'count()' },
  { value: 'sum', text: 'sum()' },
  { value: 'min', text: 'min()' },
  { value: 'max', text: 'max()' },
];

export const GROUP_BY_ERROR = 'Must specify at least 1 group by expression.';
export const QUERY_TYPE_GROUP_BY_ERROR = 'Can have a maximum of 1 group by selections.';

export const QUERY_TYPE_METRIC_ERROR = 'Can have a maximum of 1 metric selections.';

export const MAX_NUM_QUERY_LEVEL_GROUP_BYS = 1;
export const MAX_NUM_BUCKET_LEVEL_GROUP_BYS = 2;
export const MAX_NUM_WHERE_EXPRESSION = 1;
