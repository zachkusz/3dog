myApp.controller('JakeController', ['$scope', function($scope) {
  console.log('Courage controller running');
  $scope.name = "Jake the Dog";
  $scope.show = 'Adventure Time!';
  $scope.run =  'April 5, 2010 - Present';
  $scope.episodes = '233 Episodes';
  $scope.creator = 'Pendelton Ward';
  $scope.voiceActor = 'John DiMaggio';
}]);
