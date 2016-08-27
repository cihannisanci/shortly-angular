angular.module('shortly.links', [])

.controller('LinksController', function ($scope, data, $location, isAuth, Auth) {
  if (isAuth) {
    $location.path('/links');
  } else {
    $location.path('/signin');
  }

  $scope.data = {
    links: data
  };
  
  $scope.signout = function() {
    return Auth.signout();
  };

});
