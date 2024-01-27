const fs = require('fs')

fs.writeFile('./first.txt', 'First text', (err) => {
    if (err) console.log(err)
    else console.log('File was written')
})

fs.appendFile('./first.txt', 'one more', (err) => {
    if (err) console.log(err)
    else console.log('appended')
})