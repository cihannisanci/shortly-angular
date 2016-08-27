angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links, urlCheck, isAuth, Auth) {
  if (isAuth) {
    $location.path('/shorten');
  } else {
    $location.path('/signin');
  }
  $scope.link = {};
  $scope.checkUrl = function(link) {
    if (urlCheck.isValid(link)) {
      $scope.addLink(link);
      $scope.checkMe = '';
      $scope.message = '';
    } else {
      $scope.message = 'Invalid URL';
    }
  };
  $scope.addLink = function(link) {
    var linkObj = {url: link};
    Links.addOne(linkObj);
  };
  $scope.signout = function() {
    return Auth.signout();
  };
});
