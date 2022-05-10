const express = require('express')
const   http = require('http');

const hostname = 'localhost';
const port = 3000;
const morgan = require('morgan');
const app = express();
app.use(morgan('dev'));



// to serve static file
app.use(express.static(__dirname + '/public'));

// default value
app.use((req, res, next) => {//next will be used when we need additional midleware
  console.log(req.headers);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<html><body><h1>This is an Express Server</h1></body></html>');

});

const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});