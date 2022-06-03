/*
        2․ ՈՒնենք config.json ֆայլ ,
    {
        "host" : "localhost",
        "port" : 3000
    }
     պարունակությամբ ․ Ստեղծել սերվեր , որը լսում է json-ի մեջ լրացված հոսթին և պորտին։
*/
const fs = require("fs/promises");
const http = require('http');

const server = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Hello World!');
    res.end(JSON.stringify({name:"Laura"}));
});

fs.readFile("config.json" ).then((configBuffer)=>{
    const config = JSON.parse(configBuffer.toString());
    server.listen(config.port, config.host);
}).catch((err) =>{
    console.log(err);
});

