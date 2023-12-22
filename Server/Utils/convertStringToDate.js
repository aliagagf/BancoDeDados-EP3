const convertStringToDate = (date) => {
  const parts = date.split('-')

  const dateObject = new Date(parseInt(parts[2]), parseInt(parts[1]) - 1, parseInt(parts[0]))

  return dateObject.toISOString().split('T')[0]
} 

module.exports = convertStringToDate
