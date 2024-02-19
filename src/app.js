class Cube {
    constructor(length) {
        this.length = length;
    }

    getSideLength () {
        return this.length;
    }

    getSurfaceArea () {
        return (this.length * this.length) * 6;
    }

    getVolume () {
        return Math.pow(this.length,3);
    }
}


class Basket {
    constructor() {
        this.items = [];
    }

    addItem(name, price) {
        return this.items.push({name, price});
    }

    removeItem(name) {
        this.items = this.items.filter(item => item.name !== name);
    }

    getTotalPrice() {
        return this.items.reduce((total, item) => total + item.price, 0);
    }

    emptyBasket() {
        this.items = [];
    }

    addDiscount(discount) {
        this.items = this.items.map(item => {
            item.price = item.price - (item.price * discount);
            item.price = parseFloat(item.price.toFixed(1));
            return item;
        });
    }

}

module.exports = {
    Cube:Cube,
    Basket: Basket
}

