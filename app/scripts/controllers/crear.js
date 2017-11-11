angular.module('drenajesWebInterfazApp')
  .controller('CrearExpCtrl', function ($scope,apiService,sesion) {
      d = new Date()
      $scope.expediente = {
        id : '',
        folio : '',
        fecha : d.getDate() + '/' + (d.getMonth()+1) + '/' + d.getFullYear(),
        tipo : '',
        remitente : '',
        firma : ''
      }
      $scope.requisitos = []
      $scope.descripcion = ''
      $scope.cumple = true
      $scope.agregar_req = function(){
        if($scope.descripcion!=''){
          $scope.requisitos.push({ descripcion : $scope.descripcion, cumple:$scope.cumple})
          console.log($scope.requisitos)
        }
      }

      $scope.crear_exp = function(){
          if($scope.expediente.id == '' || $scope.expediente.folio == '' || $scope.fecha == '' || $scope.expediente.tipo == '' || $scope.remitente == '' || $scope.expediente.firma == ''){
            $scope.alerta = 'No puede dejar campos vacios'
            return null
          }

        apiService.post('/expedientes/expediente/nuevo', )
        .then(function successCallback(response) {
            
        }, function errorCallback(response) {

        })
      }
  });
