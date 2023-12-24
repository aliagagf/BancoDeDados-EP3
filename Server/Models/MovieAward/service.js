const db = require('../../DataBase/db')
const convertStringToYear = require('../../Utils/convertStringToYear')

const createMovieAward = async (req, res) => {
  const insertQuery = `
    INSERT INTO filme_nomeado(
      premio_tipo,
      premio_edicao_ano,
      premio_edicao_nome_evento,
      filme_titulo_original,
      filme_ano_producao,
      premiado
    )
    VALUES($1, $2, $3, $4, $5, $6)
  `

  const insertValues = [
    req.body.award.tipo,
    convertStringToYear(req.body.award.edicao_ano),
    req.body.award.edicao_nome_evento,
    req.body.movie.titulo_original,
    convertStringToYear(req.body.movie.ano_producao),
    req.body.isAwarded
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
  createMovieAward,
}
