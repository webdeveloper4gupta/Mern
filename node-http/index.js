// first of all i need to import http core node module
let http=require('http')

// here i write host name
const hostname = 'localhost';
// here i write the port number
const port = 3000;


// here i create server by using http method that is createServer
const server = http.createServer((req, res) => {
    console.log(req.headers);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');//it tell response in the form of html
    res.end('<html><body><h1>Hello, World!</h1></body></html>');//after this response goes back to browser
})
// here i start the server
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });