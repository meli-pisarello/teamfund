const express = require('express');
const app = express();

const PORT = 4081;

app.get('/', (req, res) => {
    res.end('Node backend server');
})

app.listen(PORT, function() {
    console.log(`The server is running on port: ${PORT}!`);
});