function Pizza(size, basePrice) {
  this.size = size
  this.basePrice = basePrice
  this.toppingsList = []
  this.toppingsTotal = 0
  this.totalCost = 0
}


Pizza.prototype.calculateTotal = function () {
  this.totalCost = this.toppingsTotal + this.basePrice
}
// Pizza.prototype.calculateToppings = function () {//DO NOT REPEAT YOURSELF
//   toppings = []
//   $('input:checkbox:checked').each(function () {
//     toppings.push(parseInt($(this).val()))
//   })
// }
Pizza.prototype.addToppings = function () {
  let toppingArray = []
  let toppingPrice = []
  $('input:checkbox:checked').each(function () {
    toppingArray.push(this.name)
    toppingPrice.push(parseInt($(this).val()))
  })
  let toppingsTotal = toppingPrice.reduce(function (a, b) {
    return a + b;
  }, 0)
  this.toppingsTotal = toppingsTotal
  this.toppingsList = toppingArray
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
    pizzaPie.addToppings()
    // pizzaPie.calculateToppings();
    pizzaPie.calculateTotal()
    console.log(pizzaPie)
    $(".firstShowing").slideUp(850)
    $(".secondShowing").slideDown(1000)
  })
})
