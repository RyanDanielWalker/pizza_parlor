function Pizza(sizeChoice) {
  this.size = sizeChoice
  this.basePrice = 0
  this.toppingsList = []
  this.toppingsTotal = 0
  this.totalCost = 0
}
Pizza.prototype.calculateTotal = function () {
  if (this.size === "small") {
    this.basePrice = 10
  } else if (this.size === "medium") {
    this.basePrice = 15
  } else if (this.size === "large") {
    this.basePrice = 20
  }
  this.totalCost = this.toppingsTotal + this.basePrice
}
Pizza.prototype.addToppings = function (toppingPrice, toppingArray) {
  let toppingsTotal = toppingPrice.reduce(function (a, b) {
    return a + b;
  }, 0)
  this.toppingsTotal = toppingsTotal
  this.toppingsList = toppingArray
}
$(document).ready(function () {
  $("#firstShowing").slideDown(850)
  $("form#pizzaOptions").submit(function (event) {
    event.preventDefault();
    let sizeChoice = $("#sizeChoice").val();
    if (sizeChoice) {
      let pizzaPie = new Pizza(sizeChoice)
      let toppingArray = []
      let toppingPrice = []
      $('input:checkbox:checked').each(function () {
        toppingArray.push(this.name)
        toppingPrice.push(parseInt($(this).val()))
        $("#toppingsList").append("<li>" + this.name + " " + " +" + " $" + parseInt($(this).val()) + ".00" + "</li>")
      })
      pizzaPie.addToppings(toppingPrice, toppingArray)
      pizzaPie.calculateTotal()
      $("#printSize").text(pizzaPie.size)
      $("#printToppingPrice").text(" " + " $" + pizzaPie.toppingsTotal + ".00")
      $("#printBasePrice").text("$" + pizzaPie.basePrice + ".00")
      $("#grandTotal").text("$" + pizzaPie.totalCost + ".00")
      $("#firstShowing").slideUp(800)
      $("#secondShowing").fadeIn(2250)
    } else {
      alert("Please select a size!")
    }
  })
})