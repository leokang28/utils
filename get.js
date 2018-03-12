/**
 * @author ksleo
 */
let GET = require('./ajax.js')

module.exports = (url, options) => new Promise((resolve,reject) => {
  GET(url, options, (err,data) => {
    if (err) reject(err)
    else{
      typeof data === 'string' ? data = JSON.parse(data) : null
      if (data.success) {
        resolve(data)
      }else {
        reject(data.msg || 'ajax failed')
      }
    }
  })
})