const express = require('express');
const PacitentModel = require('../models/Pacitent');
const router = express.Router();
const MedicalCertificateModel = require('../models/MedicalCertificate');

// rota para fazer o get de pacientes
router.get('/data-pacitents', (req, res) => {
    PacitentModel.findAll({
        order: [['createdAt', 'DESC']]
    })
    .then(pacitents => {
        res.status(200).json({data: pacitents})
        return;
    })
    .catch(err => {
        res.status(500).json({message: "Erro no processamento dos pacientes!"})
        return;
    })
})

// rota para fazer o get de atestados médicos
router.get('/data-certificates', (req, res) => {
    MedicalCertificateModel.findAll({
        order: [['createdAt', 'DESC']]
    })
    .then(pacitents => {
        res.status(200).json({data: pacitents})
        return;
    })
    .catch(err => {
        res.status(500).json({message: "Erro no processamento dos pacientes!"})
        return;
    })
})



// rota para adicionar novos pacientes
router.post('/add-pacitent', (req, res) => {
    let {name, age, weight, height, historical, gender, emailList} = req.body;

    PacitentModel.create({
        name,
        age,
        weight,
        height,
        historical,
        gender,
        emailList
    })
    .then(() => {
        res.status(200).json({ message: 'Paciente adicionado com sucesso!' })
        return
    }
        
    )
    .catch(err => {
        console.log(err)
        res.status(500).json({ message: 'Erro ao adicionar o paciente' })
        return;
    }
    )
    
})

// rota para adicionar novos atestados medicos
router.post('/add-certificate', (req, res) => {
    console.log(req.body)
    let {describe, id_pacitent, daysCertificated} = req.body;

    MedicalCertificateModel.create({
        describe, 
        id_pacitent, 
        daysCertificated
    })
    .then(() => {
        res.status(200).json({ message: 'Atestado registrado com sucesso!' })
        return
    }
        
    )
    .catch(err => {
        console.log(err)
        res.status(500).json({ message: 'Erro no processamento do atestado!' })
        return;
    }
    )
    
})

module.exports = router;