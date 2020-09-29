class ShoppingCart {
    constriuctor(){
        //Initialize an empty Array
        this.items = [];
    }

    // Add item into array
    addItems(someItem) {
        return this.items.push(someItem);
    }

    //Remove item from array;
    removeItem(someItem) {
        const index = this.items.indexOf(someItem);
        return this.items.splice(index, 1);
    }

    //SHow all items in array;
    showAllItems() {
        return this.items;
    }
}

module.exports = ShoppingCart