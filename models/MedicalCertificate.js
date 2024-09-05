const Sequelize = require('sequelize')
const db = require('../db/connection')

const MedicalCertificateModel = db.define('tb_medical_certificate', {
    id_pacitent:{
        type: Sequelize.INTEGER
    },
    describe:{
        type: Sequelize.STRING
    },
    daysCertificated:{
        type: Sequelize.INTEGER
    },
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIcrement: true
    }
})

module.exports = MedicalCertificateModel;