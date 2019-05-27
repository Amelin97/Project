
const express = require('express');
const UserController = require('../controllers/user.controller.js');
const router = express.Router();
const  HistoryController = require('../controllers/history.controller')


// path /api/user/current
router.post('/user/current', UserController.getCurrentUser);
router.post('/history', HistoryController.saveToHistory);
router.post('/history/get',HistoryController.findHistory)
router.post('/history/get/item',HistoryController.findHistoryItem)


// RESTFUL API (CRUD)
// GET /history - get all data (list)
// GET /history/:id - get single row with ID
// POST /history - create a new element
// PUT(PATCH) /history/:id - update record
// DELETE /history/:id - delete record






module.exports = router;