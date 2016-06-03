myApp.controller('JakeController', ['$scope','DataFactory', function($scope, DataFactory) {
  console.log('Courage controller running');
  $scope.datafactory = DataFactory;
  $scope.hi = DataFactory;
  $scope.name = "Jake the Dog";
  $scope.show = 'Adventure Time!';
  $scope.run =  'April 5, 2010 - Present';
  $scope.episodes = '233 Episodes';
  $scope.creator = 'Pendelton Ward';
  $scope.voiceActor = 'John DiMaggio';
}]);
