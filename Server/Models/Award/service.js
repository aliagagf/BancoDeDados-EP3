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

  try {
    await db.query(insertQuery, insertValues)
    res.sendStatus(200)
  } catch (err) {
    console.log(err)
    res.sendStatus(500)
  }
}

const listAward = async (req, res) => {
  const listQuery = `
    SELECT *
    FROM "premio"
  `

  try {
    const awards = await db.query(listQuery, [])
    res.status(200).json(awards.rows)
  } catch (err) {
    console.log(err)
    res.sendStatus(500)
  }
}

module.exports = {
  createAward,
  listAward,
}
