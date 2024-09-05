const Sequelize = require('sequelize')
const db = require('../db/connection')

const PacitentModel = db.define('tb_pacitents_register', {
    name:{
        type: Sequelize.STRING
    },
    age:{
        type: Sequelize.INTEGER
    },
    weight:{
        type: Sequelize.FLOAT
    },
    height:{
        type: Sequelize.FLOAT
    },
    historical:{
        type: Sequelize.STRING,
        allowNull: true
    },
    gender:{
        type: Sequelize.STRING
    },
    emailList:{
        type: Sequelize.STRING
    },
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIcrement: true
    }
})

module.exports = PacitentModel;