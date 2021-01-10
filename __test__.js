const assert = require("assert");
const lib = require("./libhack");

//这里既想对 _public 方法做单元测试
console.log(lib("./library.js").getPrivateMember("_private")())
assert(lib("./library.js").getPrivateMember("_private")() === '_private');