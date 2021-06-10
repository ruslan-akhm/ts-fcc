var doSomething = function () {
    console.log("9");
};
var foo = "foo";
foo = 2;
foo = undefined;
console.log(foo.bar);
var doNever = function () {
    throw "never";
};
var vAny = 10;
var vUnknown = 10;
var s1 = vAny;
var s2 = vUnknown;
var pageNumber = "1";
var numericPageNumber = pageNumber;
