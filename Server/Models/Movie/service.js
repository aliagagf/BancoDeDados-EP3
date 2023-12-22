const db = require('../../DataBase/db')
const convertStringToYear = require('../../Utils/convertStringToYear')
const convertStringToDate = require('../../Utils/convertStringToDate')

const handleCreatePremiereLocation = (data) => {
  const insertQuery = `
    INSERT INTO "local_estreia_filme"(
      local_estreia,
      filme_titulo_original,
      filme_ano_producao
    )
    VALUES ($1, $2, $3);
  `

  const insertValues = [
    data.premiereLocation,
    data.originalTitle,
    convertStringToYear(data.productionYear),
  ]

  db.query(insertQuery, insertValues, (err) => {
    if (err) return
  })
}

const handleCreateIsDirector = (data) => {
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
    data.originalTitle,
    convertStringToYear(data.productionYear),
  ]

  db.query(
    insertQuery,
    [...insertValues, data.mainDirector.nome_art, true],
    (err) => {
      if (err) return
    }
  )

  if (data.directors.length != 0) {
    data.directors.forEach(director => {
      db.query(
        insertQuery,
        [...insertValues, director.nome_art, false],
        (err) => {
          if (err) return
        }
      )
    })
  }
}

const handleCreateIsProducer = (data) => {
  const insertQuery = `
    INSERT INTO "eh_produtor"(
      filme_titulo_original,
      filme_ano_producao,
      produtor_nome_art
    )
    VALUES ($1, $2, $3);
  `

  const insertValues = [
    data.originalTitle,
    convertStringToYear(data.productionYear),
  ]

  if (data.producers.length != 0) {
    data.producers.forEach(producer => {
      db.query(
        insertQuery,
        [...insertValues, producer.nome_art],
        (err) => {
          if (err) return
        }
      )
    })
  }
}

const handleCreateIsScreenwriter = (data) => {
  const insertQuery = `
    INSERT INTO "eh_roteirista"(
      filme_titulo_original,
      filme_ano_producao,
      roteirista_nome_art
    )
    VALUES ($1, $2, $3);
  `

  const insertValues = [
    data.originalTitle,
    convertStringToYear(data.productionYear),
  ]

  if (data.screenwriters.length != 0) {
    data.screenwriters.forEach(screenwriter => {
      db.query(
        insertQuery,
        [...insertValues, screenwriter.nome_art],
        (err) => {
          if (err) return
        }
      )
    })
  }
}

const handleCreateMainActors = (data) => {
  const insertQuery = `
    INSERT INTO "ator_princ"(
      filme_titulo_original,
      filme_ano_producao,
      ator_nome_art
    )
    VALUES ($1, $2, $3);
  `

  const insertValues = [
    data.originalTitle,
    convertStringToYear(data.productionYear),
  ]

  if (data.mainActors.length != 0) {
    data.mainActors.forEach(actor => {
      db.query(
        insertQuery,
        [...insertValues, actor.nome_art],
        (err) => {
          if (err) return
        }
      )
    })
  }
}

const handleCreateCastActors = (data) => {
  const insertQuery = `
    INSERT INTO "ator_elenco"(
      filme_titulo_original,
      filme_ano_producao,
      ator_nome_art
    )
    VALUES ($1, $2, $3);
  `

  const insertValues = [
    data.originalTitle,
    convertStringToYear(data.productionYear),
  ]

  if (data.castActors.length != 0) {
    data.castActors.forEach(actor => {
      db.query(
        insertQuery,
        [...insertValues, actor.nome_art],
        (err) => {
          if (err) return
        }
      )
    })
  }
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
    await new Promise((resolve, reject) => {
      db.query(insertQuery, insertValues, (err, result) => {
        if (err) {
          reject(err)
          return
        }
  
        resolve(result)
      })  
    })

    handleCreatePremiereLocation(req.body)
    handleCreateIsDirector(req.body)
    handleCreateIsProducer(req.body)
    handleCreateIsScreenwriter(req.body)
    handleCreateMainActors(req.body)
    handleCreateCastActors(req.body)
  
    console.log('Filme Inserido com Sucesso!!!')
    res.sendStatus(200)
  }
  catch(err) {
    console.log(err)
    res.sendStatus(500)
  }
  
}

module.exports = {
  createMovie
}
