const os = require('os');

console.log('--- OS Module Information ---');
console.log('Platform:', os.platform());
console.log('Architecture:', os.arch());
console.log('Total Memory (bytes):', os.totalmem());
console.log('Free Memory (bytes):', os.freemem());
console.log('CPU Info:', os.cpus()[0].model);
console.log('Home Directory:', os.homedir());
console.log('Uptime (seconds):', os.uptime());
