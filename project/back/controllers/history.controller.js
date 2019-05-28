const HistoryService = require('../services/history.service');
const mongoose = require('mongoose')

const saveToHistory = async (req, res) => {
    console.log("hisrory", req.user.id)
    console.log("BODY",req.body)
    try {
        const param = {
            userId: req.user.id,
            date: req.body.date,
            name: req.body.name,
            list: req.body.list
        }
        const newHistory = await HistoryService.createHistory(param)
        console.log("NEW HISTORY:::", newHistory)
        res.status(200).send(newHistory);
    }
    catch (err) {
        console.log(err)
        res.status(500).send(err);
    }
}
const findHistory = async (req, res) => {
        const param = { userId: req.user.id }
        const stories = await HistoryService.getHistory(param)
            
        res.status(200).send(stories)
}

const findHistoryItem = async (req, res) => {
    //console.log("PAAAARAAAAMSSSSS",req.params)
    const _id = req.params.id;
    console.log("__IDD" , _id)
    const param = {_id : `${_id}`}
    console.log("PAAAARAAAAMSSSSS",param)
    const item = await HistoryService.getHistoryItem(param)
    console.log(item)
    res.status(200).send(item)
}

module.exports = {
    saveToHistory,
    findHistory,
    findHistoryItem

}