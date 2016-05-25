var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/jake', {
      templateUrl: '/views/jake.html',
      controller: "JakeController"
    })
    .when('/scooby', {
      templateUrl: '/views/scooby.html',
      controller: "ScoobyController"
    })
    .when('/courage', {
      templateUrl: '/views/courage.html',
      controller: "CourageController"
    })
    .otherwise({
      redirectTo: 'jake'
    })
}]);
