const roomController = require('../controllers/roomController.js')
const contactController = require('../controllers/contactController.js')

const router = require('express').Router()

router.post('/addRoom', roomController.addRoom)

router.get('/allRoom', roomController.getAllRooms)

router.get('/:id', roomController.getOneRoom)

router.put('/:id', roomController.updateRoom)

router.delete('/:id', roomController.deleteRoom)

module.exports = router;