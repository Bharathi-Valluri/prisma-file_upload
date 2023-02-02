const controller = require('../controller/fileController')
const router = require('express').Router()
const { upload } = require('../middleware/middleware')
router.post(
  '/savingFileIntoDB',
  upload.single('profile'),
  controller.savingData
)
router.get('/fetchAll', controller.getAllRecords)
router.put('/updateRecord', upload.single('profile'), controller.modifyRecords)
router.delete('/deleteRecord', controller.deleteRecords)
module.exports = router
