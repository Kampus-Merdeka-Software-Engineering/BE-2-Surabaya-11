const db = require('../models')

const Room = db.rooms
const Contact = db.contacts

// create rooms

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

// 2. get all room

const getAllRooms = async (req, res) => {

    let rooms = await Room.findAll({})  
    res.status(200).send(rooms)
}

// 3. get single room

const getOneRoom = async (req, res) => {
    
    let id = req.params.id;
    let room = await Room.findOne({ where: { id: id } });
    res.status(200).send(room);
};

// 4. update products

const updateRoom = async (req, res) => {

    let id = req.params.id;
    
    const room = await Room.update(req.body, { where: {id : id}})

    res.status(200).send(room)
}

//5 delete product by id

// 3. get single room

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




