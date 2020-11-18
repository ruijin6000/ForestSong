const express = require('express');

const app = express();

require('./api/testRoutes')(app);

console.log("test1sada");
const PORT = 5000;
app.listen(PORT);


