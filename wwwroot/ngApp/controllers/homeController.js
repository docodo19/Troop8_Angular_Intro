var App;
(function (App) {
    var Controllers;
    (function (Controllers) {
        var HomeController = (function () {
            function HomeController() {
                //any public fields can be exposed to the view
                this.message = "Hello world";
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
            return HomeController;
        }());
        // create a new controller called homeController inside of MyApp module
        angular.module("MyApp").controller("homeController", HomeController);
    })(Controllers = App.Controllers || (App.Controllers = {}));
})(App || (App = {}));
//# sourceMappingURL=homeController.js.map