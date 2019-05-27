const HistoryService = require('../services/history.service');
const jwt = require('jsonwebtoken');

const saveToHistory = async (req, res) => {
    try {
        jwt.verify(req.body.userId, 'shhhhh', async (err, decoded) => {
            req.body.userId = decoded.id;
        const param = { ...req.body }
        
            if(err){
                console.log('ERRR',err)
            }else{
           //     console.log("DECODED",decoded)
        
     //   console.log('IIIIIIDDDDD', req.body.userId)
       
        const newHistory = await HistoryService.createHistory(param)
      //  console.log("NEW HISTORY:::", newHistory)
        res.status(200).send(newHistory);
    }
})
    }
    catch (err) {
        console.log(err)
        res.status(500).send(err);
    }
}
const findHistory = async (req ,res) => {
    jwt.verify(req.body.userId , 'shhhhh' , async (err , decoded)=>{
      //  console.log("USER IDD:::",decoded)
        const param = decoded.id
        const stories = await HistoryService.getHistory(param)
   
        //console.log("USER IDD:::",req.body)
    //   console.log("STORIES::::",stories)
       res.status(200).send(stories)
    }) 
}

const findHistoryItem = async (req , res) => {
    console.log(req.body)
    const param = req.body
    const itemlist = await HistoryService.getHistoryItem (param)
    res.status(200).send(itemlist)
}

module.exports = {
    saveToHistory ,
    findHistory,
    findHistoryItem

}