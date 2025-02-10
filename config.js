require('dotenv').config();

const config = {
    APP_KEY: process.env.APP_KEY || null,
    APP_TYPE: process.env.APP_TYPE || 'develop',
    APP_PORT: process.env.APP_PORT || 5500,

    
    MAIL_MAILER: process.env.MAIL_MAILER || 'smtp',
    MAIL_HOST: process.env.MAIL_HOST || 'smtp.office365.com',
    MAIL_PORT: process.env.MAIL_PORT || 587,
    MAIL_USERNAME: process.env.MAIL_USERNAME || null,
    MAIL_PASSWORD: process.env.MAIL_PASSWORD || null,
    MAIL_ENCRYPTION: process.env.MAIL_ENCRYPTION || 'tls',  
}

module.exports = config;