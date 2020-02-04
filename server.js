const express = require('express');

const hostname = 'localhost';
const port = 3000;

const app = express();

app.use((req, res) => {
    console.log(req.headers);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is a great Express Server</h1></body></html>');
});

app.listen(port, hostname, () => {
    console.log(`Hey Look, The Server is running at http://${hostname}:${port}/`);
});