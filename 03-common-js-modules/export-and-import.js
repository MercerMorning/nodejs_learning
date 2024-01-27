const { myName } = require('./multiple-export');

const myFriendsName = 'Alice'

module.exports.myName = myFriendsName
module.exports.myFriendsName = myFriendsName