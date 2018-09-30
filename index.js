
const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.writeHead(200, {'Content-Type':'text/plain; charset=utf-8'});
  //res.end('2016320270 황서연\n');

  const indexContent = fs.readFileSync(path.join(__dirname, 'index.html'));
  res.end(indexContent);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});