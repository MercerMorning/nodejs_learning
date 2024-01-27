const fs = require('fs/promises')

fs.writeFile('./first.txt', 'First text')
    .then(() => {
        console.log('File was written')
    })
    .then(() => {
        fs.appendFile('./first.txt', 'one more')
    })
    .then(() => {
        console.log('appended')
    })
