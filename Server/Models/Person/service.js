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

const createPerson = (req, res) => {
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

  db.query(insertQuery, insertValues, (err, result) => {
    if (err) {
      console.log(err)
      res.status(500).json(err)
      return
    }

    res.sendStatus(200).json(result)
  })
}

const listActors = (req, res) => {
  const listQuery = `
    SELECT *
    FROM "pessoa"
    WHERE flag_ator = TRUE;
  `

  db.query(listQuery, [], (err, result) => {
    if (err) {
      console.log(err)
      res.status(500).json(err)
      return
    }
    
    res.status(200).json(result.rows)
  })
}

const listDirectors = (req, res) => {
  const listQuery = `
    SELECT *
    FROM "pessoa"
    WHERE flag_diretor = TRUE;
  `
  db.query(listQuery, [], (err, result) => {
    if (err) {
      console.log(err)
      res.status(500).json(err)
      return
    }
  
    res.status(200).json(result.rows)
  })
}

const listProducers = (req, res) => {
  const listQuery = `
    SELECT *
    FROM "pessoa"
    WHERE flag_produtor = TRUE;
  `

  db.query(listQuery, [], (err, result) => {
    if (err) {
      console.log(err)
      res.status(500).json(err)
      return
    }
  
    res.status(200).json(result.rows)
  })
}

const listScreenwriters = (req, res) => {
  const listQuery = `
    SELECT *
    FROM "pessoa"
    WHERE flag_roteirista = TRUE;
  `

  db.query(listQuery, [], (err, result) => {
    if (err) {
      console.log(err)
      res.status(500).json(err)
      return
    }
  
    res.status(200).json(result.rows)
  })
}

const listAllPerson = (req, res) => {
  const listQuery = `
    SELECT *
    FROM "pessoa";
  `

  db.query(listQuery, [], (err, result) => {
    if (err) {
      console.log(err)
      res.status(500).json(err)
      return
    }

    res.status(200).json(result.rows)
  })
}

module.exports = {
  createPerson,
  listActors,
  listAllPerson,
  listDirectors,
  listProducers,
  listScreenwriters,
}
