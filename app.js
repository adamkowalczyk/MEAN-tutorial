// define module:
// NB ui router is not the standard angular router (ngRoute)
var app = angular.module('flapperNews', ['ui.router']);

// use config function to set up routing (ui-router)
app.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: '/home.html',
      controller: 'MainCtrl'
    });

  // 'otherwise' catches all undefined routes
  $urlRouterProvider.otherwise('home');
}]);


//  define factory:
// NB factories return an object (as opposed to services which create a constructor)
app.factory('posts', [function(){
  var o = {
    posts: [
      {title: 'post 1', upvotes: 5},
      {title: 'post 2', upvotes: 2},
      {title: 'post 3', upvotes: 15},
      {title: 'post 4', upvotes: 9},
      {title: 'post 5', upvotes: 4}
    ]
  };
  return o;
}]);

// define controller:
// NB Controllers are not for data -no persistance.
app.controller('MainCtrl', [
'$scope',
'posts',
// $scope is the 'application object'.  
function($scope, posts){
  
  // make factory object avaialble in $scope
  $scope.posts = posts.posts;
 
  $scope.addPost = function(){
    // prevent empty posts:
    if(!$scope.title || $scope.title === '') { return; }
    // $scope.title comes from ng-model directive in html form
    $scope.posts.push({
      title: $scope.title,
      link: $scope.link,
      upvotes: 0});
    // reset variables
    $scope.link = '';
    $scope.title = '';
  };

  $scope.incrementUpvotes = function(post) {
    post.upvotes += 1;
  };

}]);