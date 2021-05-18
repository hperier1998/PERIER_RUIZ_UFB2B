let { Router } = require('express')

let router = Router()

let multer = require('multer')

let storage = multer.diskStorage({
  destination:controllerFunctions.destinationFile,
  filename:controllerFunctions.nameFile
})

let upload = multer({
  storage:storage,
  fileFilter:controllerFunctions.checkImage,
  limits:{
      fileSize:2000000
  }
})

import auth from '../controllers/auth'
import score from '../controllers/score'
import ses from '../controllers/ses'
import controllerFunctions from '../controllers/controllerFunctions'

router.post('/Users', auth.register)

router.get('/Users', (req, res)=>{
  res.send('plop')
})

router.post('/Login', auth.login)

router.get('/Login', (req, res) => {
  res.send('foo')
})

router.post('/Modify', auth.modify)

router.get('/Modify', (req, res) => {
  res.send('noo')
})

router.post('/Refresh', auth.refreshVueX)

router.get('/score', score.getScore)

router.post('/userscore', score.userScore)

router.post('/Createses', ses.registerSes)

router.post('/Modifyses', ses.modifySes)

router.get('/Fetchses', ses.getSession)

router.get('/Fetchsesname', ses.getSessionnames)

router.get('/Fetchdefi', ses.getDefi)

router.post('/Createdefi', ses.registerDefi)

router.get('/Fetchdefiname', ses.getDefinames)

router.post('/Modifydefi', ses.modifyDefi)

router.post('/Addusersession', auth.addUsertosession)

router.post('/Definameselect', ses.defiSelects)

router.post('/GetDefiByName', ses.getDefiByName)

router.post('/AddPic', upload.single('file'),(req,res)=>{
  res.status(200).send({
    data:req.file
  })
})

router.post('/SendPic', controllerFunctions.sendPic)

router.post('/GetProofs', ses.getProofs)

router.post('/GetAllProofs', ses.getAllProofs)

router.post('/AddPoints', ses.addPoints)

router.post('/ValidateProof', ses.validateProof)

module.exports = router