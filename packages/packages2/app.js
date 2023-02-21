const express = require('express');
const app = express();

//app.get('/', (req, res) => res.send('Hello express'));
app.get('/', (req, res) => res.send('<h1>Hi Commonjs</h1>'));

app.listen(3030);
console.log("Sever is running");