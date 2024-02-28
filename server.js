const express = require('express');
const app = express();

const PORT = 5000;

app.listen(PORT, function() {
    console.log(`The server is running on port: ${PORT}`);
});