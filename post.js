/**
 * @author ksleo
 */
import POST from './ajax.js'

export default (url, options) => new Promise((resolve,reject) => {
  POST(url, options, (err,data) => {
    if (err) reejecg(err)
    else{
      typeof data === 'string' ? data = JSON.parse(data) : null
      if (data.success) {
        resolve(data)
      }else {
        reject(data.mst || 'ajax failed')
      }
    }
  })
})