const path = require('path');
const express = require('express');

const app = express();

//set public folder
app.use(express.static(path.join(__dirname, 'public')));

//listen on port
app.listen(2000, () => {console.log('Server is running on port 2000')});