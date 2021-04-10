function Pizza(sizeChoice, basePrice) {
  this.size = sizeChoice
  this.basePrice = basePrice
  this.toppingsList = []
  this.toppingsTotal = 0
  this.totalCost = 0
}
Pizza.prototype.calculateTotal = function () {
  this.totalCost = this.toppingsTotal + this.basePrice
}
Pizza.prototype.addToppings = function () {
  let toppingArray = []
  let toppingPrice = []
  $('input:checkbox:checked').each(function () {
    toppingArray.push(this.name)
    toppingPrice.push(parseInt($(this).val()))
    $("#toppingsList").append("<li>" + this.name + " " + "$" + parseInt($(this).val()) + ".00" + "</li>")
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
    let sizeChoice = $("#sizeChoice").val();
    if (sizeChoice === "1") {
      pizzaPie = new Pizza("small", 10)
      $("#printSize").text("small")
    }
    if (sizeChoice === "2") {
      pizzaPie = new Pizza("medium", 15)
      $("#printSize").text("medium")
    }
    if (sizeChoice === "3") {
      pizzaPie = new Pizza("large", 20)
      $("#printSize").text("large")
    }
    pizzaPie.addToppings()
    pizzaPie.calculateTotal()
    // pizzaPie.toppingsList.forEach(function (element) {
    //   $("#toppingsList").append("<li>" + element + "</li>")
    // })

    console.log(pizzaPie)

    $(".firstShowing").slideUp(850)
    $(".secondShowing").slideDown(1000)


  })
})