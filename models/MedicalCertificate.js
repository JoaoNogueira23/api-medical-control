const Sequelize = require('sequelize')
const db = require('../db/connection')

const MedicalCertificateModel = db.define('tb_medical_certificate', {
    id_pacitent:{
        type: Sequelize.INTEGER
    },
    describe:{
        type: Sequelize.STRING
    },
    start_date:{
        type: Sequelize.STRING
    },
    end_date:{
        type: Sequelize.STRING
    },
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIcrement: true
    }
})

module.exports = MedicalCertificateModel;