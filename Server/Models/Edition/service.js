const db = require('../../DataBase/db')
const convertStringToYear = require('../../Utils/convertStringToYear')

const createEdition = (req, res) => {
  const insertQuery = `
    INSERT INTO "edicao" (ano, nome_evento, localizacao, data)
    VALUES ($1, $2, $3, $4)
  `

  const insertValues = [
    convertStringToYear(req.body.year),
    req.body.event.nome,
    req.body.place,
    req.body.date,
  ]

  db.query(insertQuery, insertValues, (err, result) => {
    if (err) {
      console.log(err)
      res.sendStatus(500)
      return
    }

    console.log(result)
    console.log('Edição Inserido com Sucesso!!!')

    res.sendStatus(200)
  })
}

const listEdition = (req, res) => {
  const listQuery = `
    SELECT *
    FROM "edicao"
  `

  db.query(listQuery, [], (err, result) => {
    if (err) {
      console.log(err)
      res.sendStatus(500)
      return
    }

    res.status(200).json(result.rows)
  })
}

module.exports = {
  createEdition,
  listEdition,
}
