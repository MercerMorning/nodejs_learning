import http from 'http';
import fs from "fs";

const server = http.createServer((req, res) => {
    if (req.url === '/' && req.method === 'GET') {
        const filePath = './files/index.html'
        const readStream = fs.createReadStream(filePath)
        res.statusCode = 200
        readStream.pipe(res)
    }
})

server.listen(5000, () => {
    console.log('started')
})