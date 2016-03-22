var controllers = angular.module('mySimpleTaskApp.controllers', []);

controllers.controller('HomePageController', ['$scope', '$rootScope', '$http', function($scope, $rootScope, $http) {
    $scope.showAlert = function() {
        alert('This is an alert! Run!')
    }
    
      $scope.executeFunction= function (myText) {
           if(myText != undefined) 
            alert(myText);
        }
    
    
}]);