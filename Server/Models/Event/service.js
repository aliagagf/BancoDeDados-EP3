const db = require('../../DataBase/db')
const convertStringToYear = require('../../Utils/convertStringToYear')

const createEvent = (req, res) => {
  const insertQuery = `
    INSERT INTO "evento" (nome, nacionalidade, tipo, ano_inicio)
    VALUES ($1, $2, $3, $4)
  `

  const insertValues = [
    req.body.eventName,
    req.body.nationality,
    req.body.type,
    convertStringToYear(req.body.startYear),
  ]

  db.query(insertQuery, insertValues, (err, result) => {
    if (err) {
      console.log(err)
      res.status(500).json(err)
      return
    }

    res.status(200).json(result)
  })
}

const listEvent = (req, res) => {
  const listEvent = `
    SELECT *
    FROM "evento"
  `
  db.query(listEvent, [], (err, result) => {
    if (err) {
      console.log(err)
      res.status(500).json(err)
      return
    }

    res.status(200).json(result.rows)
  })
}

module.exports = {
  createEvent,
  listEvent,
}
