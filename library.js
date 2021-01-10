function _private(){
    return "_private";
}
eval("_private")
module.exports = function _public(){
     //... whatever
     return _private();
}