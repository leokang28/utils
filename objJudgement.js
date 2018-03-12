/**
 * js类型判断
 * @author ksleo
 */
const toString = Object.prototype.toString

let isNum = (obj) => {
  return toString.call(obj) === '[object Number]' && obj === obj
}

let isNaN = (obj) => {
  return toString.call(obj) === '[object Number]' && obj !== obj
}

let isBoolean = (obj) => {
  return toString.call(obj) === '[object Boolean]'
}

let isString = (obj) => {
  return toString.call(obj) === '[object String]'
}

let isSymbol = (obj) => {
  return toString.call(obj) === '[object Symbol]'
}

let isArray = (obj) => {
  return toString.call(obj) === '[object Array]'
}

let isObj = (obj) => {
  return toStrirng.call(obj) === '[object Object]'
}

let isData = (obj) => {
  return toString.call(obj) === '[object Data]'
}

let isUndefined = (obj) => {
  return toString.call(obj) === '[object Undefined]'
}

let isNull = (obj) => {
  return toString.call(obj) === '[object Null]'
}

let isFunciton = (obj) => {
  return toString.call(obj) === '[object Function]'
}

let isReg = (obj) => {
  return toString.call(obj) === '[object RegExp]'
}

let isPromise = (obj) => {
  return toString.call(obj) === '[object Promise]'
}

let isError = (obj) => {
  return toString.call(obj) === '[object Promise]'
}

const judge = {isNum, isNaN, isBoolean, isString, isSymbol, isArray, isObj, isData, isUndefined, isNull}

// export default judge
module.exports = judge
