const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client')
const { format, differenceInDays } = require('date-fns');

const prisma = new PrismaClient()
// route cards
router.get('/data-cards', async (req, res) => {
    try{
        // quantidade de pacientes
        const dataPacitent = await prisma.pacitentModel.count()

        //pacientes de licença
        const dataCertificatesMedical = await prisma.$queryRaw`
            select
                id,
                DATEDIFF(end_date, DATE_SUB(NOW(), INTERVAL 3 HOUR)) as daysDifference
            from tb_certificates_medical
            where end_date > DATE_SUB(NOW(), INTERVAL 3 HOUR)
            order BY
                DATEDIFF(end_date, DATE_SUB(NOW(), INTERVAL 3 HOUR))`

        let numberCertificatesD1 = 0;
        dataCertificatesMedical.forEach(item=> {
            item.daysDifference == 1 ? numberCertificatesD1++ : ''
        });
        let formatedResponse = {
            numberPacitents: dataPacitent,
            numberCertificates: dataCertificatesMedical.length,
            numberCertificatesD1: numberCertificatesD1
        }

        res.status(200).json({data: formatedResponse})

    }catch(err){
        console.log(err)
        res.status(500).json({message: 'Erro no processamento dos dados!'})
    }
})

module.exports = router