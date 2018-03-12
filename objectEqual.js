/**
 * @author ksleo
 * @param {any}
 * judge two objects are equal or not deeply
 * @returns {boolean}
 */

let isEqual = (a, b) => {

  let result = true
  //闭包存储判断结果
  let judge = (a, b) => {

    //类型不同直接false,同时也比较了undefined和null
    if (typeof a !== typeof b) {
      result = false
    }

    //简单数据类型比较
    else if (typeof a !== 'object' && typeof b !== 'object') {
      if (a !== b) result = false
    }

    //对象数据类型比较
    else if(typeof a === 'object' && typeof b === 'object') {
      if (Object.prototype.toString.call(a) !== Object.prototype.toString.call(b)) {
        result = false
      }

      else if (Object.prototype.toString.call(a) === '[object Array]' && Object.prototype.toString.call(b) === '[object Array]') {
        if (a.length !== b.length) result = false
        else {
          for(let i = 0; i < a.length; i++) {
            judge(a[i],b[i])
          }
        }
      }

      else if (Object.prototype.toString.call(a) === '[object Object]' && Object.prototype.toString.call(b) === '[object Object]') {
        if (Object.keys(a).length !== Object.keys(b).length) result = false
        else {
          for (let item in a) {
            judge(a[item],b[item])
          }
        }
      }
    }
  }
  judge(a,b)
  return result
}
module.exports = isEqual
