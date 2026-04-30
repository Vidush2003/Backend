const path = require('path');

console.log('--- Path Module Information ---');
const filePath = '/user/local/bin/file.txt';

console.log('Original Path:', filePath);
console.log('Directory Name:', path.dirname(filePath));
console.log('Base Name:', path.basename(filePath));
console.log('Extension:', path.extname(filePath));

const joinedPath = path.join('/users', 'arjun', 'projects', 'lab7.js');
console.log('Joined Path:', joinedPath);

const resolvedPath = path.resolve('lab7.js');
console.log('Resolved Absolute Path:', resolvedPath);
