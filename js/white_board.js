// base price for pizza sizes
// additional prices for added toppings
// return a final cost

function Pizza(size, basePrice) {
  this.size = size
  this.basePrice = basePrice
  this.toppings = 0
  this.totalCost = 0
}
pizza.prototype.calculateTotal(); {
  this.totalCost = this.toppings + this.basePrice
}

pizza.prototype.calculateToppings(toppings); {
  this.toppings = toppings
}


//gather sum of all inputted values from toppings selector and add to price
//each topping will have a value associated with it upon selection 

test: "It should create an object called smallPizza with size = "small" and a base price = 10 "
code:
let smallPizza = new Pizza("small", 10)
expected output:
smallPizza {
  size: small
  basePrice: 10
  toppings: 0
  totalCost: 0
}

test: "It should create an object called mediumPizza with size = "medium" and a base price = 15 "
code:
let mediumPizza = new Pizza("medium", 15)
expected output:
mediumPizza {
  size: medium
  basePrice: 15
  toppings: 0
  totalCost: 0
}

test: "It should create an object called largePizza with size = "large" and a base price = 20 "
code:
let largePizza = new Pizza("large", 10)
expected output:
largePizza {
  size: large
  basePrice: 20
  toppings: 0
  totalCost: 0
}