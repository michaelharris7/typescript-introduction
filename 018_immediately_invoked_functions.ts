var names : string[] = ['Mike', 'Holly', 'Brayden'];
var counter : number = 0;

(function() {
  for (let name in names) {
    counter++;
  }
})();

console.log(counter);