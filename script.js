const http = require('http');

http.createServer((req,res)=>{
    console.log(req.url)
    if(req.url === "/"){
        res.write(`<div>Text Appi</div>
        <button onclick="window.location.href = 'http://localhost:3000/1';">run appi</button>`)
        res.end()
        }

        if(req.url === "/1"){
            const request = require('request');
            request('https://jsonplaceholder.typicode.com/users', function (error, response, body) {
            console.error('error:', error);
            console.log('statusCode:', response && response.statusCode);
              res.write(`<div>${body}</div><button onclick="window.location.href = 'http://localhost:3000'">Hide appi</button>`)
              res.end()
            });
        }
}).listen(3000)  

