const UserModel = require('../models/user.model')

const createUser = (param) => {
    return new Promise((resolve, reject) => {
        UserModel.create({ 
            name: param.name,
            email: param.email,
            password: param.password
        }, function (err, user) {
            if (err) return reject(err);
            resolve(user)
        });
    })
}

const getUsers = (param) => {
    return new Promise((resolve, reject) => {
        UserModel.find(param, function (err, user) {
            if (err) return reject(err);
            resolve(user)
        });
    })
}

module.exports = {
    createUser,
    getUsers
}