myApp.controller('ScoobyController', ['$scope', 'DataFactory', function($scope, DataFactory) {
  console.log('scoob controller running');
  $scope.datafactory = DataFactory;
  $scope.hi = DataFactory;
  $scope.name = "Scooby-Doo";
  $scope.show = 'Sooby-Doo, Where Are You!';
  $scope.run =  'Sept. 13, 1969 – Nov. 4, 1978';
  $scope.episodes = '34 Episodes';
  $scope.creator = 'Joe Ruby';
  $scope.voiceActor = 'Don Messick';
}]);
