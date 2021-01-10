const Module = module.constructor;
function _getPrivateMember() {
    arguments.varName = arguments[0];
    if (arguments.varName && typeof arguments.varName === "string") {
        return eval(arguments.varName);
    } else {
        throw new TypeError("__get__ expects a non-empty string");
    }
}
function _hackCode(){
   return  "\n Object.defineProperty(module.exports, \"getPrivateMember\", {enumerable: false, value: " + _getPrivateMember.toString() + ", " + "writable: true}); ";
}
function _fakeModule(parentModule, id) {
    const targetPath = Module._resolveFilename(id, parentModule);
    const targetModule = new Module(targetPath, parentModule);
    Module.wrapper[1] = _hackCode() + Module.wrapper[1];
    targetModule.load(targetModule.id);
    return targetModule.exports;
}
function injectLib(fileName) {
    return _fakeModule(module.parent, fileName)
}
module.exports = injectLib;