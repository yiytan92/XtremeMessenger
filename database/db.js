const Sequelize = require('sequelize')
const db = new Sequelize('database', null, null, {
  host: 'localhost',
  dialect: 'sqlite',
  storage: '../database/storage.sqlite'
})

const Users = db.define('users', {
  username: Sequelize.STRING,
  password: Sequelize.STRING,
  email: Sequelize.STRING,
  first: Sequelize.STRING,
  last: Sequelize.STRING
})

const Rooms = db.define('rooms', {
  room: Sequelize.INTEGER,
  username: Sequelize.STRING,
  message: Sequelize.STRING
})

const Friends = db.define('friends', {
  username: Sequelize.STRING,
  friend: Sequelize.STRING
})

Users.sync();
Rooms.sync();
Friends.sync();

exports.Users = Users;
exports.Rooms = Rooms;
exports.Friends = Friends;