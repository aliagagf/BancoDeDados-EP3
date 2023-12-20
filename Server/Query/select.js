const db = require('../postgresConfig')

const getAllPerson = (req, res) => {
    db.pool.query('SELECT * FROM Pessoa ORDER BY nome ASC', (err, result) => {
        if (err) console.log(err)

        res.status(200).json(result.rows)
    })
}

module.exports = {
    getAllPerson,
}
