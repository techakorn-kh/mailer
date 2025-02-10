const express = require('express');
const config = require('./config');

const app = express();
const port = config.APP_PORT;

const { authen } = require('./middleware/authtication');
const indexRoutes = require('./routes/index');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    console.log(config)
    console.log(`\r\n //////////////`);
    res.send('Hello World!');
});

app.use('/api', authen, indexRoutes);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});