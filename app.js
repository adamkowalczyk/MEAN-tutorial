// define module:
var app = angular.module('flapperNews', []);

// define controller:
app.controller('MainCtrl', [
'$scope',
// $scope is the 'application object'.  
function($scope){
  $scope.test = 'Hello world!';
  $scope.posts = [
    'post1',
    'post2',
    'post3',
    'post4',
    'post5'
  ];
}]);