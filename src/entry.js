// // require('!style!css!./style.css')
// require('./style.css');
// var add = require('./define-module.js');
// console.log(add(2,2))
// document.write('It works.')
// document.write('It works.\n')
// document.write(require('./module.js'))

// console.log("point.js 为 ES6导出规范")
// // 
// import point from "./point"//ES 6导入规范
// console.log(point(1,2));

// require('./point');// commonJS 导入规范
// console.log(point(2,3));

// define(function(require){ // AMD1 导入规范
//   var point = require('./point').default;
//   console.log(point(3,3))
// })

define(["./point","./module.js","require"],function(point,module,require){
  console.log(point);
  var math = require("./math");
  console.log(math);
  console.log(module)
  document.write('It works.')
  var t = require("./printCats").default();
})
// console.log("==============");

// import math from "./math.js"


// console.log("math",math);