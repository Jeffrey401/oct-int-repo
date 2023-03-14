const express = require('express');

const router = express.Router();
const bodyParser = require("body-parser");

const {
    createExam,
    getExams,
    getOneExam,
    deleteExam,
    updateExam
}= require('../controllers/exam-controller');

//GET all exams
router.get('/', getExams)

//GET a single exam
router.get('/:_id', getOneExam)

//POST a new exam
router.post('/', createExam)

//DELETE an exam
router.delete('/:_id', deleteExam)

//UPDATE an exam
router.patch('/:_id', updateExam)


module.exports = router;