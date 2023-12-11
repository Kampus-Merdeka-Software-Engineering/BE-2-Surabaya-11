const db = require('../models')

const Contact = db.contacts

// create rooms

const addContact = async (req, res) => {

    let info = {
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
    }

    const room = await Contact.create(info)
    res.status(200).send(contact)
    console.log(db.contact)

}

// 2. get all room

const getAllContacts = async (req, res) => {

    let contacts = await Contact.findAll({})  
    res.status(200).send(contacts)
}

// 3. get single room

const getOneContact = async (req, res) => {
    
    let id = req.params.id;
    let contact = await Contact.findOne({ where: { id: id } });
    res.status(200).send(contact);
};

// 4. update products

const updateContact = async (req, res) => {

    let id = req.params.id;
    
    const contact = await Contact.update(req.body, { where: {id : id}})

    res.status(200).send(contact)
}

//5 delete product by id


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




