var defaultComments = [{author: 'Joe', body: 'Cool post!', upvotes: 0},{author: 'Bob', body: 'Great idea but everything is wrong!', upvotes: 0}]

// define module:
// NB ui router is not the standard angular router (ngRoute)
var app = angular.module('flapperNews', ['ui.router']);

// use config function to set up routing (ui-router)
app.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {
  // route table..
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: '/home.html',
      controller: 'MainCtrl'
    })
    .state('posts', {
      url: '/posts/{id}',
      templateUrl: '/posts.html',
      controller: 'PostsCtrl'
    });

  // 'otherwise' catches all undefined routes
  $urlRouterProvider.otherwise('home');
}]);


//  define factory:
// NB factories return an object (as opposed to services which create a constructor)
app.factory('posts', [function(){
  var o = {
    posts: [
      {title: 'post 1', upvotes: 5, comments: defaultComments},
      {title: 'post 2', upvotes: 2, comments: defaultComments},
      {title: 'post 3', upvotes: 15, comments: defaultComments},
      {title: 'post 4', upvotes: 9, comments: defaultComments},
      {title: 'post 5', upvotes: 4, comments: defaultComments}
    ]
  };
  return o;
}]);

// define controllers:
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
      upvotes: 0,
      comments: defaultComments
    });
    // reset variables
    $scope.link = '';
    $scope.title = '';
  };

  $scope.incrementUpvotes = function(post) {
    post.upvotes += 1;
  };

}]);

app.controller('PostsCtrl', [
'$scope',
'$stateParams', //ui-router: url params
'posts',
function($scope, $stateParams, posts){
  $scope.post = posts.posts[$stateParams.id];

  $scope.addComment = function(){
    if($scope.body === '') { return; }
    $scope.post.comments.push({
      body: $scope.body,
      author: 'user',
      upvotes: 0
    });
    $scope.body = '';
  };

}]);