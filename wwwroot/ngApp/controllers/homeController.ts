namespace App.Controllers {

    class HomeController {
        //any public fields can be exposed to the view
        public message = "Hello world";
        public friends;
        public products;

        constructor() {
            // normally you would call a action method that brings data from the database (but for now.. let's just pretend)
            this.friends = ["Kyle", "Cartman", "Timmy", "Bob"];

            // pretend to get a list of products from the database and load it into products
            this.products = [
                { name: 'laptop', price: 999.5023 },
                { name: 'monitor', price: 150 },
                { name: 'laser mouse', price: 30 },
                { name: 'desk', price: 120 }
            ];
        }
    }

    // create a new controller called homeController inside of MyApp module
    angular.module("MyApp").controller("homeController", HomeController);
}