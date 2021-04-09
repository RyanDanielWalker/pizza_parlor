function Pizza(size, basePrice) {
  this.size = size
  this.basePrice = basePrice
  this.toppingsTotal = 0
  this.totalCost = 0
}

Pizza.prototype.calculateTotal = function () {
  this.totalCost = this.toppingsTotal + this.basePrice
}

Pizza.prototype.calculateToppings = function () {
  toppings = []
  $('input:checkbox:checked').each(function () {
    toppings.push(parseInt($(this).val()))
  })
  let toppingsTotal = toppings.reduce(function (a, b) {
    return a + b;
  }, 0)
  this.toppingsTotal = toppingsTotal
}









$(document).ready(function () {
  $("form#pizzaOptions").submit(function (event) {
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
    pizzaPie.calculateToppings();
    pizzaPie.calculateTotal()
    console.log(pizzaPie)
    $(".firstShowing").slideUp(850)
    $(".secondShowing").slideDown(1000)
  })
})



















