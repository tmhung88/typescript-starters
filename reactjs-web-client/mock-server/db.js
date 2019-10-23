const path = require('path')
const fs = require('fs')

const createDB = () => {
  const mockDirectory = path.resolve('mock-server', 'data')
  const files = fs.readdirSync(mockDirectory)
  const mocks = {}

  files.forEach(file => {
    if (file.indexOf('.json') > -1) {
      Object.assign(mocks, require(mockDirectory + '/' + file))
    }
  })

  return mocks
}

module.exports = function() {
  return createDB()
}
