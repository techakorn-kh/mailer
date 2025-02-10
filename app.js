const express = require('express');
const config = require('./config');
const cors = require('cors');

const app = express();
const port = process.env.PORT|| config.APP_PORT;

const { authen } = require('./middleware/authtication');
const indexRoutes = require('./routes/index');

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    return res.send('Hello World!');
});

app.use('/api', authen, indexRoutes);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

module.exports = app;