const nodemailer = require('nodemailer');

module.exports = {
    sendMail: async(req, res) => {
        try {
            const { authen, from, to, subject, html } = req.body;

            const transporter = nodemailer.createTransport({
                host: `${authen?.host}`,
                port: authen?.port,
                secure: false,
                auth: {
                    user: `${authen?.email}`,
                    pass: `${authen?.password}`
                }
            });
              
            const result = await transporter.sendMail({
                from: `${from}`,
                to: `${to}`,
                subject: `${subject}`,
                html: `${html}`
            }).catch((err)=>{
                throw err;
            });

            return res.status(200).json({ 
                code: 200, 
                status: 'success', 
                message: `${result?.response}`,
            });
        } catch (err) {
            console.error(err);
            return res.status(404).json({ 
                code: 404, 
                status: 'error', 
                message: `${err}`,
            });
        }
    }
}



