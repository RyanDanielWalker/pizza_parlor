function Pizza(size, basePrice) {
  this.size = size
  this.basePrice = basePrice
  this.totalCost = 0
}

Pizza.prototype.calculateTotal = function (toppings) {
  this.totalCost = toppings + this.basePrice
}


$(document).ready(function () {
  $(form#selectSize).submit(function (event) {
    event.preventDefault
    let size = $('#sizeChoice').val()
    if (size === "1") {
      let smallPizza = new Pizza("small", 10)
    } else if (size === "2") {
      let mediumPizza = new Pizza("medium", 15)
    } else if (size === "3") {
      let largePizza = new Pizza("large", 20)
    }

  })
})