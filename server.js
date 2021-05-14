const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/dist/weather-app'));
app.get('/*', (req, res, next) => {
    response.sendFile(path.join(__dirname, '/dist/weather-app/index.html'));
});
app.listen(process.env.PORT || 8000);