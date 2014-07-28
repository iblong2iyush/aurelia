/**
 * Created by Ayush on 17/5/14.
 */

var landApp = angular.module('landApp',['ngRoute','ngAnimate']);

landApp.controller("ZipCodeFrmCtrl", function ($scope, $location, $routeParams) {
    $scope.zipCode = '';
        if(angular.equals($scope.zipCode, $routeParams.zipCode)) {
            return true;
        }
        else {
            return 'Location Unavailable';
        }
    });
landApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/', {
            templateUrl: '/index.html'
        }).
        when('/store', {
        templateUrl: '/store.html'
        }).
        when('/faq', {
            templateUrl: 'partials/footer/faq.html'
        }).
        when('/terms', {
            templateUrl: 'partials/footer/terms.html'
        }).
        when('/privacy', {
            templateUrl: 'partials/footer/privacy.html'
        }).
        when('/blog', {
            templateUrl: 'partials/footer/blog.html'
        }).
        when('/contact', {
            templateUrl: 'partials/footer/contact.html'
        }).
        otherwise({
            redirectTo: '/store'
        });
}]);