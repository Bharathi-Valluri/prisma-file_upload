const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const fs = require('fs')

const savingData = async (req, res) => {
  try {
    const resp = await prisma.user.create({
      data: {
        username: req.body.username,
        email: req.body.email,
        file: req.file.path
      }
    })
    console.log(resp)
    fs.unlinkSync(req.file.path)
    res.status(200).json({
      response: resp,
      message: 'successfully inserted files into DB'
    })
  } catch (error) {
    console.log(error)
    res.status(400).json({
      response: null,
      message: 'failed'
    })
  }
}
const getAllRecords = async (req, res) => {
  try {
    const resp = await prisma.user.findMany()
    console.log(resp)
    res.status(200).json({
      response: resp,
      message: 'success'
    })
  } catch (error) {
    console.log(error)
    res.status(400).json({
      response: null,
      message: 'failed'
    })
  }
}
const modifyRecords = async (req, res) => {
  try {
    const resp = await prisma.user.update({
      where: {
        email: req.body.email
      },
      data: {
        username: req.body.username,
        file: req.file.path
      }
    })
    res.status(200).json({
      response: resp,
      message: 'Records are updated successfully '
    })
  } catch (error) {
    console.log(error)
    res.status(400).json({
      response: null,
      message: 'failed!...'
    })
  }
}
const deleteRecords = async (req, res) => {
  try {
    const resp = await prisma.user.delete({
      where: {
        email: req.body.email
      }
    })
    res.status(200).json({
      response: resp,
      message: 'Records are deleted successfully '
    })
  } catch (error) {
    console.log(error)
    res.status(400).json({
      response: null,
      message: 'failed!...'
    })
  }
}
module.exports = { savingData, getAllRecords, modifyRecords, deleteRecords }
