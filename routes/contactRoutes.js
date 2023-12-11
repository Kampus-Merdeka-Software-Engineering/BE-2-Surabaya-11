const roomController = require('../controllers/roomController.js')
const contactController = require('../controllers/contactController.js')

const contactRouter = require('express').Router()

contactRouter.post('/addContact', contactController.addContact)

contactRouter.get('/allContact', contactController.getAllContacts)

contactRouter.get('/:id', contactController.getOneContact)

contactRouter.put('/:id', contactController.updateContact)

contactRouter.delete('/:id', contactController.deleteContact)

module.exports = contactRouter;