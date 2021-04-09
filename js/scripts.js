function Pizza(size, basePrice) {
  this.size = size
  this.basePrice = basePrice
  this.totalCost = 0
}

Pizza.prototype.calculateTotal = function (toppings) {
  this.totalCost = toppings + this.basePrice
}


$(document).ready(function () {
  $().submit(function (event) {
    if ()
      let smallPizza = new Pizza("small", 10)
    let mediumPizza = new Pizza("medium", 15)
    let largePizza = new Pizza("large", 20)
  })
})