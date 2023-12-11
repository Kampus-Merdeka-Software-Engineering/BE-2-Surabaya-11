const db = require('../models')

const Room = db.rooms
const Contact = db.contacts

const addRoom = async (req, res) => {

    let info = {
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
    }

    const room = await Room.create(info)
    res.status(200).send(room)
    console.log(room)

}

const getAllRooms = async (req, res) => {

    let rooms = await Room.findAll({})  
    res.status(200).send(rooms)
}

const getOneRoom = async (req, res) => {
    
    let id = req.params.id;
    let room = await Room.findOne({ where: { id: id } });
    res.status(200).send(room);
};

const updateRoom = async (req, res) => {

    let id = req.params.id;
    
    const room = await Room.update(req.body, { where: {id : id}})

    res.status(200).send(room)
}

const deleteRoom = async (req, res) => {

    let id = req.params.id

    await Room.destroy({ where: {id : id}})

    res.status(200).send('room is deleted')
}

module.exports = {
    addRoom,
    getAllRooms,
    getOneRoom,
    updateRoom,
    deleteRoom
}




