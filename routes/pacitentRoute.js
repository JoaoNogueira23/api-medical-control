const express = require('express');
const PacitentModel = require('../models/Pacitent');
const router = express.Router();
const MedicalCertificateModel = require('../models/MedicalCertificate');

// rota para fazer o get de pacientes
router.get('/data', (req, res) => {
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

// rota para adicionar novos pacientes
router.post('/add', (req, res) => {
    let {name, age, weight, height, historical, gender, id} = req.body;

    PacitentModel.create({
        name,
        age,
        weight,
        height,
        historical,
        gender,
        id
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

// rota para registrar atestados
router.post('/add-certificate', (req, res) => {
    let {id_pacitent, describe, start_date, end_date} = req.body;

    MedicalCertificateModel.create({
        id_pacitent,
        describe,
        start_date,
        end_date
    })
    .then(() => {
        res.status(200).json({ message: 'Atestado resgistrado com sucesso!' })
        return
    }
        
    )
    .catch(err => {
        console.log(err)
        res.status(500).json({ message: 'Erro no registro do atestado!' })
        return;
    }
    )

})

module.exports = router;