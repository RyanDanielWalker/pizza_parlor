function Pizza(size, basePrice) {
  this.size = size
  this.basePrice = basePrice
  this.totalCost = 0
}

Pizza.prototype.calculateTotal = function (toppings) {
  this.totalCost = toppings + this.basePrice
}
