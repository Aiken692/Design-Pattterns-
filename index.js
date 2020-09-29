// const ShoppingCart = require('./Cart/shoppingCart');
// const Laptop = require('./models/laptop');



// class Main {
//     main() {
//         //Create Instances of computer type;
//         const appleLaptop = new Laptop("8hrs", "8GB", "1TB", "15inches", "grey", 1500);

//         // Create Instance of ShoppingCart
//         const shoppingCart = new ShoppingCart();

//         //Add created instance of type computer into the shoppingcart
//         shoppingCart.addItems(appleLaptop);

//         //Show items in the ShoppingCart.
//         const display = shoppingCart.showAllItems()
//         return console.log(display);
//     }
// }

// // Execute program 
// const main = new Main();
// main.main();


function product(name, size, price) {
    this.name = name;
    this.size = size;
    this.price = price;
}

var computer = new product("lenevo", 17, 2000000);
var computer2 = new product("acer",15, 1500000);
var computer3 = product("Mac",17, 13000000);
var computer4 = new product("Hp",13, 1300000);


shoppingCart = [];
shoppingCart.push(computer, computer2, computer3, computer4);


shoppingCart.splice(0, 3);

console.log(shoppingCart);