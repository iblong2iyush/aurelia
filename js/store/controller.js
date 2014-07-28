'use strict';

// the storeController contains two objects:
// - store: contains the product list
// - cart: the shopping cart object
function storeController($scope, $route, $routeParams, $location, DataService) {

    $scope.name = "storeController";
    $scope.$route = $route;
    $scope.$location = $location;
    $scope.$routeParams = $routeParams;
    $scope.orderProp = "name";
    // get store and cart from service
    $scope.store = DataService.store;
    $scope.cart = DataService.cart;

    // use routing to pick the selected product
    if ($routeParams.productSku != null) {
        $scope.product = $scope.store.getProduct($routeParams.productSku);
    }
}

storeApp.controller('HeadCtrl', ['$scope', '$http',
    function($scope, $http) {
        $http.get('js/json/local_data.json').success(function(data) {
            $scope.somethings = data;
        });
    }]);

storeApp.controller('FruitsCtrl', ['$scope', '$http',
    function($scope, $http) {
        $http.get('js/json/fruits_data.json').success(function(data) {
            $scope.fruits = data;
        });
    }]);

storeApp.controller('ImgCtrl', ['$scope', '$http',
    function($scope, $http) {
        $http.get('js/json/recipes_data.json').success(function(data) {
            $scope.images = data;
        });
    }]);

storeApp.controller('cartCtrl', ['$scope', '$http',
    function($scope, $http) {
        $http.get('js/json/recipes_data.json').success(function(data) {
            $scope.images = data;
        });
    }]);

storeApp.controller('SrchCtrl', ['$scope', '$http',
    function($scope, $http) {
        $http.get('js/json/keywords_data.json').success(function(data) {
            $scope.keywords = data;
        });
    }]);

storeApp.controller('isFav', ['$scope',
    function($scope) {
            $scope.isFav = true;
            $scope.favs = '';
    }]);

function switchCtrl($scope) {
    $scope.zone = 'Rajpur Road';
}