const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

router.post('/send-email', async (req, res) => {

    const payload = req.body

    try{
        // Create a transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: String(process.env.MAIL_USER), // Replace with your email
                pass: String(process.env.MAIL_PASS) // Replace with your email password
            }
        });

        // Email options
        let htmlEmail = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8" http-equiv="Content Type">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
            <body
            style="
            display:flex; 
            align-items: center; 
            justify-content: center;
            height: 100vh;
            background-color: aquamarine;
            "
            >
                Prezado(a) ${payload.name}, informamos que a sua licença termina no dia ${payload.end_date}.
                <br>
                Fique atento e, em caso de dúvidas favor entrar em contato.
                <br>
                <br>
                Melhores cumprimentos!
            </body>
        </html>
        `
        let mailOptions = {
            from: String(process.env.MAIL_USER), // Sender address
            to: payload.emailList, // List of recipients
            subject: 'Notificação de Retorno', // Subject line
            html: htmlEmail // HTML body
        };

        // Send email
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(`Error: ${error}`);
            }
            console.log(`Message Sent: ${info.response}`);
            res.status(200).json({message: 'E-mail enviado com sucesso!'})
            return;
        });

    }catch(err){
        console.log(err)
        res.status(500).json({message: 'Erro no envio de E-mail!'})
    }
})

module.exports = router