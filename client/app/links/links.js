angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links, $location) {
  $scope.data = {};
  Links.getAll().then(function(data) {
    $scope.data.links = data;
  }).then(function() {
    $location.path('/links');
    
  });

});
