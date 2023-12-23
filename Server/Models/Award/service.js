const db = require('../../DataBase/db')

const createAward = async (req, res) => {
  const insertQuery = `
    INSERT INTO "premio" (tipo, edicao_ano, edicao_nome_evento, nome)
    VALUES ($1, $2, $3, $4)
  `

  const insertValues = [
    req.body.type,
    req.body.edition.ano,
    req.body.edition.nome_evento,
    req.body.name,
  ]

  db.query(insertQuery, insertValues, (err, result) => {
    if (err) {
      console.log(err)
      res.status(200).json(err)
      return
    }

    res.status(200).json(result)
  })
}

const listAward = async (req, res) => {
  const listQuery = `
    SELECT *
    FROM "premio"
  `

  db.query(listQuery, [], (err, result) => {
    if (err) {
      console.log(err)
      res.status(200).json(err)
      return
    }

    res.status(200).json(result)
  })
}

module.exports = {
  createAward,
  listAward,
}
