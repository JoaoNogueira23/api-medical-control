const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

// rota para fazer o get de pacientes
router.get('/data-pacitents', async (req, res) => {

    try{
        const pacitents = await prisma.pacitentModel.findMany()
        res.status(200).json({data: pacitents})
    }catch(err){
        console.log(err)
        res.status(500).json({message: "Erro no processamento dos pacientes!"})
    }
})

// rota para fazer o get de atestados médicos
router.get('/data-certificates', async (req, res) => {
    try{
        const medicalCetificates = await prisma.medicalCertificateModel.findMany({
            select: {
                id: true,
                describe: true,
                start_date: true,
                end_date: true,
                name: {
                    select: {
                        name: true
                    }
                }
            }
        })
        const formattedData = medicalCetificates.map(item => ({
            ...item,
            name: item.name.name
        }));

        res.status(200).json({data: formattedData})
    }catch(err){
        console.log(err)
        res.status(500).json({message: "Erro no processamento dos atestados!"})
    }
})



// rota para adicionar novos pacientes
router.post('/add-pacitent', async (req, res) => {
    const payload = req.body
    try{
        await prisma.pacitentModel.create({
            data:{
                name: payload.name,
                age: parseInt(payload.age),
                height: parseFloat(payload.height),
                weight: parseFloat(payload.weight),
                historical: payload.historical,
                gender: payload.gender,
                emailList: payload.emailList
            }
        })

        res.status(200).json({ message: 'Paciente registrado com sucesso!' })
        return

    } catch(err){
        console.log(err)
        res.status(500).json({ message: 'Erro no processamento do paciente!' })
        return;
    }
    
    
})

// rota para adicionar novos atestados medicos
router.post('/add-certificate', async (req, res) => {
    const payload = req.body
    console.log(payload)
    const start_date_ = new Date(payload.start_date)
    const end_date_ = new Date(payload.end_date)
    try{
        await prisma.medicalCertificateModel.create({
            data:{
                id_pacitent: payload.id_pacitent,
                describe: payload.describe,
                start_date: start_date_,
                end_date: end_date_
            }
        })

        res.status(200).json({ message: 'Atestado registrado com sucesso!' })
        return

    } catch(err){
        console.log(err)
        res.status(500).json({ message: 'Erro no processamento do atestado!' })
        return;
    }
    
})

module.exports = router;