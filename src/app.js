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

    addItem(name, quantity, price) {
        const existingItemIndex = this.items.findIndex(item => item.name === name);

        if (existingItemIndex !== -1) {
            this.items[existingItemIndex].quantity += quantity;
        } else {
            this.items.push({ name, quantity, price });
        }
    }

    removeItem(name, quantity) {
        const existingItemIndex = this.items.findIndex(item => item.name === name);

        if (existingItemIndex !== -1) {
            this.items[existingItemIndex].quantity -= quantity;

            if (this.items[existingItemIndex].quantity <= 0) {
                this.items.splice(existingItemIndex, 1);
            }
        }
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

    viewStock() {
        console.log('The stock:');
        this.items.forEach(item => {
            console.log(`${item.name}: ${item.quantity} units, ${item.price}€ each`);
        });
    }


}

module.exports = {
    Cube:Cube,
    Basket: Basket
}

