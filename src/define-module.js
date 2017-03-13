// AMD导出规范
define(["./math","require"],function(math,require){
  var point = require("./point").default;
  var add = math.add;
  console.log(add(1,2));
  console.log(point(1,2));
  return add;
})