const db = require('../../DataBase/db')

const createAward = (req, res) => {
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
      res.sendStatus(500)
      return
    }

    console.log(result)
    console.log('Prêmio Inserido com Sucesso!!!')

    res.sendStatus(200)
  })
}

module.exports = {
  createAward,
}
