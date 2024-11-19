const cart = require("../src/session_db")
const users = require("../src/database/session/session_mem")
const getCart = () => {
    return cart
}

const getUsers = () => {
    return users
}

module.exports = {getCart, getUsers}