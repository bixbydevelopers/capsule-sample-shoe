exports.tests = []
exports.preconditions = []

var SHOES = require("./lib/shoes");

//FindShoe
exports.function = function(name, type, minPrice, maxPrice) {
    var result = SHOES.filter(function(shoe){
      return (!name || shoe.name.toUpperCase() == name.toUpperCase()) &&
             (!type || shoe.type.toUpperCase() == type.toUpperCase()) &&
             (!maxPrice || shoe.price.value <= maxPrice.value) &&
             (!minPrice || shoe.price.value >= minPrice.value)
    })
    return result
}