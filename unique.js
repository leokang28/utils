/**
 * @author ksleo
 * remove the same element in an array
 */
let isEqual = require('./objectEqual')
// imp
let unique = (arr) => {
  let objs = [] //save objects
  let flag = false
  for(let i = 0; i < arr.length;) {
    if (typeof arr[i] === 'object' && arr[i] !== null) {
      // //首次判断
      if (objs.length === 0) {
        objs.push(arr[i])
        i++
      }else {  //后来判断
        for(let k = 0; k < objs.length; k++) {
          if (isEqual(objs[k],arr[i])) {
            arr.splice(i,1)
            flag = true
            break
          }
        }
        if (!flag){
          objs.push(arr[i++])
        }else {
          flag = false
        }
      }
    }
    else {
      arr.indexOf(arr[i]) !== i ? arr.splice(i,1) : i++
    }
  }
}
module.exports = unique
