// functions have access to any public variables in the outer scope

function nameFunction(name: string) : void {
  var n : string = name;

  function printName() {
    console.log(n);
  }

  printName();
}

nameFunction('Mike');

//##################################

// The inner function maintains access to the outer scope even AFTER the values are returned!

function nameFunction2(name: string) {
  var n : string = name;

  return function() {
    console.log(n);
  }
}

var nameAgain = nameFunction2('Holly');
nameAgain();

//##################################

// Closures allow variable manipulation with returned inner functions even though those variables aren't accessible outside of the functions. Instances of objects can be created with different values in each.

function lineup() {
  var nowBatting : number = 1;

  return {
    nextBatter() { nowBatting++ },
    currentBatter() { return nowBatting }
  }
}

let batters = lineup();

console.log(batters.currentBatter());
batters.nextBatter();
console.log(batters.currentBatter());
batters.nextBatter();
console.log(batters.currentBatter());

let pitchers = lineup();
console.log(pitchers.currentBatter());