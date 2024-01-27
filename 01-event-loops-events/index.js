const fs = require('fs')
const dns = require('dns')

function info(text) {
    console.log(text, performance.now().toFixed(2));
}

console.log('Program start')
setTimeout(() => console.log('Timeout 1', info()), 0)
setTimeout(() => {
    process.nextTick(() => info('Next tick 2'))
    info('Timeout 2')
}, 100)

fs.writeFile('./test.txt', 'Hello node.js', () => info('File written'))

Promise.resolve().then(() => info('Promise 1'))

process.nextTick(() => info('next tick 1'))

setImmediate(() => info('Immerdiate 1'))

let intervalCount = 0;
const intervalId = setInterval(() => {
    info(`Interval ${intervalCount += 1}`)
    if (intervalCount === 2) clearInterval(intervalId)
}, 50)

dns.lookup('localhost', (err, address, family) => {
    info('DNS 1 google.com');
    Promise.resolve().then(() => info('Promise 2'))
    process.nextTick(() => info('Next tick 3'))
})

console.log('Program end')