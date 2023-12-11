const roomController = require('../controllers/roomController.js')
const contactController = require('../controllers/contactController.js')

// router
const contactRouter = require('express').Router()

contactRouter.post('/addContact', contactController.addContact)

// use routers
contactRouter.get('/allContact', contactController.getAllContacts)

// Products router
contactRouter.get('/:id', contactController.getOneContact)

contactRouter.put('/:id', contactController.updateContact)

contactRouter.delete('/:id', contactController.deleteContact)

module.exports = contactRouter;