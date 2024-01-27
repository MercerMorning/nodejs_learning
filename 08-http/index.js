const http = require('http')

const server = http.createServer((req, res) => {
    console.log(req)
    res.end('Greetings')
})

server.listen(5000, () => {
    console.log('server launched')
})