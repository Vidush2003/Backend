const http = require('http');

const PORT = 8080;

const server = http.createServer((req, res) => {
    console.log(`Received request for: ${req.url}`);
    
    // Set the response HTTP header with HTTP status and Content type
    res.writeHead(200, { 'Content-Type': 'text/html' });
    
    // Send the response body
    res.end('<h1>Hello from pure Node.js HTTP Server!</h1><p>Welcome to Practical 8.</p>');
});

server.listen(PORT, () => {
    console.log(`Server is running and listening on port ${PORT}...`);
    console.log(`Test it by opening http://localhost:${PORT} in your browser.`);
});
