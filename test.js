let unique = require('./unique')
let equal = require('./objectEqual')
let judge = require('./objJudgement')
let a= [{},{},[],[],[],{},{},[]]
let b = ['a','b',{},'c','d','b','c',{},[],null,undefined,null,[],[],{},{},[],a]
console.log(judge.isNum(1))
unique(b)
console.log(b)
