const isEmpty = value => 
value === undefined ||
value == null ||
(typeof value === 'object' && Object.keys(value).lenght === 0) ||
(typeof value == 'string' && value.trim().length === 0);

export default isEmpty



