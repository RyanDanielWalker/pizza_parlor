function Pizza(size, basePrice) {
  this.size = size
  this.basePrice = basePrice
  this.totalCost = 0
}

Pizza.prototype.calculateTotal = function (toppings) {
  this.totalCost = toppings + this.basePrice
}


$(document).ready(function () {


  $("form#sizeSelect").submit(function (event) {
    event.preventDefault();
    let size = $("#sizeChoice").val();
    if (size === "1") {
      pizzaPie = new Pizza("small", 10)
    }
    if (size === "2") {
      pizzaPie = new Pizza("medium", 15)
    }
    if (size === "3") {
      pizzaPie = new Pizza("large", 20)
    }

  })

  // $("form#pizzaOptions").submit(function (event) {
  //   event.preventDefault
  //   let size = $('#sizeChoice').val()
  //   let toppings = parseInt($("form#pizzaOptions").val())
  //   if (size === "small") {
  //     smallPizza.calculateTotal(toppings)
  //     console.log(smallPizza)
  //   } else if (size === "medium") {
  //     mediumPizza.calculateTotal(toppings)
  //   } else if (size === "large") {
  //     largePizza.calculateTotal(toppings)
  //   }
  // })










})


