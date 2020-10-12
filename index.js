const path = require('path');
const express = require('express');

const app = express();

let PORT = process.env.PORT || 2000;

//set public folder
app.use(express.static(path.join(__dirname, 'public')));

//listen on port
app.listen(PORT, () => {console.log('Server is running on port 2000')});