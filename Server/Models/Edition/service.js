const db = require('../../DataBase/db')
const convertStringToYear = require('../../Utils/convertStringToYear')
const convertStringToDate = require('../../Utils/convertStringToDate')

const handleCreateJury = (data) => {
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
        if (err) return
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

  db.query(insertQuery, insertValues, (err) => {
    if (err) {
      console.log(err)
      res.sendStatus(500)
      return
    }

    handleCreateJury(req.body)

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
