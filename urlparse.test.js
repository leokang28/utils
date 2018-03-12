/**
 * @author ksleo
 * parse a url string and return a object
 */
let test_url = 'https://www.goog-2le.com/search?source=hp&ei=PSVwWpyHCpGEjwPD66jIDA'
let parser = (url) => {
  let regs = {
    reg_protocal: /[a-z]+:/,
    reg_host: /\/\/\w+(\.\w+-{0,}\w+)+\//,
    reg_path: /(\/{1}[a-zA-Z-_\.0-9]{0,})+/,
    // reg_params: /?(\w+\=\w+)$/
    // /\/{1}(\w+[-_\.]{0,}\w+){0,1}/
  }

  let result = {
    protocal: null,
    host: null,
    path: null,
    params: {

    }
  }
  result.protocal = test_url.match(regs.reg_protocal)[0].slice(0,-1) || null
  result.host = test_url.match(regs.reg_host)[0].slice(2,-1) || null
  result.path = test_url.match(regs.reg_path)[0]
  result.path = result.path.slice(result.path.indexOf(result.host)+result.host.length)
  return result
}
console.log(parser())