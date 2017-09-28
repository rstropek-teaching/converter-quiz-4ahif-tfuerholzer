// The value for `toBaseUnit` in `kg` is not correct. Shouldn't it be 0.001 instead?
var allowedUnits = [[kg = { name: "kg", toBaseUnit: 0.0001, toString: function () { return this.name; } }, g = { name: "g", toBaseUnit: 1, toString: function () { return this.name; } }],[m = { name: "m", toBaseUnit: 1, toString: function () { return this.name; } }, cm = { name: "cm", toBaseUnit: 100, toString: function () { return this.name; } }, mm = { name: "mm", toBaseUnit: 1000, toString: function () { return this.name; } }]]
if (process.argv.length == 6 && process.argv[4] === "to") {
    try {
        // You should check whether `process.argv[2]` is a number. Otherwise one of the tests fail.
        console.log(process.argv[2] + " " + process.argv[3] + " are " + (parseFloat(process.argv[2]) / (allowedUnits[0].find(function (element) { return element == process.argv[3]; })).toBaseUnit * allowedUnits[0].find(function (element) { return element == process.argv[5]; }).toBaseUnit) + " " + process.argv[5]);
    } catch (ex) {
        try {
            console.log(process.argv[2] + " " + process.argv[3] + " are " + parseFloat(process.argv[2]) / (allowedUnits[1].find(function (element) { return element == process.argv[3]; })).toBaseUnit * allowedUnits[1].find(function (element) { return element == process.argv[5]; }).toBaseUnit + " " + process.argv[5]);
        } catch (ex2){
            console.log("Invalid parameters");}}
} else {
    console.log("Invalid parameters");}
// Unter 10 Zeilen sind erreicht falls Try und Catch gemeinsam als ein Befehl zählen

// Generally: When speaking about "lines of code", people mean number of statements. It is perfectly fine to distribute
// a single statement over multiple text lines to enhance readability.
