const express = require('express');
const allItems = require('./allItems');

const app = express();

app.use(express.json());

const PORT = 3306;

app.listen(3306, () => {console.log("Funcionando en el puerto",PORT)});

app.get('/', async (req, res) => {
    const query = await allItems();
    return res.status(201).json(query);
});