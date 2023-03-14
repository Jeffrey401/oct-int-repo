const Exam = require('../models/Exam')
const mongoose = require('mongoose')

//get all exams
const getExams = async(req, res) => {
  const exams = await Exam.find()
  const jsonData = JSON.stringify(exams);

  
  res.send(jsonData);


 //res.status(200).json(exams)
 //res.send(exams)
 
}

//get a single exam
const getOneExam = async(req, res) => {
  const id = req.params

  const exam = await Exam.findById(id)

  if(!exam) {
    return res.status(400).json({error: "No such exam"})
  }

  res.status(200).json(exam)
}

//create a new exam
const createExam = async(req, res) => {
  const {patientId, age, sex, zipCode, bmi, weight, image, examID, icuAdmit, icuNum, mortality} = req.body

  try {
      const exam = await Exam.create({patientId, age, sex, zipCode, bmi, weight, image, examID, icuAdmit, icuNum, mortality})
      res.status(200).json(exam)
  } catch(error) {
      res.status(400).json({error: error.message})
  }
}

//delete an exam
const deleteExam = async(req, res) => {
  const id = req.params



  const exam = await Exam.findOneAndDelete({_id: id})

  if(!exam) {
    return res.status(400).json({error: "No such exam"})
  }

  res.status(200).json(exam)
}

//update an exam
const updateExam = async(req, res) => {
  const id = req.params

  const exam = await Exam.findOneAndUpdate({_id:id}, {
    ...req.body
  })

  if(!exam) {
    return res.status(400).json({error: "No such exam"})
  }
  
  res.status(200).json(exam)
}

module.exports = {
  createExam,
  getExams,
  getOneExam,
  deleteExam,
  updateExam
}