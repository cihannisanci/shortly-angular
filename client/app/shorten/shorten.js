angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links, Auth) {
  $scope.link = {};
  $scope.addLink = function(link) {
    var linkObj = {url: link};
    Links.addOne(linkObj);
  };
  if (Auth.isAuth()) {
    $location.path('/shorten');
  } else {
    $location.path('/signin');
  }
});
