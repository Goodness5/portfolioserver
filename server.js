var http = require("http");
const fs = require("fs").promises;


let indexFile;

http.createServer(
    function (req, res){
        fs.readFile(__dirname + "/contact.html")
        .then(contents =>{
            res.setHeader("Content-Type", "text/html");
            res.writeHead(200);
            res.end(indexFile);
        })
       .catch(err =>{
        res.writeHead(500);
        res.end(err);
        return;
       }) 
        
}).listen(5000)
// var http = require('http');
// http.createServer(function (req, res) {
//     fs.readFile("home.html", function (err, data) {

//       res.writeHead(200, { "Content-Type": "text/html" });

//       res.write(data);
//       return res.end();
//     });
//   }).listen(5000);
