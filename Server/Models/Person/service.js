const db = require('../../DataBase/db')
const convertStringToYear = require('../../Utils/convertStringToYear')

const getRoles = (roles) => roles.reduce(
  (acc, value) => {
    if (value.trim() === 'Diretor') acc = { ...acc, flagDiretor: true }

    if (value.trim() === 'Produtor') acc = { ...acc, flagProdutor: true }

    if (value.trim() === 'Roteirista') acc = { ...acc, flagRoteirista: true }

    if (value.trim() === 'Ator') acc = { ...acc, flagAtor: true }

    return acc
  },
  {},
)

const createPerson = async (req, res) => {
  const roles = getRoles(req.body.roles)

  const insertQuery = `
    INSERT INTO "pessoa"(
      nome_art,
      nome_verdadeiro,
      sexo,
      ano_nasc,
      site,
      ano_inic,
      nro_total_anos,
      situacao,
      flag_diretor,
      flag_produtor,
      flag_roteirista,
      flag_ator
    )
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12);
  `

  const insertValues = [
    req.body.artisticName,
    req.body.realName,
    req.body.gender,
    convertStringToYear(req.body.birthYear),
    req.body.site,
    convertStringToYear(req.body.startYear),
    parseInt(req.body.workYears),
    req.body.situation,
    roles.flagDiretor ? 1 : 0,
    roles.flagProdutor ? 1 : 0,
    roles.flagRoteirista ? 1 : 0,
    roles.flagAtor ? 1 : 0
  ]

  try {
    await db.query(insertQuery, insertValues)

    res.sendStatus(200)
  } catch(err) {
    console.log(err)
    res.sendStatus(500)
  }
}

const listActors = async (req, res) => {
  const listQuery = `
    SELECT *
    FROM "pessoa"
    WHERE flag_ator = TRUE;
  `

  try {
    const actors = await db.query(listQuery, [],)
    
    res.status(200).json(actors.rows)
  } catch (err) {
    console.log(err)
    res.sendStatus(500)
  }
}

const listDirectors = async (req, res) => {
  const listQuery = `
    SELECT *
    FROM "pessoa"
    WHERE flag_diretor = TRUE;
  `
  try {
    const directors = await db.query(listQuery, [],)
    
    res.status(200).json(directors.rows)
  } catch (err) {
    console.log(err)
    res.sendStatus(500)
  }
}

const listProducers = async (req, res) => {
  const listQuery = `
    SELECT *
    FROM "pessoa"
    WHERE flag_produtor = TRUE;
  `

  try {
    const producers = await db.query(listQuery, [],)
    
    res.status(200).json(producers.rows)
  } catch (err) {
    console.log(err)
    res.sendStatus(500)
  }
}

const listScreenwriters = async (req, res) => {
  const listQuery = `
    SELECT *
    FROM "pessoa"
    WHERE flag_roteirista = TRUE;
  `

  try {
    const screenwriters = await db.query(listQuery, [],)
    
    res.status(200).json(screenwriters.rows)
  } catch (err) {
    console.log(err)
    res.sendStatus(500)
  }
}

const listAllPerson = async (req, res) => {
  const listQuery = `
    SELECT *
    FROM "pessoa";
  `

  try {
    const persons = await db.query(listQuery, [],)
    
    res.status(200).json(persons.rows)
  } catch (err) {
    console.log(err)
    res.sendStatus(500)
  }
}

module.exports = {
  createPerson,
  listActors,
  listAllPerson,
  listDirectors,
  listProducers,
  listScreenwriters,
}
