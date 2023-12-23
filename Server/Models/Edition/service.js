const db = require('../../DataBase/db')
const convertStringToYear = require('../../Utils/convertStringToYear')
const convertStringToDate = require('../../Utils/convertStringToDate')

const handleCreateJury = (res, data) => {
  const insertQuery = `
    INSERT INTO "eh_juri" (edicao_ano, edicao_nome_evento, pessoa_nome_art)
    VALUES ($1, $2, $3)
  `

  const insertValues = [
    convertStringToYear(data.year),
    data.event.nome,
  ]

  data.jury.forEach(person => {
    db.query(
      insertQuery,
      [...insertValues, person.nome_art],
      (err) => {
        if (err) {
          console.log(err)
          res.status(500).json(err)
          return
        }
      },
    )
  })
}

const createEdition = (req, res) => {
  const insertQuery = `
    INSERT INTO "edicao" (ano, nome_evento, localizacao, data)
    VALUES ($1, $2, $3, $4)
  `

  const insertValues = [
    convertStringToYear(req.body.year),
    req.body.event.nome,
    req.body.place,
    convertStringToDate(req.body.date),
  ]

  db.query(insertQuery, insertValues, (err, result) => {
    if (err) {
      console.log(err)
      res.status(500).json(err)
      return
    }

    handleCreateJury(res, req.body)

    res.sendStatus(200).json(result)
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
      res.status(500).json(err)
      return
    }

    res.status(200).json(result.rows)
  })
}

module.exports = {
  createEdition,
  listEdition,
}
