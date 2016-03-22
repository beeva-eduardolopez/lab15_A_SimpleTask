var controllers = angular.module('mySimpleTaskApp.controllers', []);

controllers.controller('HomePageController', ['$scope', '$rootScope', '$http', function($scope, $rootScope, $http) {
    $scope.showAlert = function() {
        alert('This is an alert! Run!')
    }

    $scope.executeFunction = function(myText) {
        if (myText != undefined)
            alert(myText);
    }

    $scope.color = 'tomato';
    $scope.Colors = ["aqua", "azure", "beige", "tan", "blue", "brown", "cyan",
        "darkblue", " darkcyan", " darkgrey", "darkgreen",
        " darkkhaki", " darkmagenta", "darkolivegreen", "darkorange", "darkorchid", "darkred", " darksalmon", " darkviolet", " gold", " green", "indigo", " khaki", " lightblue", "lightcyan", "lightgreen", " lightgrey", " lightpink", "lightyellow", "lime", "magenta", "maroon", " navy", " olive", " orange", " pink", "purple", " violet", " red ", " silver", "yellow "];

    $scope.onMouseover = function() {
        var color = Math.floor(Math.random() * 40);
        $scope.color = $scope.Colors[color];
    };

    $scope.onMouseLeave = function() {
        $scope.color = 'tomato';
    };

    $scope.changeColor = function(value) {
        var colorP = Math.floor(Math.random() * 40);
        $scope.colorP = $scope.Colors[colorP];
    };

    $scope.addName = function() {
        $scope.myName = 'Edu';
    }


    $scope.showFriends = function() {
        $scope.friends = [
            {
                name: 'Javier'
            },
            {
                name: 'Ignacio'
            },
            {
                name: 'Jose Carlos'
            },
            {
                name: 'Jesus'
            },
            {
                name: 'Ismael'
            },
            {
                name: 'Alfonso'
            },
            {
                name: 'Alvaro'
            },
            {
                name: 'Alicia'
            },
            {
                name: 'Cesar'
            },
            {
                name: 'Amador'
            }
        ]

    }



}]);