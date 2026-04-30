const fs = require('fs');

const fileName = 'student_activity.log';

// 1. File Creation & Writing Data
console.log('--- Creating and Writing to file ---');
fs.writeFileSync(fileName, 'Log entry 1: Student logged in.\n');
console.log('File created and data written successfully.');

// 2. Appending Data
console.log('\n--- Appending to file ---');
fs.appendFileSync(fileName, 'Log entry 2: Student started Practical 6.\n');
console.log('Data appended successfully.');

// 3. Reading Data
console.log('\n--- Reading from file ---');
const data = fs.readFileSync(fileName, 'utf8');
console.log('File Contents:');
console.log(data);

// 4. Deleting Data (File Deletion)
console.log('\n--- Deleting file ---');
fs.unlinkSync(fileName);
console.log('File deleted successfully.');
