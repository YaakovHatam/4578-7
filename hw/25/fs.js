const fs = require('fs');
const rl = require('readline');


const lineReader = rl.createInterface({
    input: fs.createReadStream('list.txt')
});

lineReader.on('line', function (line) {
    console.log('Line from file:', line);
});


