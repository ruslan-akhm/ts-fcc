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
var page = "1";
var pageNumber = page;
var someElement = document.querySelector(".foo");
someElement.addEventListener("blur", function (event) {
    var target = event.target;
    console.log(target.value);
});
var User = /** @class */ (function () {
    function User(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    User.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    return User;
}());
var user = new User("Rus", "Lan");
console.log(user.getFullName);
