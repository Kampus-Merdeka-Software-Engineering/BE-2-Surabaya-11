module.exports = (sequelize, DataTypes) => {

    const Contact = sequelize.define("contact", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        message: {
            type: DataTypes.TEXT
        },
    
    })

    return Contact

}