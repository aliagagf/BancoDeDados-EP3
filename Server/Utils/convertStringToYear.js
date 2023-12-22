const convertStringToYear = (year) => {
  const yearInt = parseInt(year)

  const date = new Date(yearInt, 0, 1)
  return date.toISOString().split('T')[0]
}

module.exports = convertStringToYear
