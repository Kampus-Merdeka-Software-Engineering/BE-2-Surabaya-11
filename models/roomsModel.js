module.exports = (sequelize, DataTypes) => {

    const Room = sequelize.define("room", {
        image: {
            type: DataTypes.STRING
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT
        },
        price: {
            type: DataTypes.STRING
        },
    
    })

    return Room

}