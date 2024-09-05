const express = require('express');
const PacitentModel = require('../models/Pacitent');
const router = express.Router();

router.get('/data', (req, res) => {
    res.send('GET funcionando')
})

router.post('/add', (req, res) => {
    console.log(req.body)
    let {name, age, weight, height, historical, id} = req.body;

    PacitentModel.create({
        name,
        age,
        weight,
        height,
        historical,
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

module.exports = router;