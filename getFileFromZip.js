const {task} = require('folktale/concurrency/task')

module.exports = (zip, path) =>
  task(({resolve, reject}) =>
    zip
      .file(path)
      .async('string')
      .then(function (content) {
        resolve([path, JSON.parse(content)])
      })
      .catch(function (error) {
        reject(error)
      })
  )
