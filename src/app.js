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
}

module.exports = {
    Cube:Cube,
    Basket: Basket
}

