;
var oldCivic = {
    name: "civic",
    year: new Date(),
    broken: true,
    summary: function () {
        return "".concat(this.name);
    }
};
var drink = {
    color: "brown",
    carbonated: true,
    sugar: 40,
    summary: function () {
        return "My drink has  ".concat(this.sugar, " grams of sugar");
    }
};
var printSummary = function (vehicle) {
    console.log(vehicle.summary());
};
printSummary(oldCivic);
printSummary(drink);
