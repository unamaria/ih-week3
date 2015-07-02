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
};

Cart.prototype.calculateTotal = function () {
	return this.items > 5 ? this.total * 0.9 : this.total;
};

var Item = function (price, discount) {
	this.price = price;
	this.discount = discount;
	this.apply_discount = false;
};

cart = new Cart();

banana = new Item(20, 0.9);

cart.add(3, banana);

console.log('Your total is ' + cart.total);