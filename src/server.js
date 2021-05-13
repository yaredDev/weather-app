const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname + '/dist/weather-app'));

console.log('Wonderful');

app.get('/*', (req, res, next) => {
    res.sendFile('index.html', { root: 'dist/weather-app' });
    console.log('Working');
});


app.listen(process.env.PORT || 8000);