angular.module('drenajesWebInterfazApp')
  .controller('CrearExpCtrl', function ($scope,apiService,sesion) {
      
      $scope.expediente = {
        id : '',
        folio : '',
        fecha : new Date(),
        tipo : '',
        remitente : '',
        firma : ''
      }
      $scope.requisitos = []
      $scope.descripcion = ''
      $scope.cumple = true
      $scope.agregar_req = function(){
        if($scope.descripcion!=''){
          $scope.requisitos.push({ descripcion : $scope.descripcion, cumple:$scope.cumple, necesario:true})
          console.log($scope.requisitos)
        }
      }
  });
