// Boolean - Stands for having a true or false value.  ie:
let paidAccount : boolean = true;

// Number - Flexible data type that works for integer, float, etc.  ie:
let age : number = 33;
var taxRate : number = 7.5;

// String - Data type for letters/words.  ie:
var fullName : string = "Mike Harris";

// Array - A collection of data.  ie:
var ages : number[] = [33, 28, 11];

// Tuple - A collection used when you know the number of elements and their data types.  ie:
let player : [number, string, number, number];
player = [3, 'Corerra', .333, 33];

// Enum - Allows you to use a set number of items which can be used as methods for stages, etc.
enum ApprovalStatus {Approved, Pending, Rejected};
let job : ApprovalStatus = ApprovalStatus.Pending;

// Any - Can be used like a regular data type, but it can be very error prone. You should only use it when there is no other option. ie. Data from an API.  ie:
var apiData : any[] = [123, 'Jordan', false];

// Void - Used for functions to void out a returned value from the function. Used anytime a function performs actions, but returns nothing.  ie:
function printOut(msg: string) : void {
  console.log(msg);
}