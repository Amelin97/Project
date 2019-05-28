
const express = require('express');
const UserController = require('../controllers/user.controller.js');
const router = express.Router();
const  HistoryController = require('../controllers/history.controller')


// path /api/user/current
router.get('/user/current', UserController.getCurrentUser);
router.post('/history', HistoryController.saveToHistory);
router.get('/history',HistoryController.findHistory)
router.get('/history/:id',HistoryController.findHistoryItem)


// RESTFUL API (CRUD)
// GET /history - get all data (list)
// GET /history/:id - get single row with ID
// POST /history - create a new element
// PUT(PATCH) /history/:id - update record
// DELETE /history/:id - delete record






module.exports = router;