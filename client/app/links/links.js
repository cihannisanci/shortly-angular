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

}).directive('shortLink', function() {
  return {
    restrict: 'E',
    template: '<div class="link"> \
        <div class="visits"><span class="count">{{link.visits}}</span>Visits</div> \
        <div class="title">{{link.title}}</div> \
        <div class="original">{{link.url}}</div> \
        <a href="{{link.baseUrl}}/{{link.code}}">{{link.baseUrl}}/{{link.code}}</a> \
      </div>'

  };
});
