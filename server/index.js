const express = require('express');
const cors = require('cors');
const app = express();
const joi = require('joi');
const port = 8080;
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.get('/', (req, res) => {
    res.send('ola');
});

app.post('/', async (req, res, next) => {

    console.log(req.body)

    res.status(200).send({ msg: 'msg' });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})

