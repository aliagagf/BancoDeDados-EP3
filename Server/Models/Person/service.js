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
      res.sendStatus(500)
      return
    }

    console.log(result)
    console.log('Usuário Inserido com Sucesso!!!')
  
    res.sendStatus(200)
  })
}

module.exports = {
  createPerson,
}
