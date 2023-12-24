const db = require('../../DataBase/db')
const convertStringToYear = require('../../Utils/convertStringToYear')
const convertStringToDate = require('../../Utils/convertStringToDate')

const handleCreateJury = async (res, data) => {
  const insertQuery = `
    INSERT INTO "eh_juri" (edicao_ano, edicao_nome_evento, pessoa_nome_art)
    VALUES ($1, $2, $3)
  `

  const insertValues = [
    convertStringToYear(data.year),
    data.event.nome,
  ]

  data.jury.map(async (person) => {
    await db.query(insertQuery, [...insertValues, person.nome_art])
  })
}

const createEdition = async (req, res) => {
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
  try {
    await db.query(insertQuery, insertValues)
    await handleCreateJury(res, req.body)

    res.sendStatus(200)
  } catch (err) {
    console.log(err)
    res.sendStatus(500)
  }
}

const listEdition = async (req, res) => {
  const listQuery = `
    SELECT *
    FROM "edicao"
  `

  const editions = await db.query(listQuery, [])
  res.status(200).json(editions.rows)
}

module.exports = {
  createEdition,
  listEdition,
}
