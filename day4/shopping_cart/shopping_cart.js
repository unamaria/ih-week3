var Cart = function () {
	this.total = 0;
	this.items = 0;
};

Cart.prototype.add = function (amount, item) {
	this.items += amount;
	if (item.apply_discount) {
		this.total += item.price * amount * item.discount;
	} else {
		this.total += item.price * amount;
	}
	console.log('Adding ' + amount + ' to the cart at a price of ' + item.price);
};

Cart.prototype.calculateTotal = function () {
	return this.items > 5 ? this.total * 0.9 : this.total;
};

var Item = function (name, price, discount) {
	this.price = price;
	this.discount = discount;
	this.apply_discount = false;
};



var cart = new Cart();

var banana = new Item(20);
var orange = new Item(5);
var apple = new Item(10, 0.5);
apple.apply_discount = true;

cart.add(1, banana);
cart.add(2, orange);
cart.add(2, apple);

console.log('Your total is ' + cart.calculateTotal());