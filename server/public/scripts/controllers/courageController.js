myApp.controller('CourageController', ['$scope','DataFactory', function($scope, DataFactory) {
  console.log('Courage controller running');
  $scope.datafactory = DataFactory;
  $scope.hi = DataFactory;
  $scope.name = "Courage the Cowardly Dog.";
  $scope.show = 'The Courage the Cowardly Dog Show!';
  $scope.run =  'Nov. 12, 1999 - Nov. 22, 2002';
  $scope.episodes = '52 Episodes (102 segments)';
  $scope.creator = 'John R. Dilworth';
  $scope.voiceActor = 'Marty Grabstein';
}]);
