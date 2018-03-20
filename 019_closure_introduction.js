// functions have access to any public variables in the outer scope
function nameFunction(name) {
    var n = name;
    function printName() {
        console.log(n);
    }
    printName();
}
nameFunction('Mike');
//##################################
// The inner function maintains access to the outer scope even AFTER the values are returned!
function nameFunction2(name) {
    var n = name;
    return function () {
        console.log(n);
    };
}
var nameAgain = nameFunction2('Holly');
nameAgain();
//##################################
function lineup() {
    var nowBatting = 1;
    return {
        nextBatter: function () { nowBatting++; },
        currentBatter: function () { return nowBatting; }
    };
}
var batters = lineup();
console.log(batters.currentBatter());
batters.nextBatter();
console.log(batters.currentBatter());
batters.nextBatter();
console.log(batters.currentBatter());
var pitchers = lineup();
console.log(pitchers.currentBatter());
//# sourceMappingURL=019_closure_introduction.js.map