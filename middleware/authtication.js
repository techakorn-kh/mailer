const config = require('../config');

module.exports = {
    authen: async(req, res, next) => {
        try {
            const { authorization } = req.headers;

            if(!authorization) return res.status(401).json({ code: 401, status: 'error', message: 'Unauthorized'});

            const [type, token] = authorization.split(' ');

            if(type !== 'Bearer' || token !== config.APP_KEY) return res.status(401).json({ code: 401, status: 'error', message: 'Unauthorized'});

            return next();
        } catch (err) {
            console.error(err);
        }
    }
}