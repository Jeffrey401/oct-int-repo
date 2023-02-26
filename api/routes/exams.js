const express = require('express');
const router = express.Router();

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
router.get('/:id', getOneExam)

//POST a new exam
router.post('/', createExam)

//DELETE an exam
router.delete('/:id', deleteExam)

//UPDATE an exam
router.patch('/id', updateExam)

module.exports = router;
