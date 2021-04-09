// let smallPizza;
// let mediumPizza;
// let largePizza;

function Pizza(size, basePrice) {
  this.size = size
  this.basePrice = basePrice
  this.totalCost = 0
}

Pizza.prototype.calculateTotal = function (toppings) {
  this.totalCost = toppings + this.basePrice
}


$(document).ready(function () {
  let smallPizza = new Pizza("small", 10)
  let mediumPizza = new Pizza("medium", 15)
  let largePizza = new Pizza("large", 20)
  $("form#pizzaOptions").submit(function (event) {
    event.preventDefault
    let size = $('#sizeChoice').val()
    let toppings = parseInt($("form#pizzaOptions").val())
    if (size === "small") {
      smallPizza.calculateTotal(toppings)
      console.log(smallPizza)
    } else if (size === "medium") {
      mediumPizza.calculateTotal(toppings)
    } else if (size === "large") {
      largePizza.calculateTotal(toppings)
    }




  })
})


