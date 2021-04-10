# _Pizza Parlor_


**By Ryan Walker**

A webpage designed to allow the user to choose their own toppings and size for a pizza they would like to order.

## Technologies Used

1. HTML
2. CSS
3. Bootstrap
4. Javascript
5. jQuery
6. VS Code
7. Adobe Photoshop

## Description

This webpage will allow the user to choose between small, medium, or large pizza sizes as well as add as many (or as few) toppings as they would like. When the user has submitted the pizza they desire, the webpage will let the user know how much their pizza will cost. 

## Requirements

* Visit this website: [Project Website](https://ryandanielwalker.github.io/pizza_parlor)
* Choose a crust size from the dropdown menu.
* Choose any toppings you may wish to add (if you do not wish to add toppings, that is fine as well.)
* Check the receipt that is shown for your grand total.

*To download this application for personal use, you may clone from this repository:* [GitHub](https://github.com/RyanDanielWalker/pizza_parlor)

## Specifications
### Describe Pizza()
Test: "It should create an object called smallPizza with size = "small," a base price = 10, a toppingsList key with an empty array as a value, a toppingsTotal key with a 0 value, and a totalCost key with a 0 value."
Code:
`let smallPizza = new Pizza("small", 10)`
Expected output:
smallPizza {
  this.size = small
  this.basePrice = 10
  this.toppingsList = [ ]
  this.toppingsTotal = 0
  this.totalCost = 0
}
Test: "It should create an object called mediumPizza with size = "medium," a base price = 15, a toppingsList key with an empty array as a value, a toppingsTotal key with a 0 value, and a totalCost key with a 0 value."
Code:
`let mediumPizza = new Pizza("medium", 15)`
Expected output:
mediumPizza {
  this.size = medium
  this.basePrice = 15
  this.toppingsList = [ ]
  this.toppingsTotal = 0
  this.totalCost = 0
}
Test: "It should create an object called largePizza with size = "large," a base price = 20, a toppingsList key with an empty array as a value, a toppingsTotal key with a 0 value, and a totalCost key with a 0 value."
Code:
`let largePizza = new Pizza("large", 10)`
Expected output:
largePizza {
  this.size = large
  this.basePrice = 20
  this.toppingsList = [ ]
  this.toppingsTotal = 0
  this.totalCost = 0
}
### Describe Pizza.prototype.addToppings()
Test: "For each checked checkbox option, it should push the name of the checkbox to an empty array."
Code:
`let toppingArray = [ ]`
`$('input:checkbox:checked').each(function () {`
   ` toppingArray.push(this.name)`
Expected output: toppingArray = ["checked boxes names"]

Test: "For each checked checkbox option, it should push the value of the checkbox to an empty array."
Code:
`let toppingPrice = [ ]`
`$('input:checkbox:checked').each(function () {`
    `toppingPrice.push(this.name)`
Expected output: toppingPrice = ["checked boxes values"]

Test: "For each checked checkbox option, it should append the name and value of the checkbox to an unordered list within the HTML."
Code:
`$('input:checkbox:checked').each(function () {`
 `$("#toppingsList").append("<li>" + this.name + " " + " +" + " $" + parseInt($(this).val()) + ".00" + "</li>")`
Expected output: un-ordered list of topping name with value attached in HTML

Test: "It should add the individual values of selected toppings from new array and return the sum as a new variable "toppingsTotal."
Code:
 `let toppingsTotal = toppingPrice.reduce(function (a, b) {`
    `return a + b;`
  `}, 0)`
Expected output: toppingsTotal = sum of elements from toppingPrice array

Test: "It should assign a value for toppingsTotal to any Pizza object the method is applied to"
Code:
`this.toppingsTotal = toppingsTotal`
Expected output: Pizza object toppingsTotal = toppingsTotal

Test: "It should assign a value for toppingsList to any Pizza object the method is applied to"
Code:
`this.toppingsList = toppingArray`
Expected output: Pizza object toppingsList = toppingArray

### Describe Pizza.prototype.calculateTotal()
Test: "It should reassign totalCost value to the sum of toppingsTotal value and basePrice value for any Pizza object the method is applied to."
Code:
`this.totalCost = this.toppingsTotal + this.basePrice`
Expected output: totalCost = sum of toppingsTotal and basePrice

Test: "It should text the object's size value to HTML"
Code:
`$("#printSize").text(this.size)`
Expected output: Object size printed to HTML

Test: "It should text the object's toppingsTotal value to HTML"
Code:
`$("#printToppingPrice").text(" " + " $" + this.toppingsTotal + ".00")`
Expected output: Object toppingsTotal printed to HTML

Test: "It should text the object's basePrice value to HTML"
Code: 
`$("#printBasePrice").text("$" + this.basePrice + ".00")`
Expected output: Object basePrice printed to HTML

Test: "It should text the object's totalCost value to HTML"
Code:
`$("#grandTotal").text("$" + this.totalCost + ".00")`
Expected output: Object totalCost printed to HTML







## Known Bugs

There are no bugs 

## License 
MIT 

Copyright (c) 2021 Ryan Walker

*I do not own anything seen here, please feel free to do with this code whatever your beautiful heart desires!*

## Contact Information
[Ryandanielwalker@gmail.com](mailto:ryandanielwalker@gmail.com)




