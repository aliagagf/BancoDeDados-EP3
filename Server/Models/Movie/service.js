const db = require('../../DataBase/db')
const convertStringToYear = require('../../Utils/convertStringToYear')
const convertStringToDate = require('../../Utils/convertStringToDate')

const handleCreatePremiereLocation = async ({
  premiereLocation,
  originalTitle,
  productionYear,
}) => {
  const insertQuery = `
    INSERT INTO "local_estreia_filme"(
      local_estreia,
      filme_titulo_original,
      filme_ano_producao
    )
    VALUES ($1, $2, $3);
  `

  const insertValues = [
    premiereLocation,
    originalTitle,
    convertStringToYear(productionYear),
  ]

  await db.query(insertQuery, insertValues)
}

const handleCreateIsDirector = async ({
  originalTitle,
  productionYear,
  mainDirector,
  directors,
}) => {
  const insertQuery = `
    INSERT INTO "eh_diretor"(
      filme_titulo_original,
      filme_ano_producao,
      diretor_nome_art,
      eh_principal
    )
    VALUES ($1, $2, $3, $4);
  `
  const insertValues = [
    originalTitle,
    convertStringToYear(productionYear),
  ]

  await db.query(insertQuery, [...insertValues, mainDirector.nome_art, true])

  directors.map(async (director) => {
    await db.query(insertQuery, [...insertValues, director.nome_art, false])
  })
}

const handleCreateIsProducer = async ({
  originalTitle,
  productionYear,
  producers,
}) => {
  const insertQuery = `
    INSERT INTO "eh_produtor"(
      filme_titulo_original,
      filme_ano_producao,
      produtor_nome_art
    )
    VALUES ($1, $2, $3);
  `

  const insertValues = [
    originalTitle,
    convertStringToYear(productionYear),
  ]

  producers.map(async (producer) => {
    await db.query(insertQuery, [...insertValues, producer.nome_art])
  })
}

const handleCreateIsScreenwriter = async ({
  originalTitle,
  productionYear,
  screenwriters,
}) => {
  const insertQuery = `
    INSERT INTO "eh_roteirista"(
      filme_titulo_original,
      filme_ano_producao,
      roteirista_nome_art
    )
    VALUES ($1, $2, $3);
  `

  const insertValues = [
    originalTitle,
    convertStringToYear(productionYear),
  ]

  screenwriters.forEach(async (screenwriter) => {
    await db.query(insertQuery, [...insertValues, screenwriter.nome_art])
  })
}

const handleCreateMainActors = async ({
  originalTitle,
  productionYear,
  mainActors,
}) => {
  const insertQuery = `
    INSERT INTO "ator_princ"(
      filme_titulo_original,
      filme_ano_producao,
      ator_nome_art
    )
    VALUES ($1, $2, $3);
  `

  const insertValues = [
    originalTitle,
    convertStringToYear(productionYear),
  ]

  mainActors.map(async (actor) => {
    await db.query(insertQuery, [...insertValues, actor.nome_art])
  })
}

const handleCreateCastActors = async ({
  originalTitle,
  productionYear,
  castActors,
}) => {
  const insertQuery = `
    INSERT INTO "ator_elenco"(
      filme_titulo_original,
      filme_ano_producao,
      ator_nome_art
    )
    VALUES ($1, $2, $3);
  `

  const insertValues = [
    originalTitle,
    convertStringToYear(productionYear),
  ]

  castActors.forEach(async (actor) => {
    await db.query(insertQuery,[...insertValues, actor.nome_art])
  })
}

const createMovie = async (req, res) => {
  const insertQuery = `
    INSERT INTO "filme"(
      titulo_original,
      ano_producao,
      data_estreia,
      titulo_no_brasil,
      classe,
      idioma_original,
      arrecadacao_prim_ano,
      tipo
    )
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8);
  `

  const insertValues = [
    req.body.originalTitle,
    convertStringToYear(req.body.productionYear),
    convertStringToDate(req.body.launchDate),
    req.body.brazilianTitle,
    req.body.genre,
    req.body.originalTitle,
    req.body.firstYearFund,
    req.body.type,
  ]
  
  try {
    await db.query(insertQuery, insertValues)

    await Promise.all([
      handleCreateIsDirector(req.body),
      handleCreateIsProducer(req.body),
      handleCreateIsScreenwriter(req.body),
      handleCreateMainActors(req.body),
      handleCreateCastActors(req.body),
      handleCreatePremiereLocation(req.body),
    ])

    res.sendStatus(200)
  } catch (err) {
    console.log(err)
    res.status(500).json(500)
  }
}

const listMovie = async (req, res) => {
  const listQuery = `
    SELECT *
    FROM "filme"
  `

  try {
    const movies = await db.query(listQuery, [])
    res.status(200).json(movies.rows)
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }

}

module.exports = {
  createMovie,
  listMovie,
}
