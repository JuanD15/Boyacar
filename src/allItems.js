const connection = require('./connection');

const allItems = async() => {
    const[query] = await connection.execute('SELECT * FROM boyacarBD.PASAJEROS');
    return query;
};

module.exports = allItems;