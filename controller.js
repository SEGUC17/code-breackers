.controller('ServiceCtrl', function($scope, ServicesData, BusinessData, $stateParams)
 {
  $scope.service = ServicesData.getSelectedService($stateParams.service);
  $scope.businessList = BusinessData.getSelectedBusiness($stateParams.service);
  $scope.ratings = {
      current: 5,
      max: 10
     };
