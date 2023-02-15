const express = require('express');
const router = express.Router();

const UserController = require('../controllers/exam-controller');

//GET all exams
router.get('/', (req, res) => {
    res.json({ mssg: 'GET all exams' })
});

//GET a single exam
router.get('/:id', (req, res) => {
    res.json({ mssg : 'GET a single exam' })
})

//POST a new exam
router.post('/', (req, res) => {
    res.json({ mssg: 'POST a new exam' })
})

//DELETE an exam
router.delete('/:id', (req, res) => {
    res.json({ mssg: 'DELETE an exam' })
})

//UPDATE an exam
router.patch('/id', (req, res) => {
    res.json({ mssg: 'UPDATE an exam' })
})

module.exports = router;
