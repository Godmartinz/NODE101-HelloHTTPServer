// write your code here
var http=require('http');

http.createServer(function(req, res){
    res.writeHead(200,{'Content-type':'text/event-stream'});
    res.write('Hello World');
    res.end();
        
    }).listen(8080);
console.log("listening on port: ");
