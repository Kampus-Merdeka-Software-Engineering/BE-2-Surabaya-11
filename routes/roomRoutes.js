const roomController = require('../controllers/roomController.js')
const contactController = require('../controllers/contactController.js')

// router
const router = require('express').Router()

router.post('/addRoom', roomController.addRoom)

// use routers
router.get('/allRoom', roomController.getAllRooms)

// Products router
router.get('/:id', roomController.getOneRoom)

router.put('/:id', roomController.updateRoom)

router.delete('/:id', roomController.deleteRoom)

module.exports = router;