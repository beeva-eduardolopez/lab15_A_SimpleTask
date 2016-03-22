var app = angular.module('mySimpleTaskApp', ['mySimpleTaskApp.controllers', 'ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: 'home.html',
            controller: 'HomePageController'
        })
        .otherwise({
            redirectTo: '/home'
        });
}]);
