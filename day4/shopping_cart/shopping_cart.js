var Cart = function () {
	this.total = 0;
	this.items = [];
};

Cart.prototype.add = function (item) {
	this.applyDiscount(item);
	console.log('You are adding a ' + item.name + ' at a price of ' + item.price);
	this.items.push(item);
};

Cart.prototype.applyDiscount = function (item) {
	if (item.name === 'orange') {
		var total_oranges = 0;
		this.items.forEach (function(item) {
			total_oranges += item.name === 'orange' ? 1 : 0;
		});

		if (total_oranges > 4) {
			item.price = item.price / 2;
		} 

	} else if (item.name === 'apple') {
		var apple = new Item('apple', 0);
		this.items.push(apple);
	}
};

Cart.prototype.calculateTotal = function () {
	this.items.forEach (function(item) {
		this.total += item.price;
	}.bind(this));
};

var Item = function (name, price) {
	this.name = name;
	this.price = price;
};



var cart = new Cart();

cart.add(new Item('banana', 20));
cart.add(new Item('orange', 5));
cart.add(new Item('orange', 5));
cart.add(new Item('orange', 5));
cart.add(new Item('orange', 5));
cart.add(new Item('orange', 5));
cart.add(new Item('orange', 5));
cart.add(new Item('orange', 5));
cart.add(new Item('apple', 10));

cart.calculateTotal();

console.log('Your total is ' + cart.total);