const http = require('http');

http.createServer((request, response) => {
  response.writeHead(200, {
    'Content-Type': 'text/plain'
  });
  response.write('Hello, World');
  response.end();
}).listen(3001, () => {
  console.log('Node server running at http://localhost:3001');
});