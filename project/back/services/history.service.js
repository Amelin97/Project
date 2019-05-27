const historyModel = require('../models/history.model')

const createHistory = (param) => {
    return new Promise((resolve, reject) => {
        historyModel.create({
            userId: param.userId,
            date: param.date,
            name: param.name,
            token: param.token,
            list : param.list


        }, function (err, history) {
            if (err) return reject(err);
            resolve(history)
        })
    })
}

const getHistory = (param) => {
    
   // console.log('param on find', { userId: param })
    return new Promise((resolve, reject) => {

        historyModel.find({ userId: param }, function (err, userId) {
            if (err) return reject(err);
            resolve(userId)
        })
    })
}

const getHistoryItem = (param) => {
    
    console.log('param on find', { _id: param._id })
    return new Promise((resolve, reject) => {

        historyModel.find({ _id: param._id }, function (err, _id) {
            if (err) return reject(err);
            resolve(_id)
        })
    })
}


module.exports = {
    createHistory,
    getHistory,
    getHistoryItem
}