console.log("Welcome to Node.js Practical 1!");
console.log("This practical covers Git initialization and basic commits.");

const fs = require('fs');

// Creating a log file to simulate activity
fs.writeFileSync('activity.log', 'Practical 1 started at ' + new Date());
console.log("Activity logged in activity.log");
