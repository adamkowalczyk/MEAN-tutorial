// define module:
var app = angular.module('flapperNews', []);

// define controller:
app.controller('MainCtrl', [
'$scope',
// $scope is the 'application object'.  
function($scope){
  $scope.test = 'Hello world!';
  
  $scope.posts = [
    {title: 'post 1', upvotes: 5},
    {title: 'post 2', upvotes: 2},
    {title: 'post 3', upvotes: 15},
    {title: 'post 4', upvotes: 9},
    {title: 'post 5', upvotes: 4}
  ];
 
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