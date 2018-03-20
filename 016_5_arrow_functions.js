var fullName = function (first, last) {
    return first + " " + last;
};
console.log(fullName("Mike", "Harris")); // Mike Harris
var gradeGenerator = function (grade) {
    if (grade < 60) {
        return 'F';
    }
    else if (grade >= 60 && grade < 70) {
        return 'D';
    }
    else if (grade >= 70 && grade < 80) {
        return 'C';
    }
    else if (grade >= 80 && grade < 90) {
        return 'B';
    }
    else {
        return 'A';
    }
};
console.log(gradeGenerator(45)); // F
console.log(gradeGenerator(100)); // A
console.log(gradeGenerator(80)); // B
//# sourceMappingURL=016_5_arrow_functions.js.map