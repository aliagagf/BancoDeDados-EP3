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

const listMostAwardedPerson = async (req, res) => {
  const listQuery = `
    SELECT pessoa_nome_art, count(*) as total_premios
    FROM eh_nomeado as en
    WHERE en.ganhou = TRUE
    GROUP BY pessoa_nome_art
    ORDER BY total_premios DESC, pessoa_nome_art ASC
    LIMIT 10;
  `

  try {
    const mostAwardedPersonawait = await db.query(listQuery)

    res.status(200).json(mostAwardedPersonawait.rows)
  } catch(err) {
    console.log(err)
    res.sendStatus(500)
  }
}

const listAllAwardedPersons = async (req, res) => {
  const listQuery = `
    SELECT edicao_ano, edicao_nome_evento, filme_ano_producao, filme_titulo_original,
      ganhou AS premiado, nome AS premio_nome, pessoa_nome_art, tipo
    FROM eh_nomeado INNER JOIN premio ON eh_nomeado.premio_tipo = premio.tipo
    AND eh_nomeado.premio_edicao_ano = premio.edicao_ano
    AND eh_nomeado.premio_edicao_nome_evento = premio.edicao_nome_evento
  `

  try {
    const awardedPersons = await db.query(listQuery)

    res.status(200).json(awardedPersons.rows)
  } catch(err) {
    console.log(err)
    res.sendStatus(500)
  }
}

module.exports = {
  createPersonAward,
  listAllAwardedPersons,
  listMostAwardedPerson,
}
