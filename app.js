// define module
var app = angular.module('flapperNews', []);

// define controller
app.controller('MainCtrl', [
'$scope',
function($scope){
  $scope.test = 'Hello world!';
}]);