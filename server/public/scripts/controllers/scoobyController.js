myApp.controller('ScoobyController', ['$scope', function($scope) {
  console.log('scoob controller running');
  $scope.name = "Scooby-Doo";
  $scope.show = 'Sooby-Doo, Where Are You!';
  $scope.run =  'Sept. 13, 1969 – Nov. 4, 1978';
  $scope.episodes = '34 Episodes';
  $scope.creator = 'Joe Ruby';
  $scope.voiceActor = 'Don Messick';
}]);
