const { Show } = require('./Show')
const { User } = require('./User')

Show.belongsToMany(User, { through: "User_Show" })
User.belongsToMany(Show, { through: "User_Show" })

module.exports = {Show, User}
