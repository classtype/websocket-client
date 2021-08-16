const express = require('express');
const app = express();
const port = 8080;
const hostname = '192.168.1.2';

app.use('/', express.static('./'));
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});