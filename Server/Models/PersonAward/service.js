const db = require('../../DataBase/db')

const createPersonAward = async (req, res) => {
  const insertQuery = `
    INSERT INTO eh_nomeado (
      premio_tipo,
      premio_edicao_ano,
      premio_edicao_nome_evento,
      pessoa_nome_art,
      filme_titulo_original,
      filme_ano_producao,
      ganhou
    )
    VALUES($1, $2, $3, $4, $5, $6, $7)
  `

  const insertValues = [
    req.body.award.tipo,
    req.body.award.edicao_ano,
    req.body.award.edicao_nome_evento,
    req.body.person.nome_art,
    req.body.movie.titulo_original,
    req.body.movie.ano_producao,
    req.body.isAwarded,
  ]

  try {
    await db.query(insertQuery, insertValues)

    res.sendStatus(200)
  } catch (err) {
    console.log(err)
    res.sendStatus(500)
  }
}

module.exports = {
  createPersonAward,
}
