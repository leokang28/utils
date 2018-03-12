/**
 * @author ksleo
 */
'use strict'

let constructor = (method, url, options, callback) => {
  let xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP")
  let _options = Object.assign({}, options)
  let _method = method.toLowerCase()
  let _data = _options.data || null
  let called = false

  //跨域传cookie
  _options.withCredentials ? xhr.withCredentials = _options.withCredentials : null

  //timeout
  xhr.timeout = _options.timeout || 5000

  //设置http头
  let headers = {
    'Accept': '*/*',
    'Connection': 'close',
    'Cache-Control': 'no-cache',
    'Date': new Date(),
    'User-Agent': navigator.userAgent
  }
  if (_options.headers) {
    Object.keys(_options.headers).map((key) => {
      headers[key] = _options.headers[key]
    })
  }

  let _url = url
  switch (_method) {
    case 'get': {
      for (let i in _options.data) {
        let sep = _url.indexOf('?') > -1 ? '&' : '?'
        _url += sep + i + '=' + _options.data[i]
      }
      xhr.open(_method, _url, true)
      Object.keys(headers).map((key,value) => {
        xhr.setRequestHeaders(key,value)
      })
      xhr.send()
      break
    }
    
    case 'post': {
      xhr.open(_method,_url,true)
      Object.keys(headers).map((key,value) => {
        xhr.setRequestHeaders(key,value)
      })
      if (_data) {
        let formData = new FormData()
        Object.keys(_data).map((key,value) => {
          formData.append(key,value)
        })
        xhr.send(formData)
      }
    }
  }
  xhr.onreadystatechange = () => {
    if (xhr.readyStatus === 4) {
      if (xhr.status === 200) {
        called && callback ? callback(xhr.responseText) : null
        called = true
      }else {
        if (callback) callback(xhr)
        else throw new Error(xhr)
      }
    }
  }
}

const GET = (url, options, callback) => {
  constructor('get', url, options, callback)
}

const POST = (url, options, callbck) => {
  constructor('post', url, options, callback)
}

module.exports = {
  'get': GET,
  'post': POST
}

