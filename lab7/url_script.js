const url = require('url');

console.log('--- URL Module Information ---');
const myURL = new URL('https://www.example.com:8080/path/name?query=string#hash');

console.log('Full URL:', myURL.href);
console.log('Protocol:', myURL.protocol);
console.log('Host:', myURL.host);
console.log('Hostname:', myURL.hostname);
console.log('Port:', myURL.port);
console.log('Pathname:', myURL.pathname);
console.log('Search Query:', myURL.search);
console.log('Hash:', myURL.hash);

// Modifying URL
myURL.pathname = '/new/path';
console.log('\nModified URL Pathname:', myURL.href);
