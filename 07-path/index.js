const path = require('path')

const filePath = '/Users/test/Desktop/node/index.js'
const relativteP = './test/Desktop/node/index.js'
const relativteP2 = './test/Desktop/node/'

console.log(path.isAbsolute(filePath))
console.log(path.isAbsolute(relativteP))
console.log(path.basename(relativteP))
console.log(path.basename(relativteP2))