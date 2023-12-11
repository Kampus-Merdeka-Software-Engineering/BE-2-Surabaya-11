const db = require('../models')

const Room = db.rooms
const Contact = db.contacts

const addContact = async (req, res) => {

    let info = {
        name: req.body.name,
        email: req.body.email,
        message: req.body.message,
    }

    const contact = await Contact.create(info)
    res.status(200).send(contact)
    console.log(contact)

}

const getAllContacts = async (req, res) => {

    let contacts = await Contact.findAll({})  
    res.status(200).send(contacts)
}

const getOneContact = async (req, res) => {
    
    let id = req.params.id;
    let contact = await Contact.findOne({ where: { id: id } });
    res.status(200).send(contact);
};

const updateContact = async (req, res) => {

    let id = req.params.id;
    
    const contact = await Contact.update(req.body, { where: {id : id}})

    res.status(200).send(contact)
}

const deleteContact = async (req, res) => {

    let id = req.params.id

    await Contact.destroy({ where: {id : id}})

    res.status(200).send('contact is deleted')
}

module.exports = {
    addContact,
    getAllContacts,
    getOneContact,
    updateContact,
    deleteContact
}




