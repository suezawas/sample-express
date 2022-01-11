const express = require('express')
const app = express()

app.get('/', (req, res) => {
res.sendFile(__dirname + '/index.html');
});

app.get('/other.html', (req, res) => {
res.sendFile(__dirname + '/other.html');
});

app.listen(3000);