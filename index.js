const http = require('http');
const hostname = '127.0.0.1';
const POST = process.env.PORT || 5000;
const server = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
  response.end('Hello World\n');
});
server.listen(PORT, hostname, () => {
  console.log(`Server running at http://${hostname}:${PORT}`);
});