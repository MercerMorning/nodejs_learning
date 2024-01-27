const exportedObject = require('./multiple-export')
const { myName, myHobbies, myFavoriteNumber } = exportedObject;
const {myName: myOtherName}= require('./export-and-import')
const greeting = require('./single-export')

console.log(myHobbies)
greeting('gnom')

console.log(myName)
console.log(myOtherName)