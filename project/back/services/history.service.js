const historyModel = require('../models/history.model')

const createHistory = (param) => {
    return new Promise((resolve, reject) => {
        historyModel.create(param, function (err, history) {
            if (err) return reject(err);
            resolve(history)
        })
    })
}

const getHistory = (param) => {   
   // console.log('param on find', { userId: param })
    return new Promise((resolve, reject) => {

        historyModel.find(param, function (err, userId) {
            if (err) return reject(err);
            resolve(userId)
        })
    })
}

const getHistoryItem = (param) => {  
    console.log('param on find', param)
    return new Promise((resolve, reject) => {
        historyModel.findById(param, function (err, _id) {
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