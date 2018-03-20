console.log(fullName('Mike', 'Harris'));
// console.log(otherFullName('Mike', 'Harris'));
// console.log(thirdFullName('Mike', 'Harris'));

// Function declaration (gets hoisted to the top if called before it's declared)
function fullName(first : string, last : string) : string {
  return first + " " + last;
}


// Function expression (has to be defined before it can be called)
var otherFullName : (first : string, last : string) => string;

otherFullName = function (first : string, last : string) {
  return first + " " + last;
}

var thirdFullName : (first : string, last : string) => string = function (first : string, last : string) {
  return first + " " + last;
}