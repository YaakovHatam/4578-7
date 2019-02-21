// const app = require('express')();
const express = require('express');
const cors = require('cors');
const PORT = 8888;
const app = express();
app.use(cors());
app.get('/student', function (req, res) {
    const students = [
        {
            id: 1,
            name: 'a'
        },
        {
            id: 2,
            name: 'b'
        }
    ]
    res.json(JSON.stringify(students));
});

app.post('/', function (req, res) {
    res.send('post home');
});



app.listen(PORT, function() {
    console.log('server started at port ' + PORT)
});