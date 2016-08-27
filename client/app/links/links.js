angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links, $location, Auth) {
  $scope.data = {};
  Links.getAll().then(function(data) {
    $scope.data.links = data;
  }).then(function() {
    return Auth.isAuth();
  }).then(function(isAuth) {
    if (isAuth) {
      $location.path('/links');
    } else {
      $location.path('/signin');
    }

  });
  $scope.signout = function() {
    return Auth.signout();
  };

});
