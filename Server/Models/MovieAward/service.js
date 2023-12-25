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

const listMostAwardedMovies = async (req, res) => {
  const listQuery = `
    SELECT filme_titulo_original, count(*) as total_premios
    FROM filme_nomeado as fn
    WHERE fn.premiado = TRUE
    GROUP BY filme_titulo_original
    ORDER BY total_premios DESC, filme_titulo_original ASC
    LIMIT 10;
  `

  try {
    const mostAwardedMovies = await db.query(listQuery)

    res.status(200).json(mostAwardedMovies.rows)
  } catch(err) {
    console.log(err)
    res.sendStatus(500)
  }
}

const listAllAwardedMovies = async (req, res) => {
  const listQuery = `
    SELECT edicao_ano, edicao_nome_evento, filme_ano_producao, filme_titulo_original,
      premiado, nome AS premio_nome , tipo
    FROM filme_nomeado INNER JOIN premio ON filme_nomeado.premio_tipo = premio.tipo
      AND filme_nomeado.premio_edicao_ano = premio.edicao_ano
      AND filme_nomeado.premio_edicao_nome_evento = premio.edicao_nome_evento
  `

  try {
    const awardedMovies = await db.query(listQuery)

    res.status(200).json(awardedMovies.rows)
  } catch(err) {
    console.log(err)
    res.sendStatus(500)
  }
}

module.exports = {
  createMovieAward,
  listAllAwardedMovies,
  listMostAwardedMovies,
}
