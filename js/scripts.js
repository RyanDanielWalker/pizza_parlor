function Pizza(sizeChoice, basePrice) {
  this.size = sizeChoice
  this.basePrice = basePrice
  this.toppingsList = []
  this.toppingsTotal = 0
  this.totalCost = 0
}
Pizza.prototype.calculateTotal = function () {
  this.totalCost = this.toppingsTotal + this.basePrice
  $("#printSize").text(this.size)
  $("#printBasePrice").text("$" + this.basePrice + ".00")
  $("#grandTotal").text("$" + this.totalCost + ".00")
}
Pizza.prototype.addToppings = function () {
  let toppingArray = []
  let toppingPrice = []
  $('input:checkbox:checked').each(function () {
    toppingArray.push(this.name)
    toppingPrice.push(parseInt($(this).val()))
    $("#toppingsList").append("<li>" + this.name + " " + " +" + " $" + parseInt($(this).val()) + ".00" + "</li>")
  })
  let toppingsTotal = toppingPrice.reduce(function (a, b) {
    return a + b;
  }, 0)
  $("#printToppingPrice").text(" " + " $" + toppingsTotal + ".00")
  this.toppingsTotal = toppingsTotal
  this.toppingsList = toppingArray
}
$(document).ready(function () {
  $("form#pizzaOptions").submit(function (event) {
    event.preventDefault();
    let sizeChoice = $("#sizeChoice").val();
    if (sizeChoice === "1") {
      pizzaPie = new Pizza("small", 10)
    } else if (sizeChoice === "2") {
      pizzaPie = new Pizza("medium", 15)
    } else if (sizeChoice === "3") {
      pizzaPie = new Pizza("large", 20)
    } else {
      alert("Please select a size!")
      return
    }
    $("#firstShowing").slideUp(400)
    pizzaPie.addToppings()
    pizzaPie.calculateTotal()
    $("#secondShowing").fadeIn(1250)
  })
})











